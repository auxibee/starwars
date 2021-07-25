var starWarsNames = require('./starwars.json')


module.exports = {
    all : starWarsNames,
    random : getRandomName(starWarsNames)
}

function getRandomName(array){
    const random = Math.floor(Math.random() * array.length)
    return array[random]
}

