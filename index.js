import express from 'express'

const app = express();
const port = 3000

app.use(express.json());

app.post('/api/post', (req, res)=>{
    try {
        const body = req.body
        res.status(200).send(`data es ${JSON.stringify(body)}`)
    } catch (error) {
        console.log(error)
    }
})
app.listen(port, ()=>{
    console.log(`estoy entrando al puerto ${port}`)
})