//链表

/**
 * 实现一个单链表
 */
{
  function Node(element){
    this.element = element;
    this.next = null;
  }

  function LinkList(){
    this.head = new Node('head');
    this.find = function (element) {
      let currentNode = this.head;
      while (currentNode && element !== currentNode.element) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    this.findPre = function (element) {
      let currentNode = this.head;
      while ((currentNode.next !== null) && (currentNode.next.element !== element)) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    this.insert = function (newElement, element) {
      let newNode = new Node(newElement);
      let currentNode = this.find(element);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.remove = function (element) {
      let preNode = this.findPre(element);
      if (preNode.next !== null) {
        preNode.next = preNode.next.next;
      }
    }
    this.display = function () {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
      }
    }
  }
  let fruit = new LinkList();
  fruit.insert('apple', 'head');
  fruit.insert('banana', 'apple');
  fruit.insert('orange', 'banana');
  fruit.display();  //apple banana orange
  fruit.remove('banana');
  fruit.display(); //apple orange
}