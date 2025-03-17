const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const mongoURI = 'mongodb://127.0.0.1:27017/UserDB';
mongoose.connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.log("Error connecting to MongoDB:", err);
    process.exit(1);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
}, { collection: 'Users' });

const User = mongoose.model('User', userSchema);

  app.post('/users', async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = new User({ name, email, age });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); 
  } catch (err) {
    console.log("Error during saving user:", err);
    res.status(400).json({ error: err.message });  
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();  
    res.status(200).json(users);  
  } catch (err) {
    res.status(400).json({ error: err.message });  
  }
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id, 
      { name, email, age }, 
      { new: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser); 
  } catch (err) {
    console.log("Error during updating user:", err);
    res.status(400).json({ error: err.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.log("Error during deleting user:", err);
    res.status(400).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
