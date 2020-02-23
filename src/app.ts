import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send('Hello Typescript')
})

app.listen(3333, ()=>{console.log('Server Running')})