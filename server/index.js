const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('ALLOW', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

const { api } = require('./routes');

app.use('/api',  api.todo);



// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.message = 'Not Found';
  res.error = {};
  res.status(404);
  res.json({ status: 404, message: 'Not Found!' });
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.json({ status: err.status || 500, message: err.message,err: err });
});


app.listen(process.env.PORT || 3000, function () {
  console.log('App running');
});