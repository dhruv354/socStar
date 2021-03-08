const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/contacts_list_db')
// //checking using attribute if we can access the database
// const db = mongoose.connection
// //if some error occured
// db.on('error', console.error.bind(console, "error in setting up mongoDb"))
// //if no error occurs
// db.once('open', function(){
//     console.log('Successfully established connection with mongoDb');
// })
console.log('mongo db connected to the server');

mongoose.connect('mongodb://localhost/socStar_db', {useNewUrlParser: true, useUnifiedTopology: true});