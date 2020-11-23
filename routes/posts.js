const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        console.log("here");
        res.json({message: err});
    }
})


//SPCIFIC POST
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
})

//SUBMIT A POST
router.post('/', (req, res) => {
    const post = new Post({
        description: req.body.description,
    });
    post.save()
        .then(data => {
            console.log('Post has been saved');
            res.json(data);
            
        })
        .catch(err => {
            console.log('Oops, something is wrong and post failed')
            res.json({message: err});
        })
});

//DELETE POST
router.delete('/:postId', async (req, res)=> {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
    
});

//UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { description: req.body.description } }
        );
        res.json(updatedPost);
    } catch (err){
        res.json({message: err});
    }
})



module.exports = router;