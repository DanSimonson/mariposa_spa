const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path')

const connectDB = require('./config/db')
const reservations = require('./routes/api/reservations')

const app = express();

//bodyparser middleware
app.use(bodyParser.json())

//Start DB
connectDB()

//use routes
app.use('/api/reservations', reservations)

//server static assets if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))

/*app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);*/