import type { AppProps } from 'next/app'
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components'
import { NavT } from '../components/nav'
import { Context } from '../context/context'
import { operators } from '../operators/operators'
import { FooterT } from '../components/footer'


const Global
:GlobalStyleComponent<{}, DefaultTheme>
= createGlobalStyle
`
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  
}
body{
  background: #FAFAFA;
}
li{
  list-style-type: none;
}
`
function MyApp(
{ Component, pageProps }
: AppProps)
:JSX.Element {
  return (<Context.Provider value ={{ operators }}>
          <Global/>
          <NavT/>
          <Component {...pageProps} />
          <FooterT/>
          </Context.Provider>)
}
export default MyApp
