const User = require('../src/user');
const assert = require('assert');

describe('Creating records', () => {
    it('saves a user', (done) => {
        const bill = new User({name: 'Bill'});
        bill.save()
            .then(() => {
                assert(!bill.isNew);
                done();
            });
    });

    });