const express = require('express');
const apn = require('apn');
const admin = require('firebase-admin');

const app = express();
app.use(express.json());

// ios apn
const apnProvider = new apn.Provider({
  token: {
    key: '',
    keyId: '',
    teamId: '',
  },
  production: false, 
});