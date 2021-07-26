import Arrow from './arrow'
import Back from './back_s'
import Check from './check'
import Close from './close'
import Tips from './tips'

export interface IconProps {
  className?: string

  /**
   * @description 仅限于小程序修改Icon颜色
   */
  color?: string
}

interface IIcon {
  Arrow: React.FC<IconProps>
  Check: React.FC<IconProps>
  Back: React.FC<IconProps>
  Close: React.FC<IconProps>
  Tips: React.FC<IconProps>
}

const Icon: IIcon = {
  Arrow,
  Check,
  Back,
  Close,
  Tips,
}

export default Icon
