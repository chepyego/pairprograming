const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> { // index endpoint
    
    res.json("WELCOME TO THIS MILESTONE");
});

router.get('/users', (req, res)=> {   // Endpoint to retrieves all the users
    let users = getUsers();      // Assign getUsers function to variable users
    res.json(users);  // Send results in form of json
})

router.get('/user:id', (req, res) => {  // Endpoint to retrieve single user item
     let id = req.params.id; // id from the endpoint 
     let user = getUser(id); 
     res.json(user);
});

let user = {};
let users = [];
console.log("top " + users );

let jemimah = {
    id: 1,
    name : "Jemimah",
    description : "Cute",
    date : "5/04/2018"
};
let dess = {
    id: 2,
    name : "Dess",
    description : "Nerd",
    date : "5/04/2018"
};
let aly = {
    id: 3,
    name : "Aly",
    description : "Geeky",
    date : "5/04/2018"
};


users.push(jemimah);  // Adding items to usrs object
users.push(dess);
users.push(aly);
console.log("bottom " + users);

let getUsers = () => {  // Function/method to retrieve all the users
    return users;
}

let getUser = (id) => {   // Function to retrieve singler user item
   for(let x=0; x<users.length; x++){
       if(users[x].id == id){
           return users[x];
       }
   }
}


module.exports = router;