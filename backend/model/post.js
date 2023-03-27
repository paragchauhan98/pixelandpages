const mongoose=require('mongoose')

const post =mongoose.model('post',{
    title:{type:String},
    content1:{type:String},
    content2:{type:String},
    content3:{type:String},
    content4:{type:String},
    content5:{type:String},
    username:{type:String},
    date:{type:String},
    category:{type:String},
    image1:{type:String},
    image2:{type:String},
    tag:{type:String},
    keywords:{type:String},
    description:{type:String}
})

module.exports=post