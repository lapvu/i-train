import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { genSeats } from "./data";
admin.initializeApp();

exports.createSeats = functions.https.onRequest((req, res) => {
  const { ToaXes, DMTauVatLyId } = req.body;
  const ref = admin
    .database()
    .ref("seats")
    .child(DMTauVatLyId);
  ref.on("value", (snap: any) => {
    if (!snap.val()) {
      ToaXes.forEach((e: any) => {
        let data = genSeats(e.ToaXeDienGiai, e.DMTauVatLyId, e.ToaSo);
        try {
          ref.child(e.Id).set(data);
        } catch (e) {
          res.send(e);
        }
      });
    }
  });
});
