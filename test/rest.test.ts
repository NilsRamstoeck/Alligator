import {expect} from 'chai';
import request from 'supertest';
import {app} from '../src/modules/rest'

/**
 * Test behaviour of the REST API. This only tests expected behaviour from the API, not functionality
 */
describe('REST API', () => {

    it('can reach server', (done) => {
        request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
           const data = res.body;
           expect(data?.msg).to.equal('Hello World!', 'Response message');
           done();
        })
        .catch((err) => {
           done(err);
        });
     });

});