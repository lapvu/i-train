import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { genSeats } from "./data";
admin.initializeApp();

exports.createSeats = functions.https.onRequest((req, res) => {
  const { ToaXeDienGiai, Id, DMTauVatLyId, ToaSo } = req.body;
  let data = genSeats(ToaXeDienGiai, DMTauVatLyId, ToaSo);
  const ref = admin.database().ref("seats/" + DMTauVatLyId + "/" + Id);
  try {
    ref.set(data);
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});
