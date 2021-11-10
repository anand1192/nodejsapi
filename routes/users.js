import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users =  []

router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {

    const user = req.body;

    users.push({ ... user, id: uuidv4() });

    res.send(`User with the name ${user.firstname} added to the database`)
});

router.get('/:id', (req,res) => {

    //console.log(req.params);
    const { id } = req.params;
    const founduser = users.find((user) => user.id == id);

    res.send(founduser);
} );

router.delete('/:id', (req, res)=> {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`user with th id ${id} deleted from the database`)
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;

    const user = users.find((user) => user.id == id);

    if(firstname) user.firstname = firstname;

    if(lastname) user.lastname = lastname;

    if(age) user.age = age;

    res.send(`user with the id ${id} has been updated`)


} )

export default router;