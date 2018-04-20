const assert = require('assert');
const User = require('../src/user');

describe('Reading users with name mark', () => {
    let mark;
    beforeEach((done) => {
        mark = new User({name: "Mark"});
        mark.save()
            .then(() => done())
    });

    it('finds all users with name mark', (done) => {
        User.find({name: "Mark"})
            .then((users) => {
                assert(users[0]._id.toString() === mark._id.toString());
                done();
            });
    });
    it('find a user with given id', (done) => {
        User.findOne({_id: mark._id})
            .then((user) => {
                assert(user.name === 'Mark');
                done();
            })
    });
});