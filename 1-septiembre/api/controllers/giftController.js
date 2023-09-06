const { create: createGift, list: listGift, listById: listGiftById } = require('../services/giftService.js')
const { v4: uuidv4 } = require('uuid')

const postGift = (req, res) => {
    try {
        res.json(createGift(req.body))
    }
    catch (err){
        res.status(400).json({ message: err.message })
    }
}

const getGiftsByEventId = (req, res) => {
    res.json(listGift(req.query.id))
}

const getGiftsByUid = (req, res) => {
    const gift = listGiftById(req.params.uid)
    if(!gift) {
        res.status(404).json({ message: 'gift not found' })
        return
    }

    res.json(gift)
}

module.exports = {
    postGift,
    getGiftsByEventId,
    getGiftsByUid,
}
