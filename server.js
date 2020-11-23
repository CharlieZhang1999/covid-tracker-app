const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv/config'); // For privacy use

//Import Routes
const postsRoute = require('./routes/posts');

//Middlewares
/* whenever goes to the link specified in use, it will run the
following middleware function */

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are at home');
});

//Connect to db
mongoose.connect(
    'mongodb://localhost/covid' || process.env.MONGODB_URI, 
    { useNewUrlParser: true,
    useUnifiedTopology: true }, 
    () => {
    console.log("Connected to db!!!");
})


//PORT
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server started on port ${port}`));










