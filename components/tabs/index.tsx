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

  preIndex: number = -2
  ref: React.RefObject<HTMLDivElement> = React.createRef()
  lineRef: React.RefObject<HTMLDivElement> = React.createRef()
  targetTabItem: any = null
  initTimer: any = null

  state = {
    currentActiveIndex: -2,
    direction: '',
  }

  componentDidMount() {
    if (this.ref.current) {
      const tab = this.ref.current.querySelector('.x-tabs--active')
      if (!tab) {
        return
      }
      tab.classList.add('x-tabs--active-l')
      this.initTimer = setTimeout(this.animLine, 1000, false)
    }
  }

  animLine = (anim: boolean = true) => {
    this.targetTabItem = null
    clearTimeout(this.initTimer)
    if (this.preIndex === this.state.currentActiveIndex) {
      return
    }
    if (this.lineRef.current && this.ref.current) {
      const d = this.state.direction
      const index = this.state.currentActiveIndex
      this.targetTabItem = this.ref.current.querySelectorAll('.x-tabs__item')[index]
      if (!this.targetTabItem) {
        return
      }
      const targetRect = this.targetTabItem.getBoundingClientRect()
      const parentRect = this.ref.current.getBoundingClientRect()
      const targetCenter = targetRect.left + targetRect.width / 2 - parentRect.left
      const process = (targetCenter / parentRect.width) * 100

      const supT = `transform: translateX(${process}%)`
      const subT = `transform: translateX(${process}%)`
      let supA = `transition: transform 0.25s ${
        d === 'L' ? 'cubic-bezier(0,0,0.5,1)' : d === 'R' ? 'cubic-bezier(0.5,0,1,1)' : 'linear'
      }`
      let subA = `transition: transform 0.25s ${
        d === 'L' ? 'cubic-bezier(0.5,0,1,1)' : d === 'R' ? 'cubic-bezier(0,0,0.5,1)' : 'linear'
      }`
      if (!anim) {
        supA = ''
        subA = ''
      }

      this.lineRef.current.setAttribute('style', 'opacity: 1;')
      this.lineRef.current.children[1].setAttribute('style', `${subT};${subA}`)
      this.lineRef.current.children[0].setAttribute('style', `${supT};${supA}`)
      this.preIndex = this.state.currentActiveIndex
      if (!anim) {
        this.onAnimEnd()
      }
    }
  }

  onAnimEnd = () => {
    if (this.lineRef.current) {
      this.lineRef.current.removeAttribute('style')
    }
    const index = this.state.currentActiveIndex
    if (this.ref.current) {
      this.targetTabItem = this.ref.current.querySelectorAll('.x-tabs__item')[index]
      if (this.targetTabItem) {
        this.targetTabItem.classList.add('x-tabs--active-l')
      }
    }
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
        onClick: this.props.onClick,
        children: res.props.children,
      })
    })

    this.animLine() // 初始化并不执行

    if (shrink) {
      return (
        <div {...otherProps} className={composeClassName}>
          <div className="x-tabs__scroller">
            <div className="x-tabs__inner" ref={this.ref}>
              {composeChildren}
              <div className="x-tabs__line" ref={this.lineRef}>
                <sup onTransitionEnd={this.onAnimEnd} />
                <sub />
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div {...otherProps} className={composeClassName} ref={this.ref}>
        {composeChildren}
        <div className="x-tabs__line" ref={this.lineRef}>
          <sup onTransitionEnd={this.onAnimEnd} />
          <sub />
        </div>
      </div>
    )
  }
}

Tabs.Item = TabsItem

export default Tabs
