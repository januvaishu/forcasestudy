var mongoose=require('mongoose');

module.exports=mongoose.model("User",
{
    Flight_id:
    {
        type:String
    },
    name:
    {
        type:String
    },
    starting:
    {
        type:String
    },
    ending:
    {
        type:String
    },
    
    departure:
    {
        type:String
    },
    total:
    {
        type:Number
    },
    type1:
    {
        type:String
    }
});