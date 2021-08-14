function search(str:string, a:string, b:string){
   return str === '' ? -1 : Math.max(str.lastIndexOf(a), str.lastIndexOf(b))
}

console.log(search('return2This3','r','s'))
