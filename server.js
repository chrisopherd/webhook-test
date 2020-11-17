const express = require('express')
const app = express()
const router = express.Router()
const port = 80
const ngrok = require('ngrok');

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
app.use(express.json())

(async function() {
  const url = await ngrok.connect();
})();

router.get('/webhooks', (req, res) => {
  res.send('ok', req.body.data)
})

router.post('/webhooks', (req, res) => {
    res.send('posting:', req.body.data)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})