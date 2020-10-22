var request = require('request');
var assert = require('assert');

describe('POST /index', function() {

    it('Sucess to insert', (done) => {
        this.timeout(500);
        setTimeout(done, 300);
        request.post('http://localhost:3010/api/insert', function(error, res) {
        assert.equal(res.status, 200);
        send({
            author: 'tester',
            title: 'test',
            journal: 'se',
            year: '2020',
            volume: '1',
            number: '1',
            pages: '1',
            month: 'www.test.com',
            participants: 'Postgraduate students',
            uploaddate: '2020/10/10',
            method: '',
            benefit: ''
        })
        .end(function(err, res) {
            if (err) done(err);
                res.body.should.have.property('author');
                res.body.author.should.have.property('tester');

             });
          done();
        })
    })

    it('Sucess to select', (done) => {
        this.timeout(500);
        setTimeout(done, 300);
        request.post('http://localhost:3010/api/select', function(error, res) {
        assert.equal(res.status, 200);
        send({
            selectTitle: 'jk',
            
        })
        .end(function(err, res) {
            if (err) done(err);
                res.body.should.have.property('selectTitle');
                res.body.selectTitle.should.have.property('jk');

             });
          done();
        })
    })
});

