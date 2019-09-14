const functions = require('firebase-functions');

exports.bigben = functions.https.onRequest((req, res) => {
  res.send("test");
});