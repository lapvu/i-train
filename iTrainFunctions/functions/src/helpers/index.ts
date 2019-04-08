export const makeid = (length:number) =>{
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
export const checkSeats = (arr:any,root:any)=>{
    let p = [] as any[];
    let itemErrors = [] as any[];
    arr.forEach((e:any,i:number) => {
            p.push(new Promise((resolve, reject)=>{
                root.ref("seats/"+e.DMTauVatLyId+"/"+e.Id+"/"+e.itemIndex).once('value',(snapshot:any)=>{
                    let item = snapshot.val();
                    if(item.Status === 1){
                        itemErrors.push(e);
                        resolve(itemErrors)
                    }else{
                        resolve(itemErrors)
                    }
                },(e:any)=>{
                    reject(e)
                })
            })
        )
    })
    return Promise.all(p)
}