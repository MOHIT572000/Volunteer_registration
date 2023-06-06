

const url = 'http://localhost:5055/a/Admin'
const username1 = document.getElementById('username1') ;
const password = document.getElementById('password1') ;
const submitAdmin = document.getElementById('submitAdmin');

const func = async (e) =>{
    e.preventDefault() ;
    const object = {
        "username1":username1.value ,
        "password":password.value
    }
     console.log(object);
    await fetch ( url , {
        method:'POST',
        headers:{
              "Accept": "application/json",
              "Content-Type":"application/json"
        },
        body:JSON.stringify(object)
    }).then(async (res)=>{
        const data =await res.json();
        console.log(data.value);
        if ( data.value == -2){
            showAlert("Please Provide Valid Details");
        }else if ( data.value == -3){
            showAlert("Server Error Occurred");
        }
        if ( data.value == 1){
            window.location.replace('http://127.0.0.1:5500/frontend/allVolunteer.html');
        }
    }).catch(err=>{
        console.log(err);
        showAlert("Server Error Occurred");
    })

}

submitAdmin.addEventListener("click" , func) ;


function showAlert(text) {
    const message = text;
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert");
    alertBox.textContent = message;
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 3000);
  }