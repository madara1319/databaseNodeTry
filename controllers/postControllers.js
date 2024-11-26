const Post = require("../models/Post");

exports.getAllPosts=async (req,res,next)=>{
res.send("Get all posts route");
};

exports.createNewPost=async (req,res,next)=>{
    //const post = New Post("First Post","Body of first post");
    let {title,body}=req.body;
    let post = new Post(title,body);
    post= await post.save();
    console.log(post);
res.send("Create new post route");
};

exports.getPostsById=async (req,res,next)=>{
res.send("Get Post By ID route");
};
