import Types from '../actionTypes'
let age = {
  add(){
    return {
      type: Types.Add
    }
  },
  delete(){
    return {
      type: Types.Delete
    }
  }
};
export default age;