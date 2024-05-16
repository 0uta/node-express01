const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!松江高専！今日は変な天気ですね。')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
