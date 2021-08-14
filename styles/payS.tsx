import styled, { StyledComponent } from "styled-components";

export const PayS:StyledComponent<"nav", any, {}, never> = styled.main
`
display: flex;
align-items: center;
flex-direction: column;
background: #FAFAFA;
min-height: calc(100vh - 8rem);
>div{
   align-items: center;
   flex-direction: column;
   display: flex;
   margin-top: 35px;
   width: 100%;
   background: white;
   padding-top: 25px;
}
img{
   border-radius: 10px;
}
h1{
   margin: 40px;
   text-align: center;
   font-weight: 600;
   font-size: calc(24px + 2 * ((100vw - 320px) / (1280 - 320)));
   color: #a2a2a2;
   text-decoration: none;
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
p{
   color: #a2a2a2;
   font-weight: 300;
   font-size: calc(18px + 2 * ((100vw - 320px) / (1280 - 320)));
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";   
}
.form{
   height: 500px;
   width: 100%;
      input{
         border-radius: 5px;
         box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
         background: white;
         padding: 10px 5px;
         border: none;
         outline: none;
   }
}
.phone{
   margin: 20px 20px;
}
.sum{
   input{
      margin-left: 10px;
      max-width: 80px;
   }
   margin: 20px 20px;
}
button{
   border-radius: 5px;
   margin: 20px;
   font-weight: 500;
   background: #959595;
   font-size: calc(18px + 2 * ((100vw - 320px) / (1280 - 320)));
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";  
   color: white;
   border: none;
   padding: 10px 25px;
   :hover{
      background: #CC061A;
   }
   transition: .5s;
}
@media screen and (max-width: 480px) {
   .form{
      div{
         display: flex;
         align-items: center;
         flex-direction: column;
      } 
      p{
         display: flex;
         align-items: center;
         flex-direction: column; 
      }
   }
   button{
      font-weight: 500;
      cursor: pointer;
      font-size: calc(18px + 2 * ((100vw - 320px) / (1280 - 320)));
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";  
      padding: 40px;
      color: white;
      border: none;
      outline: none;
      width: 99%;
      background: #959595;
      transition: .5s;
      :hover{
         background: #CC061A;
      }
   }
}
h3{
   margin: 20px;
   font-size: calc(18px + 2 * ((100vw - 320px) / (1280 - 320)));
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.true{
   color: #0eb741;
}
.false{
   color: #CC061A;
}
.trueInp{
   border: solid 1px #0eb741 !important;
}
.falseInp{
   border: solid 1px #CC061A !important;
}
`