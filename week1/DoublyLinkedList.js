// DoublyLinkedList.js

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; // 이전 노드를 가리키는 포인터 추가
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail; // 새로운 노드의 prev를 현재 tail로 설정
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    newNode.prev = node; // 새로운 노드의 prev를 주어진 노드로 설정
    node.next = newNode;
  }

  remove(value) {
    let currNode = this.head;

    while (currNode !== null && currNode.value !== value) {
      currNode = currNode.next;
    }

    if (currNode === null) {
      return; // 값을 찾지 못한 경우 아무 작업도 하지 않음
    }

    if (currNode.prev === null) {
      // 삭제할 노드가 헤드인 경우
      this.head = currNode.next;
      if (this.head === null) {
        this.tail = null;
      } else {
        this.head.prev = null; 
      }
    } else if (currNode.next === null) {
      // 삭제할 노드가 테일인 경우
      this.tail = currNode.prev;
      this.tail.next = null;
    } else {
      // 중간 노드 삭제
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "[";

    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    if (displayString.length > 1) {
      displayString = displayString.slice(0, -2);
    }
    displayString += "]";
    console.log(displayString);
  }

  size() {
    let size = 0;
    let currNode = this.head;

    while (currNode !== null) {
      currNode = currNode.next;
      size++;
    }
    console.log(size);
  }
}

const linkedList = new DoublyLinkedList();

linkedList.append(0);
linkedList.append(2);
linkedList.append(5);
linkedList.remove(0);
linkedList.display();
linkedList.size();
