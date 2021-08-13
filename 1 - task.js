function search(str, a, b){
      if (str === '') return -1
      const num1 = [...str].indexOf(a)
      const num2 = [...str].indexOf(b)
      return ( num1 >= num2 ) ? num1 : num2
   }
      
   console.log(search('return2This3','2','2'))