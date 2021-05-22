const post = require('../models/post');
const Post  = require('../models/post')
exports.getPosts = (req,res) => {
    const posts = post.find().select("_id title body")
    .then((posts) =>{
        res.status(200).json({posts:posts})

    })
    .catch(err => console.log(err))
};
exports.createPost = (req,res) => {
    const post = new Post(req.body);
    // console.log("Creating Post", req.body);
    post.save().then(result =>{
        res.json({
            post:result
        });
    });
};

exports.deletePost = (req,res) =>{
    post.findByIdAndRemove(req.params.id)
  .exec()
  .then(doc =>{
    if(!doc){return res.status(404).end();}
    return res.status(204).end();
  })
  .catch(err=>next(err));
};


exports.updatePost = (req,res) =>{   
    post.findOneAndUpdate({_id:req.params.id},{$set:{title:req.body.title}},{new:true})
    .then(doc =>{
        if(!doc){return res.status(404).end();}
        return res.status(200).json(doc);
    })
    .catch(err=>next(err));
}