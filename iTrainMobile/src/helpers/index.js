module.exports = {
  formatDate: dateString => {
    let date = new Date(dateString);
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0");
    let yyyy = date.getFullYear();
    date = mm + "/" + dd + "/" + yyyy;
    return date;
  },
  getDuration: (a1, a2, a3, a4) => {
    let a11 = a1.split(":");
    let a22 = a2.split(":");
    let a33 = new Date(a3);
    let a44 = new Date(a4);
    let a;
    let totalTimeGO = parseInt(a11[0]) * 60 + parseInt(a11[1]);
    let totalTimeAr = parseInt(a22[0]) * 60 + parseInt(a22[1]);
    let totalTimeDay = (a44.getDate() - a33.getDate()) * 24 * 60;
    if (a33.getDate() != a44.getDate()) {
      a = totalTimeDay - totalTimeGO + totalTimeAr;
    } else {
      a = Math.abs(totalTimeGO - totalTimeAr);
    }
    if (a > 0) {
      let b = 1440,
        c = Math.floor(a / b),
        d = Math.floor((a % b) / 60),
        e = Math.ceil((a % b) % 60);
      if (c > 0)
        return d > 0 && e > 0
          ? c + " ngày " + d + " giờ " + e + " phút"
          : d > 0
          ? c + " ngày " + d + " giờ"
          : e > 0
          ? c + " ngày và " + e + " phút"
          : c + " ngày";
      if (d > 0) return e > 0 ? d + " giờ " + e + " phút" : d + " giờ";
      if (e > 0) return e + " phút";
    }
  },
  priceDisplay: price => {
    return price + "." + "000";
  }
};
