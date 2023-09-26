// SinglyLinkedList.js

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;

    while (currNode && currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }



  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;   
  }

  remove(value) { 
    let prevNode = this.head;

    //리스트가 비었을 경우 
    if (prevNode === null) {
      return; 
    }

    //첫 문자 없앨 경우
    if (this.head.value === value) { 
     this.head = this.head.next;
      if (this.head === null) {
        this.tail = null; 
      }
    return;
    }

    while ( prevNode.next && prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next){
      prevNode.next = prevNode.next.next;
    }

  }

  display() { 
    let currNode = this.head;
    let displayString = "[";
  
    if(currNode === null){
      return;
    }
    while(currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString +="]";
    console.log(displayString);
  }

  //size함수 추가
  size() {
    let size =0;
    let prevNode = this.head;
    while (prevNode !== null) { 
      prevNode = prevNode.next;
      size++;
    }
    console.log(size);
  }
}


const linkedList = new SinglyLinkedList();

linkedList.append(0);
linkedList.append(2);
linkedList.append(5);
linkedList.remove(0);
linkedList.display();
linkedList.size();
