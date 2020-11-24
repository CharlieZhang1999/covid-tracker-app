const express = require('express');

const router = express.Router();

const User = require('../models/User');


//GET ALL THE USERNAME PASSWORD PAIR
router.get('/', async (req, res)  => {
    try{
        const users = await User.find();
        return res.json(users);
    }catch(err){
        return res.json({message: err});
    }
})


//USER LOGIN PROCESS(CHECK IF THE PASSWORD MATCH)
router.post('/', async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username, password: req.body.password });
        if(!user){
            return res.status(404).send("Not found");
        }
        
        req.session.user = req.body.username;
        return res.json(user);
    }catch(err){
        return res.json({message: err});
    }
})



//GET A USER(THE USERNAME PASSWORD PAIR)
router.get('/:loginId', async (req, res)  => {
    try{
        const users = await User.findById(loginId);
        return res.json(users);
    }catch(err){
        return res.json({message: err});
    }
})


//UPDATE A PASSWORD(USERNAME PASSWORD PAIR)
router.patch('/:loginId', async (req, res) => {
    try{
        const updatedUser = await User.updateOne(
            { _id: req.params.loginId }, 
            { $set: { password: req.body.password } }
        );
        return res.json(updatedUser);
    } catch (err){
        return res.json({message: err});
    }
})


//REGISTER AN ACCOUNT
router.post('/register', (req, res) => {
    const newuser = new User({
        username: req.body.username,
        password: req.body.password
    });
    newuser.save()
        .then(data => {
            console.log('Account has been registered');
            return res.json(data);

        })
        .catch(err => {
            console.log('Oops, something is wrong and registration failed')
            return res.status(403).send("Failed");
        })
});


module.exports = router;