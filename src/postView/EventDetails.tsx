import { Typography } from "@mui/joy";
import { lang } from "../globalVars";

let title = 'See you there!'
let message = ' details  details details details details details.'
if(lang === 'HEB'){
  title = 'נתראה שם!'
   message = 'פרטים  פרטים פרטים פרטים פרטים פרטים'
}

export default function EventDetails() {
  return <div style={{
    maxWidth:'400px',

    display:'flex', 
    alignItems:'center' , 
    flexDirection:'column', 

  }}>
  <h1>{title}</h1>
  <Typography >{message}</Typography>
  </div>
}



