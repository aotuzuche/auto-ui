export const Reg = {
  u: navigator.userAgent,

  isAndroid() {
    return Reg.u.indexOf('Android') > -1 || Reg.u.indexOf('Adr') > -1
  },

  isiOS() {
    return !!Reg.u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  },

  isAtzuche() {
    return Reg.u.indexOf('atzuche') > -1
  },

  isiPhoneX() {
    return Reg.u.indexOf('iphonex') > -1
  }
}
