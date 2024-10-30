import cn from 'classnames'
import React, { forwardRef, useEffect, useState, useRef } from 'react'
import './style/index.scss'
import { useClickAway } from 'ahooks'
import Input from '../input/index'

interface IOption {
  label: string
  value: string | number
}

interface IProps {
  className?: string
  height?: number
  data: IOption[]
  current: IOption | null
  onChange: (value: IOption) => void
  noDataElement?: string | React.ReactNode
  placeholder?: string
  [otherProps: string]: any
}

export interface PopoverRef {
  show: () => void
  hide: () => void
  visible: boolean
}

const Select: React.FC<IProps> = forwardRef<PopoverRef, IProps>((props, ref) => {
  const {
    className,
    height,
    data,
    current,
    onChange,
    placeholder,
    noDataElement,
    ...otherProps
  } = props

  const [isVisible, setVisible] = useState(false)

  const [inputValue, setInputValue] = useState(current ? current.label : '')

  const [selectData, setSelectData] = useState(data)

  const floatRef = useRef(null)

  const composeClassName = cn('x-select', className)

  const composeStyle: Record<string, string> = {}

  if (height) {
    composeStyle.height = `${height}px`
  }

  useEffect(() => {
    setInputValue(current ? current.label : '')
  }, [current])

  useEffect(() => {
    setSelectData(data)
  }, [data])

  // @ts-ignore
  React.useImperativeHandle(
    ref,
    () => {
      return {
        show: () => setVisible(true),
        hide: () => setVisible(false),
      }
    },
    [],
  )

  useClickAway(() => {
    setVisible(false)
  }, [floatRef.current])

  const onOptionClick = (value: IOption, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    onChange && onChange(value)

    setVisible(false)
  }

  const filterDataList = (list: IOption[], key: string) => {
    if (!key) {
      return list
    }

    return list.filter((item: IOption) => item.label.indexOf(key) > -1)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value
    const item: IOption | undefined = data.find((item: IOption) => item.label === value)

    setInputValue(value)

    if (item) {
      onChange && onChange(item)
    }

    const cityList = filterDataList(data, value)
    setSelectData(cityList)
  }

  const onInputFocus = () => {
    setVisible(true)
  }

  return (
    <div ref={floatRef} className={composeClassName} style={composeStyle} {...otherProps}>
      <div className="x-select__input">
        <Input
          placeholder={placeholder}
          onFocus={onInputFocus}
          onChange={onInputChange}
          allowClear
          value={inputValue}
        />
      </div>

      {isVisible && (
        <div className="x-select__wrapper">
          {!selectData || selectData.length === 0 ? (
            <div className="nodata">{noDataElement}</div>
          ) : (
            selectData.map((item: IOption) => (
              <div
                className={cn('x-select__option', {
                  checked: current && current.value === item.value,
                })}
                key={item.value}
                onClick={e => onOptionClick(item, e)}
              >
                <div className="x-select__name">{item.label}</div>
                <div className="x-select__icon" />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
})

Select.defaultProps = {
  placeholder: '暂无数据',
}

export default Select
