import styled, { StyledComponent } from 'styled-components'


export const NavS:StyledComponent<"nav", any, {}, never> = styled.nav
`
background: ${props => props.color};
margin-top: calc(4rem + 20px);
min-width: 100%;
li{
   padding: 1.45rem;
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
a{ 
   font-weight: 600;
   color: white;
   font-size: calc(24px + 2 * ((100vw - 320px) / (1280 - 320)));
   :hover{
      color: #E30815;
   }
}
`