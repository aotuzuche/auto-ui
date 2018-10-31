const Regular = {
  u: navigator.userAgent,

  isAndroid() {
    return this.u.indexOf('Android') > -1 || this.u.indexOf('Adr') > -1
  },

  isiOS() {
    return !!this.u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  },

  isAtzuche() {
    return this.u.indexOf('atzuche') > -1
  },

  isiPhoneX() {
    return this.u.indexOf('iphonex') > -1
  }
}

export default Regular
