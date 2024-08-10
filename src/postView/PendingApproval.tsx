import { Typography } from "@mui/joy";
import { lang } from "../globalVars";

let message = 'Additional details will be sent via email if approved.'
let title = 'Request sent'
if(lang === 'HEB'){
  title = 'בקשתך נשלחה!'
   message = 'מייל ישלח אליכם ברגע שהבקשה תאושר.'
}
export default function PendingApproval() {
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


