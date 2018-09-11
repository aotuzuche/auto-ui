function isType(target, type) {
  let targetType = {}.toString.call(target).toLowerCase()
  type = `[object ${type}]`.toLowerCase()

  return targetType === type
}

function ignore(target, rule) {
  if (!target) {
    throw new TypeError('"target" is null or not defined.')
  } else if (!rule) {
    throw new TypeError('"rule" is null or not defined.')
  } else if (!isType(target, 'object')) {
    throw new TypeError('"target" must be typeof object.')
  } else if (!isType(rule, 'string') && !isType(rule, 'array')) {
    throw new TypeError('"rule" must be typeof string or array.')
  }

  if (isType(rule, 'string')) {
    rule = [rule]
  }

  // default: ignore 'children' and 'className' props
  rule.push('children')
  rule.push('className')

  const resObject = {}

  Object.entries(target).forEach(function(item) {
    if (rule.indexOf(item[0]) === -1) {
      resObject[item[0]] = item[1]
    }
  })

  return resObject
}

export default ignore
