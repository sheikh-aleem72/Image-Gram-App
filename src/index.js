import express, { urlencoded } from 'express'
import apiRouter from './Routes/apiRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)

const PORT = 3000

app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT)
})
