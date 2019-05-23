const express = require('express');

const User = require('./user-model');

const server = express();

server.use(express.json())



server.post('/api/user', (req, res) =>{
    const users = req.body
    User.insert(users)
    .then( user =>{
        res.status(200).json(user)
    }).catch( error =>{
        res.status(500).json({message : "unable to add users", error })
    })

  })

  server.delete('/api/user/:id', (req, res) =>{
    const user = req.params.id
    User.delete(user)
    .then( user =>{
        res.status(200).json(user)
    }).catch( error =>{
        res.status(500).json({message : "unable to add users", error })
    })

  })

module.exports = server