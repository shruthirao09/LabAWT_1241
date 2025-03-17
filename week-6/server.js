
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());


let users = [
    { id: 1, name: 'Shruthi', email: 'shruthi.rao@example.com' },
    { id: 2, name: 'Sofiya', email: 'shaik.sofiya@example.com' },
    { id: 3, name: 'Asima', email: 'asima.shareef@example.com' }
];


app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required.' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});


app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json(user);
});


app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found.' });
    }

    if (name) users[userIndex].name = name;
    if (email) users[userIndex].email = email;

    res.status(200).json(users[userIndex]);
});


app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found.' });
    }

    users.splice(userIndex, 1);
    res.status(204).send();
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
