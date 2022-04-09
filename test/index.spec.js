const request = require("supertest");
const app = require('../app');

//testing get all games endpoint
describe('get api/games', () => {
    test('should respond with a 200 statud code',()=>{
        return request(app)
        .get('/api/games')
        .then(response => {
            expect(response.statusCode).toBe(200);
            
        })
    })
})