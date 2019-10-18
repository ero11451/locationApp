const mapModel = require("./model");


mapControler = (location,destination)=>{ 
    const encodedlocation = encodeURIComponent(location)
    const encodeddestination = encodeURIComponent(destination)
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodedlocation}=${encodeddestination}WA&travelmode=bicycling`
    return mapModel(url)
}
module.exports = mapControler = mapControler