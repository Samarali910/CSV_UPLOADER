const mongoose=require("mongoose");


mongoose.connect('mongodb+srv://samarali5177:2NmOTmrhtKeMLbG7@cluster0.lvgp1ax.mongodb.net/?retryWrites=true&w=majority');
let db=mongoose.connection;

db.on('error',console.error.bind(console,"error connecting db"));

db.once('open',()=>{
    console.log('successfully connected');
})