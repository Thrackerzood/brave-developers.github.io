import styled, { StyledComponent } from 'styled-components'

export const MainS:StyledComponent<"nav", any, {}, never> = styled.main
`
min-height: calc(100vh - 500px);
margin-top: 2rem;
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
background: #FAFAFA;
a{
   padding: auto 5px;
   margin: 10px auto;
   max-width: 500px;
   min-width: 100px;
   width: calc(100% - 80px);
   color: #a2a2a2;
   text-decoration: none;
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
img{
   border-radius: 10px;
}
a>div{
   padding: 3% 5px;
   width: 90%;
   border-radius: 3px;
   background: white;
   box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.6);
}
h1{
   font-size: calc(20px + 2 * ((100vw - 320px) / (1280 - 320)));
}
`