export function is0to100Int(data: any) {
  return Number.isInteger(data) && data <= 100 && data >= 0
}
