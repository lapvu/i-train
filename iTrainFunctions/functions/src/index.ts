import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { genSeats } from "./data";
admin.initializeApp();

exports.createSeats = functions.https.onRequest(async (req, res) => {
  const { ToaXes, DMTauVatLyId, BangGiaVes } = req.body;
  try {
    const ref = await admin
      .database()
      .ref("seats")
      .child(DMTauVatLyId);
    await ref.on("value", (snap: any) => {
      if (!snap.val()) {
        ToaXes.forEach((e: any) => {
          let data = genSeats(
            e.ToaXeDienGiai,
            e.DMTauVatLyId,
            e.ToaSo,
            BangGiaVes
          );
          ref.child(e.Id).set(data);
        });
      }
    });
  } catch (e) {
    console.log("The read failed: " + e.code);
    res.status(500).send(e.code);
  }
});
