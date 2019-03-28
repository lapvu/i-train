import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

exports.createSeats = functions.https.onRequest((req, res) => {
  const { ToaXeDienGiai, Id, DMTauVatLyId, ToaSo } = req.body;
  const data = genSeats(ToaXeDienGiai, Id, DMTauVatLyId, ToaSo);
  const ref = admin.database().ref("seats/" + Id);
  try {
    data.forEach(e => {
      ref.push(e);
    });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

const genSeats = (
  ToaXeDienGiai: string,
  Id: number,
  DMTauVatLyId: number,
  ToaSo: string
) => {
  let arr = [];
  if (ToaXeDienGiai === "Giường nằm khoang 4 điều hòa") {
    for (let i = 0; i < 27; i++) {
      arr.push({
        DMTauVatLyId: DMTauVatLyId,
        ChoSo: i + 1,
        LoaiCho: ToaXeDienGiai,
        ToaSo: ToaSo,
        Status: 0
      });
    }
  } else if (ToaXeDienGiai === "Ngồi mềm điều hòa") {
    for (let i = 0; i < 63; i++) {
      arr.push({
        DMTauVatLyId: DMTauVatLyId,
        ChoSo: i + 1,
        LoaiCho: ToaXeDienGiai,
        ToaSo: ToaSo,
        Status: 0
      });
    }
  }
  return arr;
};
