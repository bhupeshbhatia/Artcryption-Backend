import bodyParser from 'body-parser'
import express from 'express'
import multer from 'multer'

const artcryptionRouter = express.Router()
const upload = multer({ dest: __dirname + '/uploads/images' })

// Express App config
export const app = express()

app.set('port', process.env.PORT || 3000)

// API endpoints
app.use('/art', artcryptionRouter)
app.use(bodyParser.urlencoded({
  extended: true
})
)
app.use(bodyParser.json())

artcryptionRouter
  .route('/test')
  .get((req: express.Request, res: express.Response) => {
    console.log(req)
    res.send('This is artcryption blockchain.')
  })

artcryptionRouter
  .route('/upload')
  .post(
    upload.single('photo'),
    (req: express.Request, res: express.Response) => {
      if (req.file) {
        res.json(req.file)
      } else {
        throw new Error('error')
      }
    }
  )

artcryptionRouter
  .route('/details')
  .post((req: express.Request, res: express.Response) => {
    if (req.body) {
      res.json(JSON.parse(req.body))
    } else {
      throw new Error('error')
    }
  })

// This is for oxcert hash creation
// app.post('/upload', (req: express.Request, res: express.Response) => {
//   console.log(req)
//   res.send('DONE')
// })
