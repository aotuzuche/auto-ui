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

  const onTabClick = () => {
    onClick(value)
  }

  return (
    <button {...otherProps} className={composeClassName} onClick={onTabClick}>
      {children}
    </button>
  )
}

interface ITabsProps {
  className?: string
  active: string | number
  shrink?: boolean
  onClick: (value: string | number) => void
  [otherProps: string]: any
}

interface ITabsState {
  currentActiveIndex: number
  direction: string
}

class Tabs extends React.PureComponent<ITabsProps, ITabsState> {
  static Item: any

  static getDerivedStateFromProps(props: ITabsProps, state: ITabsState) {
    let children: any = props.children || []
    if (!Array.isArray(children)) {
      children = [children]
    }
    for (let i = 0; i < children.length; i++) {
      if (children[i].props && children[i].props.value === props.active) {
        return {
          currentActiveIndex: i,
          direction: state.currentActiveIndex > i ? 'L' : state.currentActiveIndex < i ? 'R' : '',
        }
      }
    }
    return {
      currentActiveIndex: -2,
      direction: '',
    }
  }

  lineRef: React.RefObject<HTMLDivElement> = React.createRef()

  animTimer: any = 0

  animIsRunning: boolean = false

  state = {
    currentActiveIndex: -2,
    direction: '',
  }

  onTabClick = (value: any) => {
    if (this.animIsRunning) {
      return
    }
    this.props.onClick(value)
  }

  render() {
    const { className, children, active, onClick, shrink, ...otherProps } = this.props
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
        onClick: this.onTabClick,
        children: res.props.children,
      })
    })

    // if (shrink) {
    //   return (
    //     <div {...otherProps} className={composeClassName}>
    //       <div className="x-tabs--scroller">
    //         <div className="x-tabs__inner" ref={this.ref}>
    //           <sub
    //             className="x-tabs__line"
    //             style={{ display: 'none' }}
    //             onTransitionEnd={this.onTransitionEnd}
    //           >
    //             <i />
    //           </sub>
    //           {composeChildren}
    //         </div>
    //       </div>
    //     </div>
    //   )
    // }

    if (this.lineRef.current) {
      const d = this.state.direction
      const supT = `transform: translateX(${this.state.currentActiveIndex * 33.3333 +
        33.3333 / 2}%)`
      const subT = `transform: translateX(${this.state.currentActiveIndex * 33.3333 +
        33.3333 / 2}%)`
      const supA = `transition: transform 0.25s ${
        d === 'L' ? 'cubic-bezier(0,0,0.5,1)' : d === 'R' ? 'cubic-bezier(0.5,0,1,1)' : 'linear'
      }`
      const subA = `transition: transform 0.25s ${
        d === 'L' ? 'cubic-bezier(0.5,0,1,1)' : d === 'R' ? 'cubic-bezier(0,0,0.5,1)' : 'linear'
      }`

      this.lineRef.current.children[1].setAttribute('style', `${subT};${subA}`)
      this.lineRef.current.children[0].setAttribute('style', `${supT};${supA}`)
    }

    return (
      <div {...otherProps} className={composeClassName}>
        {composeChildren}
        <div className="x-tabs__line" ref={this.lineRef}>
          <sup />
          <sub />
        </div>
      </div>
    )
  }
}

Tabs.Item = TabsItem

export default Tabs
