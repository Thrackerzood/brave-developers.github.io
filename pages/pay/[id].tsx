import Image from 'next/image'
import { NextRouter, useRouter } from 'next/router'
import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useContext, useEffect , useState} from "react"
import { Context } from "../../context/context"
import mimicPost from '../../middleware/fetch'
import { IOperators } from '../../operators/operators'
import { PayS } from '../../styles/payS'
import MaskedInput from 'react-input-mask'

export interface IInput{
   phone: string
   sum: string
}
export interface IStateRes{
   header: string
   res: string | boolean
   theme: string | boolean
}
interface IResponse{
   dataR: IStateRes
}
//
export default function Pay()
:JSX.Element {
const router
:NextRouter 
= useRouter()
//


const [state, setState]
:[IInput,React.Dispatch<React.SetStateAction<IInput>>]
= useState<IInput>({phone: '', sum: ''})
//   

const [stateFetch = {dataR: {header: '', res: false, theme: false}}, fetchLoad]
:[IResponse, Dispatch<SetStateAction<IResponse>>]
= useState<IResponse>
({dataR: {header: '', res: '', theme: ''}})
 
//
const changeHandlerR
:(event: ChangeEvent<HTMLInputElement>)
=> void
= (event:ChangeEvent<HTMLInputElement>)
:void => {
    return setState({...state, [event.target.name]: event.target.value})
}
//
function post(state:IInput):void{
   setTimeout(async () =>{
   let response:IStateRes = await mimicPost(state)
   fetchLoad({dataR: response})
   }, 750)
}
//


useEffect(():void => {
   if(stateFetch.dataR.res && stateFetch.dataR.theme){
   setTimeout( async()=>{
      router.push('/')
   }, 2000)
   }
}, [stateFetch])
//

   const { operators }
   :{operators: IOperators[]}
   = useContext(Context)
   return (<PayS>
      {operators.map((item:IOperators, index:number):JSX.Element =>{
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
         }else{
            return <></>
         }  
      })}
   <section className="form" >
      <form onSubmit={(
         event:FormEvent<HTMLFormElement>)=> {event.preventDefault()
         post(state)}} method="POST">
      <div>
         {stateFetch.dataR?.header 
         ? <h3 className={stateFetch.dataR?.res === true 
         ? 'true' : 'false'}>{stateFetch.dataR?.header}</h3> 
         : <h3> </h3>}

         <div className="phone"><p>Номер телефона: 
            {stateFetch.dataR?.header 
            ? <MaskedInput mask="+7\(999)999-99-99" placeholder="+7 9__-__-__-__" className={stateFetch.dataR?.theme === true
               ? 'trueInp' 
               : 'falseInp'}  type="text" onChange={changeHandlerR} name="phone"/> 
            : <MaskedInput mask="+7\(999)999-99-99" placeholder="+7 9__-__-__-__"  type="text" onChange={changeHandlerR} name="phone"/>}
            </p></div>
         <div className="sum"><p>Сумма платежа: {stateFetch.dataR?.header 
         ? <MaskedInput mask="9 9 9 9"  className={stateFetch.dataR?.theme === true 
            ? 'trueInp' 
            : 'falseInp'} type="text" placeholder="до: 1000 руб" onChange={changeHandlerR} name="sum"/> 
         : <MaskedInput mask="9 9 9 9" type="text" placeholder="до: 1000 руб" onChange={changeHandlerR} name="sum"/>} ✔ руб.</p></div>
         <button>Оплатить</button>
      </div>
      </form>
   </section>
   </PayS>)
}