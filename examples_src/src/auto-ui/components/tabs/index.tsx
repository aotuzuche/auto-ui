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

  ref: React.RefObject<HTMLDivElement> = React.createRef()

  animTimer: any = 0

  animIsRunning: boolean = false

  state = {
    currentActive: -2,
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
    if (this.animIsRunning) {
      return
    }
    if (this.ref && this.ref.current) {
      const dom = this.ref.current
      const line = dom.querySelector('.x-tabs__line')!

      let currentX = 0
      let targetX = 0

      const moveLine = () => {
        let duration = 0.3
        if (Math.abs(targetX - currentX) < 90) {
          duration = 0.15
        }
        line.setAttribute(
          'style',
          `transform: translate(${targetX}px, 0); transition: transform ${duration}s ease-out;`,
        )
        if (line.firstChild) {
          ;(line.firstChild as any).setAttribute(
            'style',
            `animation: __x_tabs_line_scale ${duration}s ease-out`,
          )
        }
      }

      for (let item of dom.children as any) {
        if (item.classList.contains('x-tabs--active')) {
          const cur = dom.children[this.state.currentActive]
          currentX = cur
            ? cur.getBoundingClientRect().left + cur.getBoundingClientRect().width / 2
            : -300
          targetX = item.getBoundingClientRect().left + item.getBoundingClientRect().width / 2
          if (currentX !== targetX && line) {
            this.animIsRunning = true
            line.setAttribute('style', `transform: translate(${currentX}px, 0);`)

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
        line.setAttribute('style', 'display: none;')
      }
      this.animIsRunning = false
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
          if (this.animIsRunning) {
            return
          }
          onClick(value)
        },
        children: res.props.children,
      })
    })

    if (shrink) {
      return (
        <div {...otherProps} className={composeClassName}>
          <div className="x-tabs--scroller">
            <div className="x-tabs__inner" ref={this.ref}>
              <sub
                className="x-tabs__line"
                style={{ display: 'none' }}
                onTransitionEnd={this.onTransitionEnd}
              >
                <i />
              </sub>
              {composeChildren}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div {...otherProps} className={composeClassName} ref={this.ref}>
        <sub
          className="x-tabs__line"
          style={{ display: 'none' }}
          onTransitionEnd={this.onTransitionEnd}
        >
          <i />
        </sub>
        {composeChildren}
      </div>
    )
  }
}

Tabs.Item = TabsItem

export default Tabs
