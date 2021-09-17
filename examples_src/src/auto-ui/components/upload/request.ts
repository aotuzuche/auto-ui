function getError(option: any, xhr: XMLHttpRequest) {
  const msg = `cannot ${option.method} ${option.action} ${xhr.status}'`
  const err: any = new Error(msg)
  err.status = xhr.status
  err.method = option.method
  err.url = option.action
  return err
}

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response
  if (!text) {
    return text
  }

  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

export default function upload(option: any) {
  const xhr = new XMLHttpRequest()

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function (e: any) {
      if (e.total > 0) {
        e.precent = (e.loaded / e.total) * 100
      }
      option.onProgress(e)
    }
  }

  const formData = new FormData()

  if (option.data) {
    Object.keys(option.data).forEach(key => {
      const value = option.data[key]

      if (Array.isArray(value)) {
        value.forEach(item => formData.append(`${key}[]`, item))
        return
      }

      formData.append(key, value)
    })
  }

  formData.append('file', option.file)

  xhr.onerror = function (e) {
    option.onError(e)
  }

  xhr.onload = function () {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr))
    }

    return option.onSuccess(getBody(xhr), xhr)
  }

  xhr.open(option.method, option.action, true)

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true
  }

  const headers = option.headers || {}

  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  }

  Object.keys(headers).forEach(key => {
    if (headers[key] !== null) {
      xhr.setRequestHeader(key, headers[key])
    }
  })

  xhr.send(formData)

  return {
    abort() {
      xhr.abort()
    },
  }
}
