import {expect} from 'chai';
import {generateBearerToken} from '../src/modules/auth'
/**
 * Test behaviour of the authentication module
 */
describe('Authentication', () => {

    let token:string;

    it('can generate token', () => {
        token = generateBearerToken();
        expect(token).to.be.lengthOf(15);
    });
    it('can validate token');

});

