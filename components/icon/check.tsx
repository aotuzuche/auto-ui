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
<path d="M998.68611318 178.27612445c-30.71817955-30.71939318-80.5231123-30.71939318-111.24129185 0l-500.59188148 500.59066785-250.29533393-250.29533393c-30.71939318-30.71939318-80.52432592-30.71939318-111.24250547 0s-30.71939318 80.52432592 0 111.24129185l305.91597985 305.91597986c0.884736 0.88594963 1.74641303 1.70150875 2.58988562 2.46245451 30.867456 28.2253843 78.78034015 27.40982518 108.65261986-2.46245451l556.21010014-556.21010016c30.72060682-30.71939318 30.72060682-80.52432592 0.00121363-111.24250547z" />
</svg>

const IconCheck: React.FC<IconProps> = props => {
  if(isH5) {
    return SVG(props.className);
  }
  return <TaroIcon  className={props.className} color={props.color} svg={SVG()} />
}

export default IconCheck
