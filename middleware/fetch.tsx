import { IInput } from "../pages/pay/[id]";

export default function mimicPost(state:IInput){
      // Number(str = '123')
   if((+state.sum >= 1 && +state.sum <= 1000)
      && 
      // this regex: https://www.regextester.com/99415
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
      .test(state.phone)
      ){
      //random 
      let number:number = getRandomInt(2)
      if(number === 1){
         return {header: 'Вы успешно пополнили счет', res: true, theme: true}
      }else{
         return {header: 'Ошибка сервера', res: false, theme: true}
      }
      
   }else{
     return {header: 'Данные введены неверно', res: false, theme: false}
   }
}



function getRandomInt(max:number) {
   return Math.floor(Math.random() * max);
}