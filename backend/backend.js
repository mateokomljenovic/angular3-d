//Initialize backend and middlewares
let express = require("express");
let path = require("path");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfig = require("../database/db");

//Connect to the database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log(`Database could not connect: ${error}`);
    }
  );

// Init model route
const modelRoute = require("../backend/routes/model.route");


// Init app
const app = express();

// Body parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Cors
app.use(cors())
app.use('/api', modelRoute)

// Connect to 4201
app.get('/', function(req, res){
  res.send('Hello from backend!');
});

// Error handlers
app.use(function(req,res){
  res.status(404).send(`Cannot find ${req.url}`);
});

app.use(function (err, req, res, next) {
 console.error(err.message);
 if (!err.statusCode) err.statusCode = 500;
 res.status(err.statusCode).send(err.message);
});

// Port
const port = process.env.PORT || 4201
const server = app.listen(port, () => {
  console.log(`Backend connected to the port ${port}`)
})
