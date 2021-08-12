import { MainS } from "../styles/mainS"
import { useContext } from "react"
import { Context } from "../context/context"
import Image from 'next/image'
import Link from "next/link"

export const HomeT = ():JSX.Element => {
   const { operators }:any = useContext(Context)
   return (<MainS>
      {   operators.map((item:any, index:number) => {
         return(
         <Link href={ 'pay/' + item.path } key={index}>
         <a>
         <div>
         <Image
         key={item.operator}
         src={'/operators/' + item.picture}
         alt={item.operator}
         width={200} height={200}
         />
         <h1>{ item.operator }</h1>
         </div>
         </a>
         </Link>)
   })}
   </MainS>)
}