process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // ✅ this now only contains the app
const expect = chai.expect;

chai.use(chaiHttp);

describe('Photos', function () {
  it('should GET all photos', function (done) {
    chai.request(app)
      .get('/') // make sure this route returns photos or adjust accordingly
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array'); // depends on your actual response
        done();
      });
  });
});
