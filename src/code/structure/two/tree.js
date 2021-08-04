export const testTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: null
    }
  },
  right:{
    value: 6,
    left: null,
    right: {
      value: 7,
      left: null,
      right: null
    }
  },
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
          children: []
        },
        {
          value: 4,
          children: [
            {
              value: 5,
              children: []
            }
          ]
        }
      ]
    },
    {
      value: 6,
      children: [
        {
          value: 7,
          children: []
        }
      ]
    }
  ]
}

export const tree = {
  value: 'a',
  children: [
    {
      value: 'b',
      children: [
        {
          value: 'd',
          children: []
        },
        {
          value: 'e',
          children: []
        }
      ]
    },
    {
      value: 'c',
      children: [
        {
          value: 'f',
          children: []
        },
        {
          value: 'g',
          children: []
        }
      ]
    }
  ]
};

export const binaryTree = {
  val: '1',
  left: {
    val: '2',
    left: {
      val: '4',
      left: null,
      right: null
    },
    right: {
      val: '5',
      left: null,
      right: null
    }
  },
  right: {
    val: '3',
    left: {
      val: '6',
      left: null,
      right: null
    },
    right: {
      val: '7',
      left: null,
      right: null
    }
  }
}
