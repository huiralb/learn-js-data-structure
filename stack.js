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

function decToBin(dec) {
  // instan stack
  let remStack = new Stack()
  // sisa bagi
  let rem;
  // bineri string
  let binString = ''

  while(dec > 0) {
    rem = Math.floor(dec % 2)
    remStack.add(rem)
    dec = Math.floor(dec / 2)
  }
  
  while(!remStack.isEmpty()){
    binString += remStack.greb().toString()
  }

  return binString;
}

let bin = decToBin(4)

console.log(bin)
