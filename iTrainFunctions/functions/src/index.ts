import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { genSeats } from "./data";
import {makeid ,checkSeats} from "./helpers";

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
            BangGiaVes,
            e.Id
          );
          ref.child(e.Id).set(data);
        });
      }
    });
  } catch (e) {
    res.status(500).send(e.code);
  }
});

exports.createOrder = functions.https.onRequest(async(req,res)=>{
  const {shoppingCart,totalPrice,userId} = req.body;
  try {
    const root =  admin.database();
    const store = await admin.firestore().collection("orders");
    let result1;
    let result2;
    if(shoppingCart.go.length !== 0){
      result1 = await checkSeats(shoppingCart.go,root);
      if(!(result1 && result1[0].length !== 0)){
        shoppingCart.go.forEach((e:any,i:any) => {
          root.ref("seats/"+e.DMTauVatLyId+"/"+e.Id+"/"+e.itemIndex).once('value',(snapshot:any)=>{
            let item = snapshot.val();
            item.Status = 1;
            root.ref("seats/"+e.DMTauVatLyId+"/"+e.Id+"/"+e.itemIndex).set(item);
          },(e:any)=>{
              console.log(e)
          })
        });
      }
    }
    if(shoppingCart.back.length !==0){
      result2 = await checkSeats(shoppingCart.back,root);
      if(!(result2 && result2[0].length !== 0)){
        shoppingCart.back.forEach((e:any,i:any) => {
          root.ref("seats/"+e.DMTauVatLyId+"/"+e.Id+"/"+e.itemIndex).once('value',(snapshot:any)=>{
            let item = snapshot.val();
            item.Status = 1;
            root.ref("seats/"+e.DMTauVatLyId+"/"+e.Id+"/"+e.itemIndex).set(item);
          },(e:any)=>{
              console.log(e)
          })
        });
      }
    }
    if((result1 && result1[0].length !== 0) || (result2 && result2[0].length !== 0)){
      res.send({
        itemGoError: result1,
        itemBackError:result2
      })
    }else{
      store.add( {
        shoppingCart,
        userId:userId.uid,
        dateCrate:new Date().toISOString(),
        totalPrice,
        code:makeid(7)
      })
      res.send({
        code:makeid(7),
        dateCrate:new Date().toISOString(),
      })
    }
  }catch(e){
    res.send(e)
  }
})

exports.delete = functions.https.onRequest((req,res)=>{
  admin.database().ref("seats").remove()
})