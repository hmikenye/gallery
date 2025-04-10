// test/server.test.js
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Express app, not app.listen()
const expect = chai.expect;

chai.use(chaiHttp);

describe('Photos API', function() {
  it('should GET all photos', function(done) {
    chai.request(app)
      .get('/photos')
      .end(function(err, res) {
        if (err) return done(err);

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.above(0);
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('url');

        done();
      });
  });
});
