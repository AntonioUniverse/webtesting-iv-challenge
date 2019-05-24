const db = require('./dbConfig')


module.exports = { 
    insert,
   remove
    
}





async function insert(user) {
    const  [ id ]  = await db('users').insert(user, 'id');
  
    return db('users')
      .where({ id })
      .first();
  }
  
 
  
  function remove(id) {
    return db('users')
      .where({ id })
      .del();
  }