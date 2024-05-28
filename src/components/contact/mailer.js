import axios from "axios";


export function sendMail(user){
    const me = {
        name: "Abdulmalik Alayande",
        email: "alaabdulmalik03@gmail.com"
    }
    const data = {
        sender: {
            name: user.name,
            email: user.email
        },
        to: me,
        subject: user.subject
    }
    return axios.post(process.env.BREVO_MAIL_URL, data, {
        headers: {
            "api-key": process.env.BREVO_API_KEY
        }
    })
}