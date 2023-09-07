const { v4: uuidv4 } = require('uuid')

const createEntity = (data) => ({ id: uuidv4(), ...data})

const findById = (id, collection) => collection.find((entity) => entity.id === id) 

const filterByEvent = (id, collection) => collection.filter((entity) => entity.event_id === id) 

module.exports = {
    createEntity,
    findById,
    filterByEvent,
}
