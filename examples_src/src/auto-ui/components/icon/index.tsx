import * as React from 'react'
import Arrow from './arrow'
import Back from './back_s'
import Check from './check'
import Close from './close'
import Tips from './tips'

interface IProps {
  className?: string
}

interface IIcon {
  Arrow: React.FC<IProps>
  Check: React.FC<IProps>
  Back: React.FC<IProps>
  Close: React.FC<IProps>
  Tips: React.FC<IProps>
}

const Icon: IIcon = {
  Arrow,
  Check,
  Back,
  Close,
  Tips,
}

export default Icon
