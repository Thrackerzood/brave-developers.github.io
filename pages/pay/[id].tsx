import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext, useEffect , useState} from "react"
import { Context } from "../../context/context"
import mimicPost from '../../middleware/fetch'
import { PayS } from '../../styles/payS'

export interface IInput{
   phone: string
   sum: string
}

export default function Pay():JSX.Element {
   const [state, setState]:any = useState({phone: '', sum: ''})
   const [response, responseState] = useState({header: '', res: false, theme: false})
   const changeHandlerR = (event:any) => {
      return setState({...state, [event.target.name]: event.target.value})
   }
   function post(state:IInput){
      setTimeout(()=>{
         responseState(mimicPost(state))
      }, 750)
   }
   useEffect(() => {console.log(response)}, [response])
   const router:any = useRouter()
   const { operators }:any = useContext(Context)
   return (<PayS>
      {operators.map((item:any, index:number)=>{
         if(router.query.id === item.path){
         return(
         <div key={index}>
         <Image
         key={item.operator}
         src={'/operators/' + item.picture}
         alt={item.operator}
         width={200} height={200}
         />
         <h1>{ item.operator }</h1>
         </div>)
         }   
      })}
   <section className="form">
      <div>
         {response.header 
         ? <h3 className={response.res === true 
         ? 'true' : 'false'}>{response.header}</h3> 
         : <h3> </h3>}

         <div className="phone"><p>Номер телефона: 
            {response.header 
            ? <input className={response.theme === true 
               ? 'trueInp' 
               : 'falseInp'} placeholder="+7-999-999-99-99" type="text" onChange={changeHandlerR} name="phone"/> 
            : <input placeholder="+7-999-999-99-99" type="text" onChange={changeHandlerR} name="phone"/>}
            </p></div>
         <div className="sum"><p>Сумма платежа: {response.header 
         ? <input className={response.theme === true 
            ? 'trueInp' 
            : 'falseInp'} type="text" placeholder="от 1 до 1000" onChange={changeHandlerR} name="sum"/> 
         : <input type="text" placeholder="от 1 до 1000" onChange={changeHandlerR} name="sum"/>} ✔ руб.</p></div>
         <button onClick={()=> post(state)}>Оплатить</button>
      </div>
   </section>
   
   </PayS>)
}