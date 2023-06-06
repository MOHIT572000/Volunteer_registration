const express=require('express') ;
const router = express.Router() ;
const { body, validationResult } = require('express-validator');


router.post('/Admin' ,[
    body('username1' , ' User Name must be atleast 3 character').isLength({ min: 5 }),
    body('password' , 'Enter a valid Password').isLength({ min: 5 })
] ,async(req,res)=>{
    const errors = validationResult(req).errors;
    console.log(errors.length) ;
    if (errors.length!=0) {
      return res.status(400).json({ errors: errors , value:-2 });
    }
    try {

        const {username1 , password} = req.body ;
        if (username1 != '123456789'){
            return res.status(200).json({msg: "Admin is Not Verified" , value : -2});
        }
        if (password != '123456789'){
            return res.status(200).json({msg: "Admin is Not Verified" , value : -2});
        }
          return res.status(200).json({msg: "Admin Verified" , value : 1}) ;
    } catch (error) {
        return res.status(400).json({error:error , value :-3}) ;
    }
})

module.exports = router ;