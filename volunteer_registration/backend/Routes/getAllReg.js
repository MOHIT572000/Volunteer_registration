const express=require('express') ;
const router = express.Router() ;
const Volunteer = require('../models/Volunteer')

router.get('/getAllReg' ,async(req,res)=>{
   
    try {
        const existAll = await Volunteer.find();
        //   console.log(existAll) ;
          res.status(200).json(existAll) ;
    } catch (error) {
        // console.log(error)
        res.status(400).json(error) ;
    }
})

module.exports = router ;