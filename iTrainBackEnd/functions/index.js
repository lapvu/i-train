const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.createCarriage = functions.https.onRequest((req, res) => {
  admin
    .firestore()
    .collection("users")
    .get()
    .then(data => {
      res.send("data");
    })
    .catch(e => res.statusCode(500).send(e));
});
