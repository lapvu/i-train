import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as _ from "lodash";
admin.initializeApp();

exports.createSeats = functions.https.onRequest((req, res) => {
  const { ToaXeDienGiai, Id, DMTauVatLyId, ToaSo } = req.body;
  const data = genSeats(ToaXeDienGiai, DMTauVatLyId, ToaSo);
  res.send(data);
  const ref = admin.database().ref("seats/" + Id);
  try {
    ref.set(data);
  } catch (e) {
    res.send(e);
  }
});

const genSeats = (
  ToaXeDienGiai: string,
  DMTauVatLyId: number,
  ToaSo: string
) => {
  let t1 = [];
  let t2 = [];
  let arr = [{}];
  if (ToaXeDienGiai === "Giường nằm khoang 4 điều hòa") {
    for (let i = 1; i <= 25; i += 4) {
      t1.push({
        DMTauVatLyId: DMTauVatLyId,
        ChoSo: i,
        LoaiCho: ToaXeDienGiai,
        ToaSo: ToaSo,
        Status: 0
      });
    }
    for (let i = 2; i <= 26; i += 4) {
      t1.push({
        DMTauVatLyId: DMTauVatLyId,
        ChoSo: i,
        LoaiCho: ToaXeDienGiai,
        ToaSo: ToaSo,
        Status: 0
      });
    }
    for (let i = 3; i <= 27; i += 4) {
      t2.push({
        DMTauVatLyId: DMTauVatLyId,
        ChoSo: i,
        LoaiCho: ToaXeDienGiai,
        ToaSo: ToaSo,
        Status: 0
      });
    }
    for (let i = 4; i <= 28; i += 4) {
      t2.push({
        DMTauVatLyId: DMTauVatLyId,
        ChoSo: i,
        LoaiCho: ToaXeDienGiai,
        ToaSo: ToaSo,
        Status: 0
      });
    }
    arr.push(_.sortBy(t1, "ChoSo"));
    arr.push(_.sortBy(t2, "ChoSo"));
  } else if (ToaXeDienGiai === "Ngồi mềm điều hòa") {
  }
  return arr;
};
