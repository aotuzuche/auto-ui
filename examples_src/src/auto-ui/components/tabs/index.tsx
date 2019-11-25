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
  shrink?: boolean
  onClick: (value: string | number) => void
  [otherProps: string]: any
}

class Tabs extends React.PureComponent<ITabsProps> {
  static Item: any

  ref: React.RefObject<any> = React.createRef()

  animTimer: any = 0

  state = {
    currentActive: -2,
    runAnim: false,
  }

  componentDidMount() {
    if (this.ref && this.ref.current) {
      const dom = this.ref.current
      for (let i = 0; i < dom.children.length; i++) {
        if (dom.children[i].classList.contains('x-tabs--active')) {
          dom.children[i].classList.add('x-tabs--line')
          this.setState({
            currentActive: i,
          })
          break
        }
      }
    }
  }

  componentDidUpdate() {
    if (this.state.runAnim) {
      return
    }
    if (this.ref && this.ref.current) {
      const dom = this.ref.current
      const line = dom.querySelector('.x-tabs__line')

      let currentX = 0
      let targetX = 0

      const moveLine = () => {
        let duration = 0.3
        if (Math.abs(targetX - currentX) < 90) {
          duration = 0.15
        }
        line.style.transform = `translate(${targetX}px, 0)`
        line.style.transition = `transform ${duration}s ease-out`
        line.style.animation = `__x_tabs_line_scale ${duration}s ease-out`
      }

      for (let item of dom.children) {
        if (item.classList.contains('x-tabs--active')) {
          const cur = dom.children[this.state.currentActive]
          currentX = cur ? cur.offsetLeft + cur.clientWidth / 2 : -300
          targetX = item.offsetLeft + item.clientWidth / 2
          if (currentX !== targetX && line) {
            line.style.transform = `translate(${currentX}px, 0)`
            line.style.transition = 'none'
            line.style.animation = 'none'
            line.style.display = 'block'
            ;(this.setState as any)({
              runAnim: true,
            })
            clearTimeout(this.animTimer)
            this.animTimer = setTimeout(this.onTransitionEnd, 400)
            setTimeout(moveLine, 10)
          }
          break
        }
      }
    }
  }

  onTransitionEnd = () => {
    clearTimeout(this.animTimer)
    if (this.ref && this.ref.current) {
      const dom = this.ref.current
      const line = dom.querySelector('.x-tabs__line')

      for (let i = 0; i < dom.children.length; i++) {
        if (dom.children[i].classList.contains('x-tabs--active')) {
          dom.children[i].classList.add('x-tabs--line')
          this.setState({
            currentActive: i,
          })
          break
        }
      }
      if (line) {
        line.style.display = 'none'
      }
      this.setState({
        runAnim: false,
      })
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
        onClick: (value: any) => {
          if (this.state.runAnim) {
            return
          }
          console.log(this.state.runAnim)
          onClick(value)
        },
        children: res.props.children,
      })
    })

    return (
      <div {...otherProps} className={composeClassName} ref={this.ref}>
        <sub
          className="x-tabs__line"
          style={{ display: 'none' }}
          onTransitionEnd={this.onTransitionEnd}
        />
        {composeChildren}
      </div>
    )
  }
}

Tabs.Item = TabsItem

export default Tabs
