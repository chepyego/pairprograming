const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    
    res.json(getUsers());
});

let user = {};
let users = [];
let jemimah = {
    id: 1,
    name : "Jemimah",
    description : "Cute",
    date : "5/04/2018"
};
let dess = {
    id: 1,
    name : "Dess",
    description : "Nerd",
    date : "5/04/2018"
};
let aly = {
    id: 1,
    name : "Aly",
    description : "Geeky",
    date : "5/04/2018"
};


users.push(jemimah);
users.push(dess);
users.push(aly);

let getUsers = () => {
    return users;
}


module.exports = router;