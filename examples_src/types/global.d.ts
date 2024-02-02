declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

interface Window {
  isWX: boolean
  isApp: boolean
  isAlipay: boolean
  isSmallSwan: boolean
  isJD: boolean
  isJDMP: boolean
  isMiniProgram: boolean
  isiOS: boolean
  isAndroid: boolean
}
