process.env.NODE_ENV = 'test';   

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('Photos', function(){


    it('should list ALL photos on / GET', async function() {
        this.timeout(60000);
        const res = await chai.request(server).get('/');
        res.should.have.status(200);
        res.should.be.html;
    });
})
