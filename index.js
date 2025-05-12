import express from 'express'
import sendEmail from './send_email/send.js'

const app = express();
const port = 3000

app.use(express.json());

app.post('/api/post', (req, res)=>{
    try {
        const body = req.body
        const email = sendEmail.sendEmail(body) 
        res.status(200).send(email)
    } catch (error) {
        console.log(error)
    }
})
app.listen(port, ()=>{
    console.log(`estoy entrando al puerto ${port}`)
})