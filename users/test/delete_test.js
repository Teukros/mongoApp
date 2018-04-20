const assert = require('assert');
const User = require('../src/user');

describe('Removes user', () => {
    let mitch;
    beforeEach((done) => {
        mitch = new User({name: "Mich"});
        mitch.save()
            .then(() => done())
    });

    it('model instance remove', (done) => {
        mitch.remove()
            .then(() => User.findOne({name: "Mitch"}))
            .then((user) => {
                assert(user === null);
                done();
            })
    });
    it('class method remove', (done) => {
        User.remove({name: 'Mitch'})
            .then(() => User.findOne({name: "Mitch"}))
            .then((user) => {
                assert(user === null);
                done();
            })
    });
    it('class method findOneAndRemove', (done) => {
        User.findOneAndRemove({name: 'Mitch'})
            .then(() => User.findOne({name: "Mitch"}))
            .then((user) => {
                assert(user === null);
                done();
            })
    });
    it('class method find by id and remove', (done) => {
        User.findByIdAndRemove(mitch._id)
            .then(() => User.findOne({name: "Mitch"}))
            .then((user) => {
                assert(user === null);
                done();
            })
    });
});