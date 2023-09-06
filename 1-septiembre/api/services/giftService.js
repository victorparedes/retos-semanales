const { v4: uuidv4 } = require('uuid')
const { events, gifts } = require('./mockData.js')

const findEventById = (eventId) => events.find((event) => event.id === eventId) 
const createGift = ( data ) => ({ id: uuidv4(), ...data})
const isGiftLinkUnique = (link) => !gifts.some((gift) => gift.product_link === link);
const saveGift = (entity) => gifts.push(entity)

const create = (data) => {
    const event = findEventById(data.event_id)
    
    if(!event) throw new Error('event not found')
    if(!isGiftLinkUnique(data.product_link)) throw new Error('gift is repeated')

    const newGift = createGift(data)
    saveGift(newGift)
    return  newGift
}

const findGiftByEventId = (eventId) => gifts.filter((gift) => gift.event_id === eventId) 
const sortResultsByOrder = (data) => data.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))

const list = (event_id) =>{
    const gifts = findGiftByEventId(event_id)
    return sortResultsByOrder(gifts)
}

const listById = (gift_id) => {
    return gifts.find((gift) => gift.id === gift_id) 
}


module.exports = {
    create,
    list,
    listById,
}