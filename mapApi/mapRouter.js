const express = require('express');
const router = express.Router();
const request = require('request');
// just the map  of the set location
router.post("/getlocation", async (req,res)=>{
         const location = encodeURIComponent(req.body.location)
        request(`https://www.google.com/maps/search/?api=${location}`, function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          res.send(body) // Print the HTML for the Google homepage.
        });
 })
//  get the direction of the set location 
router.post("/getdirection",(req,res)=>{
    const origin = req.body
    const destination = req.body
    const Destination = encodeURIComponent(destination)
    const Origin = encodeURIComponent(origin)
    request(`https://www.google.com/maps/dir/?api=1&origin=${Origin}=${Destination}=bicycling`, 
    function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          res.send(body) // Print the HTML for the Google homepage.
        });
})
module.exports   = mapRouter = router

// class MapRouter {
//         location:any
//         destination:any
//         constructor(_location:any,_destination:any) {
//                 this.location = _location
//                 this.destination = _destination
//         }
//         getIrection(location:any,destination:any){
//                 getmaps(location,destination)
//         }
// }

