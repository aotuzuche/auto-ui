import cn from 'classnames'
import React, { useEffect, useMemo, useState } from 'react'
import { AtFile, ParsedFileInfo } from './interface'
import defaultRequest from './request'
import './style/index.scss'
import getUid from './uid'

export interface UploadFile {
  url: string
  uid: string
  progress: number
  done: boolean
}

export interface IProps {
  id: string
  style?: React.CSSProperties
  accept?: string
  action?: string
  data: any
  filename?: string
  onBeforeUpload?: (file: AtFile, fileList: AtFile[]) => void
  fileList?: UploadFile[]
  multiple?: boolean
  maxCount?: number
  method?: 'post' | 'get' | 'put' | 'patch'
  onPreview?: (url: string) => void
  onProgress?: () => void
  onSuccess: (fileList: UploadFile[], e?: React.MouseEvent) => void
  onError?: (error: Error) => void
  listType?: 'picture-card'
  className?: string
  disabled?: boolean
  initialFileList?: UploadFile[]
}

export interface IOssData {
  accessId: string
  policy: string
  signature: string
  dir: string
  host: string
  expire: number
}

const Upload: React.FC<IProps> = props => {
  const {
    id,
    className,
    fileList = [],
    onPreview,
    data,
    accept,
    method,
    multiple,
    filename,
    disabled,
    maxCount = 1,
    onBeforeUpload,
    onError,
    onSuccess,
    initialFileList,
    ...otherProps
  } = props

  const [uid, setUid] = useState(getUid())

  const [isHideSelectEle, setHideSelectEle] = useState(false)

  const [totalFileList, setTotalFileList] = useState<UploadFile[]>(fileList)

  const reqs: any = {}

  const { host = '', dir = '' } = data || {}

  const classes = cn('x-upload', className, {
    'x-upload--disabled': disabled,
  })

  const initialFileListMemo = useMemo(() => initialFileList, [initialFileList])

  const onFileChange = (e: any) => {
    const { files = [] } = e.target
    const isGltMaxCount = checkFileCount(files)

    if (isGltMaxCount) {
      onError && onError(new Error('超出最大数量'))
      return
    }

    uploadFiles(files)

    reset()
  }

  const getExtraData = (file: AtFile) => {
    const [name, suffix] = file.name.split('.')
    return {
      key: `${dir}${filename ? filename : name}-${file.uid}.${suffix}`,
      OSSAccessKeyId: data.accessId,
      policy: data.policy,
      Signature: data.signature,
    }
  }

  const checkFileCount = (files: any): boolean => {
    // 用于提示错误，当可以多选择时一次性选择的数量+已经上传的数量超出了最大数量则提示错误
    return files.length + fileList.length > maxCount ? true : false
  }

  const uploadFiles = (files: File[]) => {
    const originFiles = Array.prototype.slice.call(files) as AtFile[]
    const postFiles = originFiles.map((file: AtFile & { uid?: string }) => {
      file.uid = getUid()
      return processFile(file, originFiles)
    })

    Promise.all(postFiles).then(fileList => fileList.forEach(file => post(file)))
  }

  const processFile = async (file: AtFile, fileList: AtFile[]): Promise<any> => {
    if (onBeforeUpload) {
      try {
        await onBeforeUpload(file, fileList)
      } catch (e) {
        return {
          file,
          data: null,
          error: e,
        }
      }
    }

    const data = getExtraData(file)

    setTotalFileList(f => {
      f.push({
        url: `${host}/${data.key}`,
        uid: file.uid,
        progress: 0,
        done: false,
      })
      return f
    })

    return {
      file,
      data,
    }
  }

  const post = ({ file, data, error }: ParsedFileInfo) => {
    const { uid } = file
    const request = defaultRequest

    if (!data) {
      onError && onError(error)
      return
    }

    const requestOption = {
      action: host,
      filename: 'file',
      data,
      file,
      method: method || 'post',
      onSuccess: () => {
        onSuccess && onSuccess(updateSuccessFile(uid))
        delete reqs[uid]
      },
      onError: (err: any) => {
        onError && onError(err)
        delete reqs[uid]
      },
      onProgress: (e: any) => {
        updateFileProgress(e, uid)
      },
    }

    checkCurrentMaxCount()

    reqs[uid] = request(requestOption)
  }

  const updateSuccessFile = (uid: string) => {
    const currentFileIndex = totalFileList.findIndex((item: UploadFile) => item.uid === uid)

    if (currentFileIndex > -1) {
      const total = [...totalFileList]
      total[currentFileIndex].done = true
      setTotalFileList(total)
    }

    return totalFileList
  }

  const checkCurrentMaxCount = (files?: UploadFile[]) => {
    if ((files || totalFileList).length >= maxCount) {
      setHideSelectEle(true)
    }
  }

  const updateFileProgress = (e: any, uid: string) => {
    const currentFileIndex = totalFileList.findIndex((item: UploadFile) => item.uid === uid)
    if (currentFileIndex === -1) {
      return
    }

    const total = [...totalFileList]
    total[currentFileIndex].progress = e.precent

    setTotalFileList(total)
  }

  const reset = () => {
    setUid(getUid())
  }

  const abort = (file?: any) => {
    if (file) {
      const uid = file.uid ? file.uid : file
      if (reqs[uid] && reqs[uid].abort) {
        reqs[uid].abort()
      }

      delete reqs[uid]
    } else {
      Object.keys(reqs).forEach(uid => {
        if (reqs[uid] && reqs[uid].abort) {
          reqs[uid].abort()
        }

        delete reqs[uid]
      })
    }
  }

  const onFileItemDelete = (uid: string, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()

    const currentFileIndex = totalFileList.findIndex((item: UploadFile) => item.uid === uid)

    if (currentFileIndex === -1) {
      return
    }

    totalFileList.splice(currentFileIndex, 1)

    if (totalFileList.length < maxCount) {
      setHideSelectEle(false)
    }

    onSuccess && onSuccess(totalFileList, e)
  }

  useEffect(() => {
    checkCurrentMaxCount()

    return () => {
      abort()
    }
  }, [])

  useEffect(() => {
    if (
      !initialFileListMemo ||
      !Array.isArray(initialFileListMemo) ||
      initialFileListMemo.length === 0
    ) {
      return
    }
    setTotalFileList(initialFileListMemo)
    checkCurrentMaxCount(initialFileListMemo)
  }, [initialFileListMemo])

  if (!data || !data.host) {
    return null
  }

  return (
    <div className={classes}>
      <div className="x-upload__inner">
        {totalFileList.map((file: UploadFile) => (
          <div className="x-upload--file" key={file.uid}>
            <div className="x-upload--filecontent">{file.done && <img src={file.url} />}</div>
            <div className="x-upload--handleicon" onClick={e => onFileItemDelete(file.uid, e)} />

            {file.progress !== 100 && (
              <div className="x-upload--progress">
                <h6>上传中</h6>
                <div className="p">
                  <div className="i" style={{ width: `${file.progress}% ` }} />
                </div>
              </div>
            )}
          </div>
        ))}

        {!isHideSelectEle && (
          <div className="x-upload--file x-upload--select">
            <input
              accept={accept}
              id={id}
              key={uid}
              multiple={multiple}
              onClick={e => e.stopPropagation()}
              type="file"
              onChange={onFileChange}
              {...otherProps}
            />
            <span>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="plus"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
              </svg>
            </span>
            <p>上传</p>
          </div>
        )}
      </div>
    </div>
  )
}

Upload.defaultProps = {
  method: 'post',
  listType: 'picture-card',
  maxCount: 1,
  fileList: [],
  multiple: false,
  accept: 'image/*',
}
export default Upload
