import * as _ from "lodash";
export const genSeats = (
  ToaXeDienGiai: string,
  DMTauVatLyId: number,
  ToaSo: string,
  BangGiaVes: any,
  Id:number
) => {
  let arr = [];
  if (ToaXeDienGiai === "Ngồi mềm điều hòa") {
    let price = _.find(
      BangGiaVes,
      e => e.TenLoaiCho === "Ngồi mềm điều hòa",
      0
    );
    for (let i = 1; i <= 64; i++) {
      arr.push({
        DMTauVatLyId: DMTauVatLyId,
        ChoSo: i,
        LoaiCho: ToaXeDienGiai,
        ToaSo: ToaSo,
        Status: 0,
        loai: null,
        Gia: price.GiaVe,
        Id:Id
      });
    }
  } else if (ToaXeDienGiai === "Giường nằm khoang 4 điều hòa") {
    let priceT1 = _.find(
      BangGiaVes,
      (e: any) => e.TenLoaiCho === "Nằm khoang 4 điều hòa T1"
    );
    let priceT2 = _.find(
      BangGiaVes,
      (e: any) => e.TenLoaiCho === "Nằm khoang 4 điều hòa T2"
    );
    arr.push({
      ChoSo: 1,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 2,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 5,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 6,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 9,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 10,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 13,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 14,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 17,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 18,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 21,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 22,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 25,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 26,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 3,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 4,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 7,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 8,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 11,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 12,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 15,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 16,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 19,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 20,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 23,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 24,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 27,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 28,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
  } else if (ToaXeDienGiai === "Giường nằm khoang 6 điều hòa") {
    let priceT1 = _.find(
      BangGiaVes,
      (e: any) => e.TenLoaiCho === "Nằm khoang 6 điều hòa T1"
    );
    let priceT2 = _.find(
      BangGiaVes,
      (e: any) => e.TenLoaiCho === "Nằm khoang 6 điều hòa T2"
    );
    let priceT3 = _.find(
      BangGiaVes,
      (e: any) => e.TenLoaiCho === "Nằm khoang 6 điều hòa T3"
    );
    arr.push({
      ChoSo: 1,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 2,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 7,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 8,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 13,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 14,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 19,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 20,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 25,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 26,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 31,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 32,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 37,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 38,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T1",
      Gia: priceT1.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 3,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 4,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 9,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 10,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 15,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 16,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 21,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 22,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 27,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 28,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 33,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 34,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 39,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 40,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T2",
      Gia: priceT2.GiaVe,
      Id:Id
    });
    arr.push({
      ChoSo: 5,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 6,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 11,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 12,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 17,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 18,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 23,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 24,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 29,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 30,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 35,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 36,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 41,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
    arr.push({
      ChoSo: 42,
      DMTauVatLyId: DMTauVatLyId,
      LoaiCho: ToaXeDienGiai,
      ToaSo: ToaSo,
      Status: 0,
      loai: "T3",
      Gia: priceT3.Giave,
      Id:Id
    });
  }
  return _.sortBy(arr, "ChoSo");
};
