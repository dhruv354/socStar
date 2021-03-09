//imports
const express = require('express')
const db = require('./config/mongoose')
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const port = 8000

app = express()
//express middleware to use express-ejs-layout
app.use(expressLayouts)
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//express middleware to use cookie-parser
app.use(cookieParser())
app.use(express.static('./static'))
//use express router for managing all routes
app.use(express.urlencoded())
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