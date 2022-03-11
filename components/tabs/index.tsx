import cn from 'classnames'
import * as React from 'react'
import './style/index.scss'

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

  const onTabClick = () => {
    onClick(value)
  }

  return (
    <button {...otherProps} className={composeClassName} onClick={onTabClick}>
      <span>{children}</span>
    </button>
  )
}

interface ITabsProps {
  className?: string
  active: string | number
  shrink?: boolean
  forwardRef?: any
  onClick: (value: string | number) => void
  [otherProps: string]: any
}

class Tabs extends React.PureComponent<ITabsProps> {
  static Item: any

  render() {
    const { className, children, active, onClick, forwardRef, shrink, ...otherProps } = this.props
    const composeClassName = cn(
      'x-tabs',
      {
        'x-tabs--shrink': shrink,
      },
      className,
    )

    let composeChildren: any[] = []
    if (Array.isArray(children)) {
      composeChildren.push(...children)
    } else {
      composeChildren.push(children)
    }

    composeChildren = composeChildren.map((res, index) => {
      const act = this.props.hasOwnProperty('active') && res.props.value === active
      return React.cloneElement(res, {
        active: act,
        key: index,
        value: res.props.value,
        onClick: this.props.onClick,
        children: res.props.children,
      })
    })

    if (shrink) {
      return (
        <div {...otherProps} ref={forwardRef} className={composeClassName}>
          <div className="x-tabs__scroller">
            <div className="x-tabs__inner">{composeChildren}</div>
          </div>
        </div>
      )
    }

    return (
      <div {...otherProps} ref={forwardRef} className={composeClassName}>
        {composeChildren}
      </div>
    )
  }
}

// 转发Ref
const ForwardTabs: any = ((Component: any) =>
  React.forwardRef((props: ITabsProps, ref) => (
    <Component {...props} onClick={props.onClick} active={props.active} forwardRef={ref} />
  )))(Tabs)

ForwardTabs.Item = TabsItem

export default ForwardTabs
