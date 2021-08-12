import styled from 'styled-components'

export const FooterS = styled.nav
`
margin-top: 2rem;
background: #24292E;
height: 300px;
a{ 
   padding: 5px;
   font-weight: 600;
   color: white;
   font-size: calc(24px + 2 * ((100vw - 320px) / (1280 - 320)));
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
   :hover{
      color: red;
   }
}
`