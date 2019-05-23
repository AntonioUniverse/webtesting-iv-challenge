const request = require('supertest');

const server = require('./server.js');  

describe('this is the server', () =>{
    
    it('sets the testing enviornment', () => {
        expect(process.env.DB_ENVI).toBe('testing')
    })
})

describe('endpoints', ()=>{

    describe(' /post', () =>{

        it('should return 200 status', async () => {
            const user ={
                name: "Dallas"
            }
            const res = await request(server).post('/api/user').send(user);
            expect(res.status).toBe(200);
          }) 

          it('should send JSON', async () => {
            const user ={
                name: "Darryl"
            }
            
            const res = await request(server).post('/api/user').send(user);
            expect(res.type).toBe('application/json');
          })


          it('should return { Name: "Donna" }', async () => {
              const user = {
                  name: "Donna"
              }
            const res = await request(server).post('/api/user').send(user);
            expect(res.body).toEqual({ id: 4,name: "Donna" });
          })


    })

    describe('/delete',() =>{

        it('should return 200 status', async () => {
            const userid ={
                id: 4,
                name: "Donna"
            }
            const res = await request(server).delete('/api/user/:id').send(userid);
            expect(res.status).toBe(200);
          }) 
        
    })

})