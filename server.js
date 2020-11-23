const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv/config'); // For privacy use


//PORT
const port = process.env.PORT || 8080

//CORs
app.use(cors());


//Import Routes
const postsRoute = require('./routes/posts');

//Middlewares
app.use(bodyParser.json());
app.use('/posts', postsRoute);


//ROUTES
/*app.get('/', (req, res) => {
    res.send('We are at home');
});*/

//Connect to db
mongoose.connect(
    'mongodb+srv://charlie:charlie1999@cluster0.4mjjf.mongodb.net/<dbname>?retryWrites=true&w=majority', 
    { useNewUrlParser: true,
    useUnifiedTopology: true }, 
    () => {
    console.log("Connected to db!!!");
})

//STEP 3 To Client
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    /*app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })*/
}

app.listen(port, () => console.log(`Server started on port ${port}`));










