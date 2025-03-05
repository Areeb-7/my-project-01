var admin = require("firebase-admin");

var serviceAccount = require("/Users/shahmohdareeb/Desktop/project 2/backend/urbancompany-2187b-firebase-adminsdk-mmc3i-85905b8bd1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports= admin