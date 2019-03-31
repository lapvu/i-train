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
  addToShoppingCart = (index, status) => {
    if (status === 0 || status === 3) {
      const { data, way, info } = this.props.navigation.state.params;
      let stateCopy = this.state.seats;
      stateCopy.forEach((e, i) => {
        if (i === index) {
          e.Status = 2;
          let item = Object.assign(
            {},
            {
              trainName: info.MacTau,
              timeGo: info.GioDi,
              timeArr: info.GioDen,
              dateGo: info.NgayDi,
              dateArr: info.NgayDen
            },
            e
          );
          this.props.screenProps.addToCart(item, way);
        }
      });
      if (stateCopy) {
        this.ref
          .child(data.DMTauVatLyId)
          .child(data.Id)
          .set(stateCopy);
      }
      ToastAndroid.show("Đã thêm vào giỏ !", ToastAndroid.SHORT);
    }
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    const data = this.props.navigation.state.params.data;
    this.ref
      .child(data.DMTauVatLyId)
      .child(data.Id)
      .on("value", snap => {
        if (snap.val()) {
          let seatList = snap.val().filter(el => {
            return el != null;
          });
          this.setState({ seats: seatList, isLoading: false });
        }
      });
  }
  componentWillUnmount() {
    this.ref.off();
  }
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
                      onPress={this.addToShoppingCart.bind(
                        this,
                        index,
                        data.Status
                      )}
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
                        backgroundColor:
                          data.Status === 0
                            ? colors.white
                            : data.Status === 1
                            ? colors.seatColor1
                            : data.Status === 2
                            ? colors.seatColor2
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
          <ShoppingCart items={this.props.screenProps} />
          <View style={{ flex: 3 }} />
        </View>
      </View>
    );
  }
}
