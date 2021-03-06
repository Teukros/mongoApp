const mongoose = require('mongoose');


before((done) => {
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', () => (error) => {
            console.log('Error', error)
        });
});


beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    })
});