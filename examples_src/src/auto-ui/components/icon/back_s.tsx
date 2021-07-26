import cn from 'classnames'
import * as React from 'react'
import { IconProps } from '.'
import { isH5 } from '../__utils/env'
import './style/index.scss'
import { TaroIcon } from './taro-icon'

const SVG = (className?: string) =>    <svg
className={cn('x-icon', className)}
viewBox="0 0 1024 1024"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
width="200"
height="200"
>
<path d="M406.77992928 512L757.78966651 161.26643095c25.95980747-25.95980747 25.95980747-67.9373685 0-93.62100781-25.95980747-25.95980747-67.9373685-25.68363931-93.89717598 0L266.21033349 465.05141201c-25.13130297 25.13130297-25.68363931 65.45185502-1.93317714 91.4116625L663.61632237 956.63074503c12.97990373 12.97990373 30.10232993 19.33177153 46.948588 19.3317715s33.96868425-6.35186779 46.94858797-19.3317715c25.95980747-25.95980747 25.95980747-67.9373685 0-93.62100781L406.77992928 512z" />
</svg>
const IconBackS: React.FC<IconProps> = props => {
  if(isH5) {
    return SVG(props.className);
  }
  return <TaroIcon  className={props.className} color={props.color} svg={SVG()} />
}

export default IconBackS
