const express = require('express') ;
const app = express() ;
const registration = require('./Routes/registration')
const getAllReg = require('./Routes/getAllReg')
const verifyAdmin = require('./Routes/verifyAdmin');
const cors = require('cors');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

const port = 5055 ;
const mongoose = require('mongoose') ;
mongoose.Promise = global.Promise ;
mongoose.set('strictQuery', false);
// app.use(express.bodyParser());

const db = mongoose.createConnection()
const connectDB =  async () =>{
  await mongoose.connect("mongodb+srv://sonu637698:K1ipkmtCXr8cgdTe@cluster0.ywuoao4.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(port , ()=>{
        console.log(`App is listning on port ${port}`) ;
    })
})
.catch((err)=>
    console.log(err)
);
}
connectDB()

app.use('/r' ,registration) ;
app.use('/g' ,getAllReg) ;
app.use('/a' , verifyAdmin) ;




app.get('/' , (req,res)=>{
    res.json("ok");
})
