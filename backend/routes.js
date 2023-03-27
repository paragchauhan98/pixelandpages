const express =require('express')
const req=require('express/lib/request')
const router=express.Router()

const mongoType=require('mongoose').Types;
const contact=require('../backend/model/contact.js')

const post=require('../backend/model/post.js')

//define routes here

//contact post
router.post('/contact',async(req,res)=>{
    let newContact=new contact({
        name:req.body.name,
        email :req.body.email,
        number:req.body.number,
        message:req.body.message,
   
    })
try{
    const newContact1=await newContact.save()
      
            res.send(newContact1)
}
catch(err){
    console.log('internal error',err)
    res.status(400).send('internal error',err)
} 
    })
// get all data using this api

router.get('/getAllBlog',async(req,res)=>{
    try{
    const post1= await post.find()
    res.send(post1)
    }
    catch(err){
        console.log('internal error',err)
        res.status(400).send('internal errror',err)
    }
})

//get single post


//creating a new post
router.post('/postBlog',async(req,res)=>{
    let newPost=new post({
        title:req.body.title,
        content1 :req.body.content1,
        content2:req.body.content2,
        content3:req.body.content3,
        content4:req.body.content4,
        content5:req.body.content5,
        username:req.body.username,
        date:req.body.date,
        category:req.body.category,
        image1:req.body.image1,
        image2:req.body.image2,
        tag:req.body.tag,
        keywords:req.body.keywords,
        description:req.body.description
    })
try{
    const newPost1=await newPost.save()
      
            res.send(newPost1)
}
catch(err){
    console.log('internal error',err)
    res.status(400).send('internal error',err)
} 
    })


///get data by id

router.get('/getAllBlog/:id',async(req,res)=>{
    if(mongoType.ObjectId.isValid(req.params.id)){
        try{
        const findPost= await post.findById(req.params.id)
        res.send(findPost)
        
    }
    catch(err){
        console.error('internal error',err)
        res.status(400).send('internal error',err)
    }
}
})

//delete by id
router.delete('/:id',async(req,res)=>{
    if(mongoType.ObjectId.isValid(req.params.id)){
        try{
      const deletePost=await post.findByIdAndRemove(req.params.id)
      console.log(deletePost)
      res.send(deletePost)
        
        }
        catch(err){
            console.log('internal error',err)
            res.status(400).send('internal error',err)
        } 
    }
}
)  
    


//update by id
router.put('/:id',async (req,res)=>{
    let newPost=({
        title:req.body.title,
        content1:req.body.content1,
        content2:req.body.content2,
        content3:req.body.content3,
        content4:req.body.content4,
        content5:req.body.content5,
        username:req.body.username,
        date:req.body.date,
        category:req.body.category,
        image1:req.body.image1,
        image2:req.body.image2,
        tag:req.body.tag,
        keywords:req.body.keywords,
        description:req.body.description
    })
    if(mongoType.ObjectId.isValid(req.params.id)){
        try{
       const updatePost=await post.findByIdAndUpdate(req.params.id,{$set:newPost},{new:true})
       res.send(updatePost)
          
        }
        catch(err){
            console.log('internal error',err)
            res.status(400).send('internal error',err)
        }
        
    }
}
)

module.exports=router




    

  
   

    
   

