let arr = [
  {
    age: 23,
    name: 'zs',
    sex: '1'
  }
]
arr.map(({age: AGE, ...rest})=> {
  console.log(rest);
})