MVP Api lista de regalos.


Acciones: 


## Create new event
### POST /event
```
{
    name: 'name of event',
    description: 'short description of event',
}
```
### Response
* 201 - Event created successfully
```
{
    event_id: 'uuid',
    name: 'name of event',
    description: 'short description of event',
}
```

* 400 - Event created successfully
```
{
    code: '400',
    message: 'Bad Request'
}
```

## Add gift to event
### POST /gift
```
{
    event_id: 'guid'
    product_link: 'url to product to add',
    description: 'short description of the gift',
}
```


### Response
* 201 - Event created successfully
```
{
    gift_id: ''
    event_id: 'guid'
    product_link: 'url to product to add',
    description: 'short description of the gift',
}
```

* 404 - Event created successfully
```
{
    code: '404',
    message: 'event not found'
}
```
