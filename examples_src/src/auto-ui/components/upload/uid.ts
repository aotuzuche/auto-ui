const now = new Date().getTime()
let index = 0

export default function uid() {
  return `${now}-${++index}`
}
