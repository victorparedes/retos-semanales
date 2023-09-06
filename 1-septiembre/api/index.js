const express = require('express')
const app = express()
const port = 3000
const validator = require('express-joi-validation').createValidator({})

const { events, gift, queryById, paramyById } = require('./validationSchemas.js')
const { postGift, getGiftsByEventId, getGiftsByUid } = require('./controllers/giftController.js')
const { postEvents, getEvents } = require('./controllers/eventController.js') 

app.use(express.json())

app.post('/events', validator.body(events), postEvents)
app.get('/events', getEvents)

app.post('/gifts', validator.body(gift), postGift)
app.get('/gifts', validator.query(queryById), getGiftsByEventId)
app.get('/gifts/:uid', validator.params(paramyById), getGiftsByUid)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})