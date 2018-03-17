function Stack() {
  let items = []

  this.add = (el) => {
    items.push(el)
  }

  this.greb = () => {
    return items.pop()
  }

  this.peek = () => {
    return items[items.length -1]
  }

  this.isEmpty = () => {
    return items.length == 0
  }

  this.size = () => {
    return items.length
  }

  this.clear = () => {
    items = []
  }

  this.get = () => {
    return items
  }

  this.print = () => {
    console.log(items.toString())
  }
}

// bineri

function baseConverter(dec, base) {
  base = base || 2
  // instan stack
  let remStack = new Stack()
  // sisa bagi
  let rem;
  // bineri string
  let binString = ''
  let digits = '0123456789ABCDEF'

  while(dec > 0) {
    rem = Math.floor(dec % base)
    remStack.add(rem)
    dec = Math.floor(dec / base)
  }
  
  while(!remStack.isEmpty()){
    let greb = remStack.greb()
    console.log('greb: ', greb)
    binString += digits[greb]
  }

  return binString;
}

let bin = baseConverter(128000, 16)

console.log(bin)
