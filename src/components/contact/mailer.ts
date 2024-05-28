import axios from "axios";
import { AxiosRequestConfig } from "axios";


export function sendMail(user){
    const me = {
        name: "Abdulmalik Alayande",
        email: "alaabdulmalik03@gmail.com"
    }
    const userData = {
        sender: {
            name: user.name,
            email: user.email
        },
        to: me,
        subject: user.subject,
        body: user.body,
    }
    
    const config: AxiosRequestConfig = {
        headers: {
            "api-key": process.env.REACT_APP_BREVO_API_KEY,
            "content-type": "application/json",
            "accept": "application/json",
        },
        
    }
    console.log("api key ==> ", process.env.REACT_APP_BREVO_API_KEY)
    return axios.post("https://api.brevo.com/v3/smtp/email", userData, config)
}