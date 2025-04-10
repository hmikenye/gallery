process.env.NODE_ENV = 'test';   

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('Photos', function(){


    app.get('/', async (req, res) => {
        try {
          const photos = await Photo.find(); // assuming mongoose
          res.json(photos);
        } catch (err) {
          res.status(500).send(err);
        }
      });
      
})
