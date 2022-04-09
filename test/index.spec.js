const request = require("supertest");
const app = require('../app');

//testing get all games endpoint
describe('get api/games', () => {
    //need the status 200 response
    test('should respond with a 200 statud code',async()=>{
        try{
            await request(app)
            .get('/api/games')
            .then(response => {
            expect(response.statusCode).toBe(200);            
        })
        } catch (e) {
            expect(e).toMatch('error');
          }
        
    })
    //need the response to be an json object
    test('should respond with a json',async()=>{
        try{ await request(app)
        .get('/api/games')
        .then(response => {
            expect(response.type).toBe('application/json');            
        })}
        catch (e) {
            expect(e).toMatch('error');
          }
    })
})
//testing post data
describe('post api/games', () => {
    //need the status 200 response
    test('should respond with a 200 statud code',async()=>{
        return await request(app)
        .post('/api/games').send()
        .then(response => {
        expect(response.statusCode).toBe(200)
        })}             
        )
    //need the response to be an json object 
    test('should respond with a json',async()=>{
        return await request(app)
        .post('/api/games').send()
        .then(response => {
        expect(response.type).toBe('application/json')        
        })}
        )
    
})
