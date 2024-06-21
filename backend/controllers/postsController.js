const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createPost = async (req, res) => {
    console.log('Received POST request with:', req.body); // Ajoutez cette ligne pour vérifier les données reçues
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        console.error('Error creating post:', error); // Ajoutez cette ligne pour vérifier les erreurs
        res.status(500).json({ error: error.message });
    }
};