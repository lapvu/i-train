import React from "React";
import { Text } from "native-base";
import colors from "../../../../styles/colors";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ToastAndroid
} from "react-native";
import firebase from "react-native-firebase";
import Loader from "../../../../components/loader";
import ShoppingCart from "../../../../components/shoppingCart";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.white
  }
});
const faq = [
  {
    name: "Chỗ trống",
    color: colors.white
  },
  {
    name: "Chỗ đã bán",
    color: colors.seatColor1
  },
  {
    name: "Chỗ đang chọn",
    color: colors.seatColor2
  },
  {
    name: "Ghế phụ",
    color: colors.seatColor3
  }
];

export default class SeatListScreen extends React.Component {
  static navigationOptions = {
    title: "Chọn ghế",
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  constructor(props) {
    super(props);
    this.state = {
      seats: [],
      isLoading: false
    };
    this.ref = firebase
      .database()
      .ref()
      .child("seats");
  }

  addToShoppingCart = (index, data) => {
    const items = this.props.screenProps.shoppingCart;
    const { way, info } = this.props.navigation.state.params;
    if (items.go.length >= 4 && way) {
      ToastAndroid.show(
        "Bạn đã đặt đủ 4 vé cho chiều đi !",
        ToastAndroid.SHORT
      );
    } else if (items.back.length >= 4 && !way) {
      ToastAndroid.show(
        "Bạn đã đặt đủ 4 vé cho chiều về !",
        ToastAndroid.SHORT
      );
    } else if (!data.selected || data.status === 0 || data.status === 3) {
      let copyState = this.state.seats;
      copyState.forEach((e, i) => {
        if (i === index) {
          e.selected = true;
          let item = Object.assign(
            {},
            {
              MacTau: info.MacTau,
              GioDi: info.GioDi,
              GioDen: info.GioDen,
              NgayDi: info.NgayDi,
              NgayDen: info.NgayDen,
              itemIndex: i
            },
            e
          );
          this.props.screenProps.addToCart(item, way);
        }
      });
      this.setState({
        seats: copyState
      });
      ToastAndroid.show("Đã thêm vào giỏ !", ToastAndroid.SHORT);
    }
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    const data = this.props.navigation.state.params.data;
    const items = this.props.screenProps.shoppingCart;
    this.ref
      .child(data.DMTauVatLyId)
      .child(data.Id)
      .on("value", snap => {
        if (snap.val()) {
          let seatList = snap.val().filter(el => {
            return el != null;
          });
          if (items.go.length !== 0) {
            items.go.forEach((e, i) => {
              if (
                seatList[e.itemIndex].Status !== 1 &&
                seatList[e.itemIndex].ToaSo === e.ToaSo &&
                seatList[e.itemIndex].DMTauVatLyId === e.DMTauVatLyId
              ) {
                seatList[e.itemIndex].selected = true;
              }
            });
          }
          if (items.back.length !== 0) {
            items.back.forEach((e, i) => {
              if (
                seatList[e.itemIndex].Status !== 1 &&
                seatList[e.itemIndex].ToaSo === e.ToaSo &&
                seatList[e.itemIndex].DMTauVatLyId === e.DMTauVatLyId
              ) {
                seatList[e.itemIndex].selected = true;
              }
            });
          }
          this.setState({ seats: seatList, isLoading: false });
        }
      });
  }
  removeItem = item => {
    if (this.state.seats) {
      let copyState = this.state.seats;
      copyState.forEach((e, i) => {
        if (
          i === item.itemIndex &&
          e.ToaSo === item.ToaSo &&
          e.DMTauVatLyId === item.DMTauVatLyId
        ) {
          e.selected = false;
        }
      });
      this.setState({
        seats: copyState
      });
    }
  };
  render() {
    const { width } = Dimensions.get("window");
    const loaiToa = this.props.navigation.getParam("data").ToaXeDienGiai;
    return (
      <View style={{ flex: 1, backgroundColor: "#dddddd" }}>
        <View style={styles.container}>
          {faq.map((e, i) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                key={i}
              >
                <Text
                  style={{
                    height: 18,
                    width: 18,
                    borderWidth: 0.5,
                    borderRadius: 5,
                    borderColor: colors.black,
                    backgroundColor: e.color
                  }}
                />
                <Text style={{ color: "gray", fontSize: 13, marginTop: 5 }}>
                  {e.name}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={{ flex: 9, alignItems: "center" }}>
          <View style={{ flex: 1, width: width - 40, flexDirection: "row" }}>
            {loaiToa === "Giường nằm khoang 4 điều hòa" ? (
              <React.Fragment>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text>Tầng 1</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text>Tầng 2</Text>
                </View>
              </React.Fragment>
            ) : loaiToa === "Giường nằm khoang 6 điều hòa" ? (
              <React.Fragment>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text>Tầng 1</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text>Tầng 2</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text>Tầng 3</Text>
                </View>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text>Trái</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text>Phải</Text>
                </View>
              </React.Fragment>
            )}
          </View>
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <View
              style={{
                flex: 10,
                backgroundColor: colors.white
              }}
            >
              <ScrollView
                contentContainerStyle={{
                  flexDirection: "row",
                  width: width - 40,
                  flexWrap: "wrap",
                  padding: 5,
                  justifyContent: "center"
                }}
              >
                {this.state.seats.map((data, index) => {
                  return (
                    <Text
                      onPress={this.addToShoppingCart.bind(this, index, data)}
                      style={{
                        height: 30,
                        width:
                          loaiToa === "Giường nằm khoang 4 điều hòa" ||
                          loaiToa === "Ngồi mềm điều hòa"
                            ? "20%"
                            : "14%",
                        borderWidth: 0.5,
                        borderRadius: 5,
                        borderColor:
                          data.loai === "T1"
                            ? "purple"
                            : data.loai === "T2"
                            ? "#dd5600"
                            : data.loai === "T3"
                            ? "blue"
                            : colors.black,
                        backgroundColor: data.selected
                          ? colors.seatColor2
                          : data.Status === 0
                          ? colors.white
                          : data.Status === 1
                          ? colors.seatColor1
                          : colors.seatColor3,
                        textAlign: "center",
                        textAlignVertical: "center",
                        marginHorizontal: 5,
                        marginTop: 10
                      }}
                      key={index}
                    >
                      {data.ChoSo}
                    </Text>
                  );
                })}
              </ScrollView>
            </View>
          )}
          {(this.props.screenProps.shoppingCart.go.length != 0 ||
            this.props.screenProps.shoppingCart.back.length != 0) && (
            <ShoppingCart
              items={this.props.screenProps}
              navigation={this.props.navigation}
              removeItem={this.removeItem}
            />
          )}
          <View style={{ flex: 3 }} />
        </View>
      </View>
    );
  }
}
