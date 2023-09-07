const { events } = require('./mockData.js')
const { createEntity } = require('./common.js')

const save = (newEvent) => events.push(newEvent)

const create = (data)=>{
    let newEvent = createEntity(data)
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