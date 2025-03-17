const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', (req, res) => {
  const users = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  ];
  res.render('index', { users });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
