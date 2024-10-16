import cn from 'classnames'
import React, { forwardRef, useEffect, useState, useRef } from 'react'
import './style/index.scss'
import { createPortal } from 'react-dom'
import { computePosition, ReferenceElement } from '@floating-ui/dom'
import { useClickAway } from 'ahooks'
import { BasicTarget } from 'ahooks/lib/utils/domTarget'

interface IOption {
  label: string
  value: string | number
}

interface IProps {
  top?: number
  className?: string
  height?: number
  left?: number
  right?: number
  referenceRef: ReferenceElement | null
  data: IOption[]
  value: string | number | undefined
  onChange: (value: IOption) => void
  placeholder?: string | React.ReactNode
  [otherProps: string]: any
}

export interface PopoverRef {
  show: () => void
  hide: () => void
  visible: boolean
}

const Select: React.FC<IProps> = forwardRef<PopoverRef, IProps>((props, ref) => {
  const {
    top = 0,
    className,
    height,
    left,
    right,
    referenceRef,
    data,
    value,
    onChange,
    placeholder,
    ...otherProps
  } = props

  const [isVisible, setVisible] = useState(false)

  const floatRef = useRef(null)

  const composeClassName = cn('x-select', className, {
    'x-select-hidden': !isVisible,
  })

  const composeStyle: Record<string, string> = {
    paddingLeft: `${left}px`,
    paddingRight: `${right}px`,
  }

  if (height) {
    composeStyle.height = `${height}px`
  }

  useEffect(() => {
    if (!floatRef.current || !referenceRef) {
      return
    }

    computePosition(referenceRef, floatRef.current as any).then(({ y }: { y: number }) => {
      Object.assign((floatRef.current as any).style, {
        top: `${y + top}px`,
      })
    })
  }, [floatRef.current, referenceRef])

  // @ts-ignore
  React.useImperativeHandle(
    ref,
    () => {
      return {
        show: () => setVisible(true),
        hide: () => setVisible(false),
        visible: isVisible,
      }
    },
    [isVisible],
  )

  useClickAway(() => {
    setVisible(false)
  }, [floatRef.current, referenceRef as BasicTarget])

  const onOptionClick = (value: IOption, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    onChange && onChange(value)

    setVisible(false)
  }

  return createPortal(
    <div ref={floatRef} className={composeClassName} style={composeStyle} {...otherProps}>
      <div className="x-select__wrapper">
        {!data || data.length === 0 ? (
          <div className="nodata">{placeholder}</div>
        ) : (
          data.map((item: IOption) => (
            <div
              className={cn('x-select__option', {
                checked: value === item.value,
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
    </div>,
    document.body,
  )
})

Select.defaultProps = {
  left: 15,
  right: 15,
  top: 0,
  placeholder: '暂无数据',
}

export default Select
