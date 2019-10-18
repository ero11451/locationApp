const express = require('express')
const app = express()
const port = 3000
const mapRouter = require("./mapApi/mapRouter")

app.get('/',(req,res)=>{
    res.send("<h3>hellow</h3>")
})
app.use('/location', mapRouter);
app.use('/', (req,res)=>{
    res.send("welcome to my location app");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))