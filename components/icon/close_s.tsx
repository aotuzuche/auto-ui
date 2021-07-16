import cn from 'classnames'
import * as React from 'react'
import { IconProps } from '.'
import { isH5 } from '../__utils/env'
import './style/index.scss'
import { TaroIcon } from './taro-icon'


const SVG = (className?: string) => <svg
className={cn('x-icon', className)}
viewBox="0 0 1024 1024"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
width="200"
height="200"
>
<path d="M590.3271875 512.46875l322.828125-322.8253125c21.7603125-21.76125 21.7603125-57.0375 0-78.7996875-21.76125-21.7575-57.0384375-21.7575-78.796875 0L511.53125 433.671875 193.064375 115.2059375c-21.49875-21.5015625-56.35875-21.5015625-77.8575 0-21.5015625 21.4996875-21.5015625 56.3596875 0 77.859375L433.671875 511.53125 110.8446875 834.3584375c-21.7603125 21.759375-21.7603125 57.0375 0 78.7959375 21.76125 21.7603125 57.0384375 21.7603125 78.796875 0l322.828125-322.828125 317.645625 317.6465625c21.4996875 21.5015625 56.35875 21.5015625 77.8575 0 21.5015625-21.4996875 21.5015625-56.3596875 0-77.8575L590.3271875 512.46875z" />
</svg>

const IconCloseS: React.FC<IconProps> = props => {
  if(isH5) {
    return SVG(props.className);
  }
  return <TaroIcon  className={props.className} color={props.color} svg={SVG()} />
}

export default IconCloseS
