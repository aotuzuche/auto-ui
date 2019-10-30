import cn from 'classnames'
import * as React from 'react'
import './style.scss'

interface IFigureProps {
  image: string
  title?: string
  onClick?: () => void
  [otherProps: string]: any
}

const CardFigure: React.FC<IFigureProps> = props => {
  const { image, title, children, onClick, ...otherProps } = props

  const cls = cn('x-card-figure', { 'x-card-figure--activable': !!onClick })

  return (
    <figure {...otherProps} className={cls} onClick={onClick}>
      <div className="x-card-figure-content">{children}</div>
      <img src={image} alt={title} title={title} />
    </figure>
  )
}

interface ICardProps {
  shadow?: boolean
  children: React.ReactNode
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  aspectRatio: number
  onClick?: () => void
  [otherProps: string]: any
}

const Card: React.FC<ICardProps> & {
  Figure: React.FC<IFigureProps>
} = props => {
  const { shadow, children, direction, aspectRatio, onClick, ...otherProps } = props

  const cls = cn('x-card', {
    'x-card--shadow': shadow,
    'x-card--activable': !!onClick,
  })

  return (
    <div {...otherProps} className={cls} onClick={onClick}>
      <div className={`x-card-inner x-card--${direction || 'column'}`}>{children}</div>
      <div
        className="x-card-ar"
        style={{
          marginTop: `${(typeof aspectRatio === 'undefined' || aspectRatio < 0 ? 1 : aspectRatio) *
            100}%`,
        }}
      />
    </div>
  )
}

Card.Figure = CardFigure

export default Card
