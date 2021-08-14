import { IInput, IStateRes } from "../pages/pay/[id]"

const api:string = '/api/echo'

export default function mimicPost(state:IInput)
:Promise<IStateRes>{
   return fetch(api,{
      method: 'POST',
      headers:{
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
   })
   .then((res) => res.json())
   .then((data) => data)
   .catch((err) => console.log(err))
} 