//链表
{
  const a = { val: 'a'};
  const b = { val: 'b'};
  const c = { val: 'c'};
  const d = { val: 'd'};
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = null;
}
/**
 * 用javascript实现一个单链表
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
      while (currentNode && currentNode.element !== element) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    this.findPre = function (element) {
      let currentNode = this.head;
      while (currentNode?.next?.element !== element) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    this.insert = function (element, newElement) {
      let currentNode = this.find(element);
      let newNode = new Node(newElement);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.remove = function (element) {
        let preNode = this.findPre(element);
        if (preNode.next) {
          preNode.next = preNode.next.next
        }
    }
    this.display = function () {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.element)
        currentNode = currentNode.next
      }
    }
  }

  let list = new LinkList();
  list.insert('head','apple');
  list.insert('apple','banana');
  list.insert('banana','orange');
  list.display(); //head apple banana orange
  console.log('------------')
  list.remove('banana');
  list.display(); //head apple orange
}

//练习一：删除链表中的节点 （只给定被删除节点的情况下，删除该节点。）
//head = [4,5,1,9], node = 5
//[4,1,9]
/**
 * 从链表里删除一个节点 node 的最常见方法是修改之前节点的 next 指针，使其指向之后的节点。
 *
 * 只给定被删除节点的情况下，我们无法访问要删除的节点之前的节点，所以我们不能直接修改该节点的next指针。
 * 但是我们可以将想要删除的节点的值替换为它后面节点中的值，然后删除它之后的那个节点。
 */
{
  let deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
  };
}

//练习二