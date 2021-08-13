function getRandomInt(max:number) {
   return Math.floor(Math.random() * max);
 }

export default function echo(req:any, res:any){
   //-----------
   if(+req.body.sum >= 1 && +req.body.sum <= 1000 
   &&
   /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
   .test(req.body.phone))
   //_---------
   {
      let number:number = getRandomInt(2)
      if(number === 1){
         res.statusCode = 200
         res.setHeader('Content-Type', 'application/json')
         res.end(JSON.stringify({header: 'Вы успешно пополнили счет', res: true, theme: true}))
      }else{
         res.statusCode = 500
         res.setHeader('Content-Type', 'application/json')
         res.end(JSON.stringify({header: 'Ошибка сервера', res: false, theme: true}))
      }
   }else{
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({header: 'Данные введены неверно', res: false, theme: false}))
   }
}