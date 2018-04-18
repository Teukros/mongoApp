const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
    .once('open', () => console.log('Opened'))
    .on('error', () => (error) => {
        console.log('Error', error)
    });