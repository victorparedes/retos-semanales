const events = [
    {
        id: '9461a86b-e64a-42c8-8343-153fea9d8d13',
        name: 'name of event',
        description: 'short description of event'
    }
]

const gifts = [
    {
        id: 'a0d8fd7c-dadc-4d3b-81f4-dfc80072d227',
        event_id: '9461a86b-e64a-42c8-8343-153fea9d8d13',
        product_link: 'sss',
        description: 'sss',
        order: 1
    }
]

const guests = [
    {
        id: '2c052030-b46d-4ffd-a161-68be2f3f0eb9',
        event_id:'9461a86b-e64a-42c8-8343-153fea9d8d13',
        first_name: 'Victor',
        last_name: 'Paredes',
        email_adress: 'mail@mail.com',
    }
]
module.exports = {
    events,
    gifts,
    guests,
}