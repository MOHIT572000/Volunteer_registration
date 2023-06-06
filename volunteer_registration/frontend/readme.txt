### TEACHFORINDIA

## VOLUNTEER REGISTRATION FORM FOR TEACHING IN CLASSROOM


```

Output zip File Name is volunteer_registration
It has two Folders 
1. backend 
2. frontend



for starting backend 

cd backend 

node_modules are already exist so no need of npm i

node index.js 

now start frontend by live server Extension ( Go Live )
and Settle Down the Cors error by chaning the ORIGIN from http://127.0.0.1:5500 to your Desktop origin in index.js 

```


## Tech Stack

1. Node js
2. Express-js
3. HTML ,CSS , JAVASCRIPT 
4. MongoDb Altas


```
Admin Login Details To See Registered Volunteer Data 

username - 123456789
password  - 123456789

```

### Fetures Completed

- [ ] One Person can Register for teaching by Filling Volunteer Registration form ( index.html ) 
- [ ] Admin Can see Registered Volunteer Data by logging in ( login.html ) login Details Are Mentioned Above 
- [ ] One Volunteer Can Registered only once . There Is An Email Check if user is already Exist With the current Email then it will show warning on screen


### API ENDPOINTS

```
1. When User hits the submit button on registration form then an api endpoint is called 
     http://localhost:5055/r/registration

2. when admin enter details in login page and enter submit button the an api endpoint is called 
     http://localhost:5055/a/Admin

3 . After Login of Admin one more api endpoint is called and all Registered Volunteer data is Shown in a Table 
     http://localhost:5055/g/getAllReg
```
