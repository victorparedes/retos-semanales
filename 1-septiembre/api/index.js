const express = require('express')
const app = express()
const port = 3000
const validator = require('express-joi-validation').createValidator({})

const { events, gift, queryById, paramyById, guest } = require('./validationSchemas.js')

const { postGift, getGiftsByEventId, getGiftsByUid } = require('./controllers/giftController.js')
const { postEvents, getEvents } = require('./controllers/eventController.js') 
const { postGuest, getGuestsByEventId} = require('./controllers/guestController.js')

app.use(express.json())

app.post('/events', validator.body(events), postEvents)
app.get('/events', getEvents)

app.post('/gifts', validator.body(gift), postGift)
app.get('/gifts', validator.query(queryById), getGiftsByEventId)
app.get('/gifts/:uid', validator.params(paramyById), getGiftsByUid)

app.post('/guests', validator.body(guest), postGuest )
app.get('/guests', validator.query(queryById), getGuestsByEventId)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})