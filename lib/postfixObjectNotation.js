function isOperator(check) {
  switch (check) {
    case "or":
    case "and":
    case "equal":
    case "equalStrict":
    case "notEqual":
    case "notEqualStrict":
    case "greaterThan":
    case "lessThan":
    case "includes":
    case "exludes":
      return true
     default:
      return false
  }
}

function convert(a,operator,b) {
    return ({
      op: operator,
      vars: [
        {value: a},
        {value: b}
      ]
    })
}

// Example expression: yes;yes;equal;no;no;equal;or
export default function postfixObjectNotation(expression) {
  const postfix = expression.split(";");
  const postfixStack = []
  postfix.forEach(current => {
    if (isOperator(current)){
      postfixStack.push(convert(
        postfixStack.pop(),
        current,
        postfixStack.pop()
      ))
    } else {
      postfixStack.push(current)
    }
  })

  return postfixStack[0]
}
