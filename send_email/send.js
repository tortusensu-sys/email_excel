import nodemailer from "nodemailer"

const sendEmail = (data)=>{
    try {
        const { user, password } = data
        console.log('user', user)
        console.log('contraseña', password)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: user,
                pass: password
            }
        });
    
        const email = {
            from: user,
            to : "2017110507@untels.edu.pe",
            subject: "Asunto de correo",
            text: "holi"
        }
    
        transporter.sendMail(email, (error, info)=>{
            if (error) {
                console.log('error', error)
                return error
            } else {
                console.log('informacion', info.response)
                return info.response
            }
        })
    } catch (error) {
        return error
    }
}
export default {
    sendEmail
}