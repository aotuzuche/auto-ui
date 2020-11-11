import Arrow from './arrow'
import Back from './back_s'
import Check from './check'
import Close from './close'
import Tips from './tips'

interface IIcon {
  Arrow: React.FC
  Check: React.FC
  Back: React.FC
  Close: React.FC
  Tips: React.FC
}

const Icon: IIcon = {
  Arrow,
  Check,
  Back,
  Close,
  Tips,
}

export default Icon
