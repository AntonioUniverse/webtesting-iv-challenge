const db = require('./dbConfig')
const User = require('./user-model')

describe('models for use', () =>{

    describe('remove()', () => {

        beforeEach(async () => {
          await db('users').truncate();
        })
    
        it('should remove the record', async () => {
          // first insert a record
          await User.insert({ name: 'Hank' });
          const user = await db('users');
          console.log(user);
          expect(user).toHaveLength(1);
    
          const id = user[0].id;
    
          await User.remove(id);
          const deleteduser = await db('users');
          expect(deleteduser).not.toHaveLength(1);
          
        })
    })

    describe('insert()', () => {

        

        beforeEach(async () => {
          await db('users').truncate();
        })
    
        it('should insert the user into database', async () => {
          await User.insert({ name: 'Darren' });
        
    
          const users = await db('users'); // returns array of names
          expect(users).toHaveLength(1);
        })
    
        it('should add user to db', async () => {
          let user = await User.insert({ name: 'Sarah' });
          expect(user.name).toBe('Sarah');
    
        
        })
      })
})