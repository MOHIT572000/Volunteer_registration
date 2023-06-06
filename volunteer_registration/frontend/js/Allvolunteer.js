const Table = document.getElementById('TableContent') ;
const badge = document.getElementById('badgeall');
const url = 'http://localhost:5055/g/getAllReg'
const func = async()=>{
    await fetch(url , {
        method:'GET',
        headers:{
              "Accept": "application/json",
              "Content-Type":"application/json"
        }
    }).then( async(res) =>{
        var data = await res.json() ;
        console.log(data);
        badge.innerHTML = `Total Volunteer Registered --> ${data.length}`;
        data.forEach(showVolunteer);
        console.log(data) ;
    }).catch(err=>{
        console.log(err);
    })
}

func();



const showVolunteer = (volunteer) =>{
    let prev = Table.innerHTML ;
    let str = `
    <tr>
                    <td>${volunteer.name}</td>
                    <td>${volunteer.email}</td>
                    <td>${volunteer.phone_number}</td>
                    <td>${volunteer.language}</td>
                    <td>${volunteer.location}</td>
                    <td>${volunteer.availability}</td>
                </tr>
    `
    Table.innerHTML = prev + str ;
}