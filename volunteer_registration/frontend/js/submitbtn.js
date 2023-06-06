const submitbtn = document.getElementById('submitbtn');
const name1 = document.getElementById('name1');
const email = document.getElementById('email');
const phone_number = document.getElementById('phone_number');
const location1 = document.getElementById('location1');
const language = document.getElementById('language');
const availability = document.getElementById('availability');
// const add_volunteer = require('add_volunteer') ;
// import add_volunteer from 'add_volunteer' ;
const addurl = 'http://localhost:5055/r/registration' ;

const func = async(e) =>{
    e.preventDefault() ;
var value = availability.options[availability.selectedIndex].value;
    const object = {
    "name":name1.value,
    "email":email.value,
    "phone_number":phone_number.value,
    "location":location1.value,
    "language":language.value,
    "availability":value
}
    console.log(object) ;
    
    await fetch ( addurl , {
        method:'POST',
        headers:{
              "Accept": "application/json",
              "Content-Type":"application/json"
        },
        body:JSON.stringify(object)
    }).then(async (res)=>{
        const data =await res.json();
        console.log(data) ;
        console.log(data.value);
        if ( data.value == -2){
            showAlert("Please Provide Valid Details");
        }else if ( data.value == -3){
            showAlert("Server Error Occurred");
        }else if ( data.value == -1){
            showAlert("Volunteer Already Registered With this Email Id");
        }else if ( data.value == 0){
            showAlert("Volunteer Registered");
        }
    }).catch(err=>{
        console.log(err);
        showAlert("Server Error Occurred");
    })
   
}


submitbtn.addEventListener("click" , func) ;




function showAlert(text) {
    const message = text;
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert");
    alertBox.textContent = message;
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 3000);
  }


//   showAlert("hello world");


