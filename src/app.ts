import express,{Application, Request, Response} from 'express'

const app:Application  = express()

app.use(express.json())

app.get('/', (req:Request, res:Response):Response => {
  return res.json({ message: 'Hello Typescript'})
})

app.listen(3333, ()=>{console.log('Server Running')})