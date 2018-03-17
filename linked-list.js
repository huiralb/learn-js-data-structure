function LinkedList(){

  let Node = function(element){
    return {
      element,
      next: null
    }
  }

  let length = 0
  let head = null

  this.append = (element) => {
    let node = new Node(element)

    if(head == null){
      head = node
    }
    else{
      let current = head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    
    length++
  }

  this.insert = (position, element) => {
    if(position < 0 || position > length){
      return false
    }

    let current = head
    let node = new Node(element)
    let index = 0

    if(position == 0){
      node.next = current
      head = node
    }
    else{
      let previous
      while (index++ < position) {
        previous = current
        current = current.next
      }
      node.next = current
      previous.next = node
    }
    length++
    return true
  }

  this.removeAt = (position) => {
    if(position < 0 || position > length){
      return null
    }

    let current = head
    let index = 0

    if(position === 0){
      head = current.next
    }
    else{
      let previous
      while (index++ < position) {
        previous = current
        current = current.next
      }
      // link previous with current's next (remove it)
      previous.next = current.next
    }
    length--
    return current.element
  }

  this.indexOf = (element) => {
    let current = head
    let index = -1
    while (current) {
      index++
      if(element == current.element){
        // console.log(index)
        return index
      }
      current = current.next
    }
    // console.log(index)
    return -1
  }

  this.isEmpty = () => {
    return length === 0
  }

  this.size = () => {
    return length
  }

  this.toString = () => {
    let current = head
    console.log(JSON.stringify(current))
  }

}

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
console.log(list.indexOf(4))
// list.toString()