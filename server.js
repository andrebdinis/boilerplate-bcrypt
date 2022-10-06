'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const bcrypt = require('bcrypt')
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
  console.log(hash); // $2b$12$Sws6MbAJX76X3fh3UAWdK.z55lbwnufoI3nIFkQrNJVsXNkM9psT.
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    /*res == true or false*/
    console.log(res); //true
  });
});
//END_ASYNC


//START_SYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash); //$2b$12$tMEDXeDZz/BhprJ8KOkNN.kmSwCkAv7lG8Px8/nk0FNQQkXNokBfK
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result); //true
//END_SYNC


//BCRYPT HASH FORMAT:
//$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm
//1. The first small bit of data $2a is defining what kind of hash algorithm was used.
//2. The next portion $13 defines the cost. Cost is about how much power it takes to compute the hash. It is on a logarithmic scale of 2^cost and determines how many times the data is put through the hashing algorithm.
//3. The following 22 characters is the salt in plain text.
//4. And the rest is the hashed password!



























app.listen(process.env.PORT || 3000, () => {});
