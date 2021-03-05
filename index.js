const express = require('express')
const port = 8000

app = express()

app.use('/', require('./routers'))

app.listen(port, (err) => {
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server started on port: ${port}`);
})