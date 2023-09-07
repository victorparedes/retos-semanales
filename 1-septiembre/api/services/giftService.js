const { createEntity, findById, filterByEvent } = require('./common.js')
const { events, gifts } = require('./mockData.js')

const isGiftLinkUnique = (link) => !gifts.some((gift) => gift.product_link === link);
const saveGift = (entity) => gifts.push(entity)
const create = (data) => {
    const event = findById(data.event_id, events)
    
    if(!event) throw new Error('event not found')
    if(!isGiftLinkUnique(data.product_link)) throw new Error('gift is repeated')

    const newGift = createEntity(data)
    saveGift(newGift)
    return  newGift
}

const sortResultsByOrder = (data) => data.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
const list = (event_id) =>{
    const giftList = filterByEvent(event_id, gifts)
    return sortResultsByOrder(giftList)
}

const listById = (gift_id) => {
    return gifts.find((gift) => gift.id === gift_id) 
}

module.exports = {
    create,
    list,
    listById,
}