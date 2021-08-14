function search(str:string, a:string, b:string){
      const num1 = str.lastIndexOf(a)
      const num2 = str.lastIndexOf(b)
      return str === '' ? -1 : (num1 > num2 ? num2 : num1)
}
console.log(search('return2This3','r','s'))
