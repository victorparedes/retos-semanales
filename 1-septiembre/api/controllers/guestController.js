const { create: createGuest, list: listGuest } = require('../services/guestServices.js')

const postGuest = (req, res)=>{
    try {
        res.json(createGuest(req.body))
    }
    catch (err){
        res.status(400).json({ message: err.message })
    }
}

const getGuestsByEventId = (req, res) => {
    res.json(listGuest(req.query.id))
}

module.exports = {
    postGuest,
    getGuestsByEventId,
}