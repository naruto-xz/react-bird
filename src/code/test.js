let str = '123456789';
// let str1 = str.slice(0, str.length - 3);
// let str2 = str.slice(str.length - 3);
// let newStr = `${str1},${str2}`;
// console.log(newStr);
let str1 = '';
for(let i = 0; i<str.length; i++){
    if(i!==0 && i%3 === 0){
        str1 = str1 + ',' + str.charAt(i);
    } else {
        str1 = str1 + str.charAt(i);
    }
}
console.log(str1);
