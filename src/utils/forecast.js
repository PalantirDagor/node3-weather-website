const request = require('postman-request') 

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=70a1a70ab0559188d030009a988daa16&query=' + latitude + ',' + longitude + '&units=m'
    request({url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback('Unable to find location, try another search.', undefined)
        }else{
            callback(undefined, 
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out' + ', It feels like ' + body.current.feelslike + ' degress out'
            )
        }
    }) 
}

module.exports = forecast