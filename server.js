const express = require('express')
const app = express()
const router = express.Router()
const ngrok = require('ngrok');


(async function() {
  const url = await ngrok.connect();
})();

router.get('/webhooks', (req, res) => {
  res.send('ok', req.body.data)
})

router.post('/webhooks', (req, res) => {
    res.send('posting:', req.body.data)
  })

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})