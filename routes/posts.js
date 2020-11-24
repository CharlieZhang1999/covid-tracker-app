const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        return res.json(posts);
    }catch(err){
        return res.json({message: err});
    }
})


//SPCIFIC POST
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        return res.json(post);
    }catch(err){
        return res.json({message: err});
    }
})

//SUBMIT A POST
router.post('/', (req, res) => {
    if(req.session.user == undefined){
        res.status(403).send("Unauthorized");
        return;
    }
    const post = new Post({
        user: req.session.user,
        description: req.body.description,
    });
    post.save()
        .then(data => {
            console.log('Post has been saved');
            res.json(data);
            return; 
        })
        .catch(err => {
            console.log('Oops, something is wrong and post failed')
            res.json({message: err});
            return;
        })
});

//DELETE POST
router.delete('/:postId', async (req, res)=> {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
        return;
    }catch(err){
        res.json({message: err});
        return;
    }
    
});

//DELETE ALL POSTS
router.delete('/', async (req , res) => {
    try{
        const removedallPosts = await Post.deleteMany({});
        res.json(removedPost);
        return;
    }catch(err){
        res.json({message: err});
        return;
    }
})

//UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { description: req.body.description } }
        );
        res.json(updatedPost);
        return;
    } catch (err){
        res.json({message: err});
        return;
    }
})



module.exports = router;