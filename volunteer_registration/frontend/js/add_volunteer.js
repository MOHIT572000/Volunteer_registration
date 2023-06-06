const axios = require('axios') ;

const add_volunteer = async(volunteer) =>{
    try {
        await axios.post(addurl , volunteer).
        then( async(res) =>{
            const data = await res.json();
            console.log(data) ;
        })
    } catch (error) {
        console.log(error) ;
    }
}

module.exports=add_volunteer ;