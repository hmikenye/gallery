process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // this should be the exported express app
const expect = chai.expect;

chai.use(chaiHttp);

it('should get all photos', function(done) {
  chai.request(app)
    .get('/')
    .end(function(err, res) {
      if (err) return done(err);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      done();
    });
});


