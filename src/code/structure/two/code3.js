/**
 * 链表
 */

//链表结构
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
//用javascript的方式定义一个链表
{
  function Node(element){
    this.val = element;
    this.next = null;
  }
  function LinkList(){
    this.head = new Node('head');
    this.find = function (element){
      let currentNode = this.head;
      while(currentNode && currentNode.val !== element){
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    this.findPre = function (element){
      let currentNode = this.head;
      while (currentNode && currentNode.next && currentNode.next.val !== element) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    this.insert = function (element, newElement){
      let currentNode = this.find(element);
      let newNode = new Node(newElement);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.remove = function (element){
      let preNode = this.findPre(element);
      if(preNode.next){
        preNode.next = preNode.next.next;
      }
    }
    this.display = function (){
      let currentNode = this.head;
      while (currentNode){
        console.log(currentNode);
        currentNode = currentNode.next;
      }
    }
  }
  let list = new LinkList();
  list.remove('head');
  // list.insert('head','apple');
  // list.insert('apple','banana');
  // list.insert('banana','orange');
  // list.display();
  // list.remove('banana');
  list.display();
}