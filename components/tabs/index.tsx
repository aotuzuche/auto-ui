import cn from 'classnames'
import * as React from 'react'
import './style.scss'

interface IItemProps {
  value: string | number
  className?: string
  children: React.ReactNode
  [otherProps: string]: any
}

const TabsItem: React.FC<IItemProps> = props => {
  const { active, value, className, onClick, children, ...otherProps } = props

  const composeClassName = cn(
    'x-tabs__item',
    {
      'x-tabs--active': !!active,
    },
    className,
  )

  const onAClick = () => {
    onClick(value)
  }

  return (
    <button {...otherProps} className={composeClassName} onClick={onAClick}>
      {children}
    </button>
  )
}

interface ITabsProps {
  className?: string
  active: string | number
  onClick: (value: string | number) => void
  [otherProps: string]: any
}

const Tabs: React.FC<ITabsProps> & { Item: React.FC<IItemProps> } = props => {
  const { className, children, active, onClick, ...otherProps } = props
  const composeClassName = cn('x-tabs', className)

  let activeOffset = -2

  let composeChildren: any[] = []
  if (Array.isArray(children)) {
    composeChildren.push(...children)
  } else {
    composeChildren.push(children)
  }

  composeChildren = composeChildren.map((res, index) => {
    const act = props.hasOwnProperty('active') && res.props.value === props.active
    if (act) {
      activeOffset = index
    }
    return React.cloneElement(res, {
      active: act,
      key: index,
      value: res.props.value,
      onClick: props.onClick,
      children: res.props.children,
    })
  })

  const [cls, setCls] = React.useState('x-tabs__line')
  const [first, setFirst] = React.useState(true)

  React.useEffect(() => {
    if (!first) {
      setCls('x-tabs__line x-tabs__line--ani')
    } else {
      setFirst(false)
    }
  }, [activeOffset])

  const onTransEnd = () => {
    setCls('x-tabs__line')
  }

  return (
    <div {...otherProps} className={composeClassName}>
      <sub
        className={cls}
        style={{
          width: `${100 / composeChildren.length}%`,
          WebkitTransform: `translate(${activeOffset * 100}%, 0)`,
        }}
        onTransitionEnd={onTransEnd}
      />
      {composeChildren}
    </div>
  )
}

Tabs.Item = TabsItem

export default Tabs
