//CircularLinkedList.js

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;

    while (currNode && currNode !== this.head){
      if (currNode.value === value) {
        return currNode;
      }
      currNode = currNode.next;
    }

    return null; // 값을 찾지 못한 경우
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode; // 자기 자신을 가리키도록 설정
    } else {
      newNode.next = this.head; // 새로운 노드의 next를 헤드로 설정
      this.tail.next = newNode; // 현재 테일의 next를 새로운 노드로 설정
      this.tail = newNode; // 테일을 새로운 노드로 갱신
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    if (!this.head) {
      return; // 빈 리스트인 경우 아무 작업도 하지 않음
    }

    let currNode = this.head;
    let prevNode = this.tail; // 이전 노드를 테일로 설정

    do {
      if (currNode.value === value) {
        if (currNode === this.head) {
          this.head = currNode.next;
          this.tail.next = this.head; // 테일의 next를 헤드로 설정
        } else if (currNode === this.tail) {
          this.tail = prevNode; // 테일을 이전 노드로 갱신
          this.tail.next = this.head; // 테일의 next를 헤드로 설정
        } else {
          prevNode.next = currNode.next;
        }
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
    } while (currNode !== this.head);
  }

  display() {
    if (!this.head) {
      console.log("[]"); // 빈 리스트인 경우
      return;
    }

    let currNode = this.head;
    let displayString = "[";

    do {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    } while (currNode !== this.head);

    displayString = displayString.slice(0, -2); // 마지막 쉼표와 공백 제거
    displayString += "]";
    console.log(displayString);
  }

  size() {
    if (!this.head) {
      console.log(0); // 빈 리스트인 경우
      return;
    }

    let size = 0;
    let currNode = this.head;

    do {
      size++;
      currNode = currNode.next;
    } while (currNode !== this.head);

    console.log(size);
  }
}

const linkedList = new CircularLinkedList();

linkedList.append(0);
linkedList.append(2);
linkedList.append(5);
linkedList.find(5);
linkedList.remove(0);
linkedList.display();
linkedList.size();
