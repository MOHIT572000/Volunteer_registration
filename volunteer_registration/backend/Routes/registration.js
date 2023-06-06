const express=require('express') ;
const router = express.Router() ;
const { body, validationResult } = require('express-validator');
const Volunteer = require('../models/Volunteer')

router.post('/registration' ,[
    body('name' , 'Name must be atleast 3 character').isLength({ min: 3 }),
    body('email' , 'Enter A valid email').isEmail(),
    body('phone_number' , 'Enter a valid Phone Number').isLength({ min: 5 }),
    body('location' , 'Enter a valid Location').isLength({ min: 3 }),
    body('language' , 'Enter a valid Language').isLength({ min: 3 })
] ,async(req,res)=>{
    const errors = validationResult(req).errors;
    if (errors.length!=0) {
      return res.status(400).json({ errors: errors , value:-2 });
    }
    try {
        const {name , email , phone_number , language , location , availability } = req.body ;

        const newVolunteer = {
            name : name ,
            email : email ,
            phone_number : phone_number ,
            location : location ,
            language : language ,
            availability : availability
        }

        const exist = await Volunteer.find({ email: email });
        if (exist.length !== 0) {
            console.info('Volunteer Already Registered');
            res.status(400).json({ msg: 'Volunteer Already Registered' , value:-1})
            return;
          }
          const data = await Volunteer.create(newVolunteer) ;
        //   console.log(data) ;
          res.status(200).json({value:0 , data:data}) ;
    } catch (error) {
        // console.log(error)
        res.status(400).json({error:error , value :-3}) ;
    }
})

module.exports = router ;