// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const express = require('express');


exports.test = functions.https.onRequest((req, res) => {
  res.send('test');
});