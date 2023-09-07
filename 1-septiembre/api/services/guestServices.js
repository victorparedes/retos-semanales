const { createEntity, findById, filterByEvent } = require('./common.js')
const { events, guests } = require('./mockData.js')

const save = (newGuest) => guests.push(newGuest)
const findGuestByEventAndEmail = (event_id, email_adress) => 
    guests.find((persona) => persona.event_id === event_id &&
    persona.email_adress === email_adress)

const create = (data)=>{
    if(!findById(data.event_id, events)) throw new Error('event not found')

    if(findGuestByEventAndEmail(data.event_id,data.email_adress)) throw new Error('guest is already exist')
    
    const newGuest = createEntity(data)

    save(newGuest)
    return newGuest
}

const list = (event_id)=>{
    return filterByEvent(event_id, guests)
}

module.exports = {
    create,
    list,
}