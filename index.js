//imports
const express = require('express')
const db = require('./config/mongoose')
const expressLayouts = require('express-ejs-layouts')
const port = 8000

app = express()
app.use(expressLayouts)
app.use(express.static('./static'))
app.set('layout extractScripts', true);
//use express router for managing all routes
app.use('/', require('./routers'))


//view engine for express - ejs
app.set('view engine', 'ejs')
app.set('views', './views')

//listening on port 8000
app.listen(port, (err) => {
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server started on port: ${port}`);
})