const { create: createEvent, list: listEvents } = require('../services/eventsServices.js')

const postEvents = (req, res)=>{
    const event = createEvent(req.body)
    if (!event) {
        res.status(500).json({ message: 'There is a problem with new event' })
        return 
    }

    res.status(201).json(event)
}

const getEvents = (req, res)=>{
    res.json(listEvents())
}

module.exports = {
    postEvents,
    getEvents
}