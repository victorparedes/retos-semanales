const { v4: uuidv4 } = require('uuid')
const { events } = require('./mockData.js')

const createEvent = (data) => ({ id: uuidv4(), ...data})
const save = (newEvent) => events.push(newEvent)

const create = (data)=>{
    let newEvent = createEvent(data)
    save(newEvent)
    return newEvent
}

const list = ()=>{
    return events
}

module.exports = {
    create,
    list
}