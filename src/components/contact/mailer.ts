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
            "api-key": "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",
            "content-type": "application/json",
            "accept": "application/json",
        },
        
    }
    console.log("url ==> ", process.env.REACT_APP_BREVO_MAIL_URL)
    console.log("api key ==> ", process.env.REACT_APP_BREVO_API_KEY)
    return axios.post("https://api.brevo.com/v3/smtp/email", userData, config)
}