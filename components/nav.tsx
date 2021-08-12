import { NavS } from "../styles/navS"
import Link from 'next/link'

export const NavT = ():JSX.Element => {
   return (<NavS color={'#24292E'}>
   <ul>
      <li><Link href='/'>Главная</Link></li>
   </ul>
   </NavS>)
}