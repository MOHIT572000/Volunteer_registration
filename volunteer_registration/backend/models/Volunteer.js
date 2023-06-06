const mongoose=require('mongoose'); 


const VolunteerSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Name is required'],
            minlength:3,
            maxlength:50,
          },
          email:{
            type:String,
            required:[true,'Email is required'],
            minlength:3,
            maxlength:50,
            unique:true,
          },
          phone_number:{
            type:String,
            required:[true,'Phone Number is required'],
            length:10,
          },
          location:{
            type:String,
            required:[true,'Location is required'],
            minlength:2,
          },
          language:{
            type:String,
            required:[true,'Spoken language is required'],
            minlength:2,
          },
          availability:{
            type:String,
            required:[true,'Availability is required'],           
          }
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model("Volunteer",VolunteerSchema);