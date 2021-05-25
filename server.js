const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use('/parks', routes.parks);
app.use('/users', routes.users);
app.use('/hotels', routes.hotels);

app.listen(3000, (req, res) => {
    console.log("Listening!");
})
