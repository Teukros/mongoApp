const assert = require('assert');
const User = require('../src/user');

describe('Update user', () => {
    let dan;

    beforeEach((done) => {
        dan = new User({name: "Dan"});
        dan.save()
            .then(() => done())
    });

    function assertName(operation, done) {
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Mike');
                done();
            })
    }

    it('instance set n save', (done) => {
        dan.set('name', 'Mike');
        assertName(dan.save(), done)
    });

    it('a model instance can update', (done) => {
        assertName(dan.update({name: 'Mike'}), done);
    });

    it('a model class can update', (done) => {
        assertName(
            User.update({name: 'Dan'}, {name: 'Mike'}),
            done
        );
    });

    it('a model class can update one record', (done) => {
        assertName(
            User.findOneAndUpdate(
                {name: 'Dan'}, {name: 'Mike'},
                done
            )
        )
    });
    it('a model class can find a record by id and update', (done) => {
        assertName(
            User.findByIdAndUpdate(dan._id, {name: 'Mike'}),
            done
        )
    })
});