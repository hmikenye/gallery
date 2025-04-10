const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // this should be the exported Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe('Photos', function () {
  it('should GET all photos', function (done) {
    chai.request(app)
      .get('/photos') // make sure this matches your actual route in server.js
      .end(function (err, res) {
        if (err) return done(err); // handle error if test fails

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
