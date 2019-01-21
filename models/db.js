const mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');
// process.env.MONGODB_URI
// mongoose.connect('mongodb://arjun2:arjun2@ds259253.mlab.com:59253/mongouploads', { useNewUrlParser: true })
