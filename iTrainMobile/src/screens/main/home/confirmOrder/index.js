import React from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  Alert
} from "react-native";
import colors from "../../../../styles/colors";
import Icon from "react-native-vector-icons/AntDesign";
import { formatDate, getDuration, priceDisplay } from "../../../../helpers";
import { Button, Spinner } from "native-base";
export default class confirmOrderScreen extends React.Component {
  static navigationOptions = {
    title: "Xác nhận đặt vé",
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      isLoading: false
    };
  }
  confirmOrder = async () => {
    this.setState({
      isLoading: true
    });
    let url = "https://us-central1-i-train-8f38c.cloudfunctions.net/createOrder";
    console.log(url)
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          totalPrice: this.state.totalPrice,
          shoppingCart: this.props.screenProps.shoppingCart,
          userId: this.props.screenProps.user
        })
      });
      const data = await res.json();
      if (data.code) {
        this.setState({ isLoading: false });
        this.props.screenProps.resetShoppingCart();
        this.props.navigation.navigate("OrderDetail",data);
      } else {
        Alert.alert(
          "Lỗi",
          "Ghế của bạn đã bị đặt",
          [{ text: "OK", onPress: () => console.log("loi") }],
          { cancelable: false }
        );
        this.setState({ isLoading: false });
      }
    } catch (e) {
      console.log(e);
    }
  };
  totalPrice = type => {
    let items = this.props.screenProps.shoppingCart;
    let price = 0;
    if (type) {
      items.go.forEach((e, i) => {
        price = price + e.Gia;
      });
    } else {
      items.back.forEach((e, i) => {
        price = price + e.Gia;
      });
    }
    return price;
  };
  totalAllPrice = () => {
    let items = this.props.screenProps.shoppingCart;
    let total = 0;
    if (items.go.length !== 0) {
      total = total + this.totalPrice(true);
    }
    if (items.back.length !== 0) {
      total = total + this.totalPrice(false);
    }
    return total;
  };
  componentDidMount() {
    this.setState({
      totalPrice: this.totalAllPrice()
    });
  }
  render() {
    const { width } = Dimensions.get("window");
    const { shoppingCart, from, to } = this.props.screenProps;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#dddddd"
        }}
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: "center"
          }}
        >
          {shoppingCart.go.length !== 0 && (
            <View
              style={{
                width: width - 40,
                backgroundColor: colors.white,
                marginTop: 20
              }}
            >
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10
                  }}
                >
                  <Image
                    source={require("../../../../assets/imgs/trainblack.png")}
                    style={styles.img1}
                  />
                  <Text style={styles.text1}>{from.TenGa}</Text>
                  <Icon name="arrowright" style={{ marginHorizontal: 5 }} />
                  <Text style={styles.text2}>{to.TenGa}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.content1}>
                    <Icon name="clockcircleo" style={{ marginRight: 8 }} />
                    <Text>
                      <Text style={{ color: colors.gradient[1] }}>
                        {shoppingCart.go[0].GioDi}
                      </Text>{" "}
                      - {formatDate(shoppingCart.go[0].NgayDi)}
                    </Text>
                  </View>
                  <View style={styles.content2}>
                    <Image
                      source={require("../../../../assets/imgs/trains.png")}
                      style={styles.img2}
                    />
                    <Text style={{ color: colors.black, fontSize: 16 }}>
                      Tàu {shoppingCart.go[0].MacTau}
                    </Text>
                  </View>
                </View>
                <View style={styles.content3}>
                  <View style={styles.content1}>
                    <Icon name="clockcircleo" style={{ marginRight: 8 }} />
                    <Text>
                      <Text style={{ color: colors.gradient[1] }}>
                        {shoppingCart.go[0].GioDen}
                      </Text>{" "}
                      - {formatDate(shoppingCart.go[0].NgayDen)}
                    </Text>
                  </View>
                  <View style={styles.content4}>
                    <Text>
                      {getDuration(
                        shoppingCart.go[0].GioDi,
                        shoppingCart.go[0].GioDen,
                        shoppingCart.go[0].NgayDi,
                        shoppingCart.go[0].NgayDen
                      )}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderTopColor: "#dddddd",
                  borderTopWidth: 0.7,
                  borderStyle: "dotted"
                }}
              >
                {shoppingCart.go.map((e, i) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        paddingHorizontal: 15,
                        paddingVertical: 10
                      }}
                      key={i}
                    >
                      <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <Text>
                          Ghế {e.ChoSo} - Toa {e.ToaSo}
                        </Text>
                      </View>
                      <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={{ color: colors.black }}>
                          {priceDisplay(e.Gia)}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
              <View
                style={{
                  borderTopColor: "#dddddd",
                  borderTopWidth: 0.7,
                  borderStyle: "dotted"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    paddingVertical: 10
                  }}
                >
                  <View style={{ flex: 1, alignItems: "flex-start" }}>
                    <Text style={{ color: colors.black, fontSize: 16 }}>
                      Số tiền chiều đi
                    </Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 16, color: colors.gradient[1] }}>
                      {priceDisplay(this.totalPrice(true))}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}

          {shoppingCart.back.length !== 0 && (
            <View
              style={{
                width: width - 40,
                backgroundColor: colors.white,
                marginTop: 20
              }}
            >
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10
                  }}
                >
                  <Image
                    source={require("../../../../assets/imgs/trainblack.png")}
                    style={styles.img1}
                  />
                  <Text style={styles.text1}>{to.TenGa}</Text>
                  <Icon name="arrowright" style={{ marginHorizontal: 5 }} />
                  <Text style={styles.text2}>{from.TenGa}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.content1}>
                    <Icon name="clockcircleo" style={{ marginRight: 8 }} />
                    <Text>
                      <Text style={{ color: colors.gradient[1] }}>
                        {shoppingCart.back[0].GioDi}
                      </Text>{" "}
                      - {formatDate(shoppingCart.back[0].NgayDi)}
                    </Text>
                  </View>
                  <View style={styles.content2}>
                    <Image
                      source={require("../../../../assets/imgs/trains.png")}
                      style={styles.img2}
                    />
                    <Text style={{ color: colors.black, fontSize: 16 }}>
                      Tàu {shoppingCart.back[0].MacTau}
                    </Text>
                  </View>
                </View>
                <View style={styles.content3}>
                  <View style={styles.content1}>
                    <Icon name="clockcircleo" style={{ marginRight: 8 }} />
                    <Text>
                      <Text style={{ color: colors.gradient[1] }}>
                        {shoppingCart.back[0].GioDen}
                      </Text>{" "}
                      - {formatDate(shoppingCart.back[0].NgayDen)}
                    </Text>
                  </View>
                  <View style={styles.content4}>
                    <Text>
                      {getDuration(
                        shoppingCart.back[0].GioDi,
                        shoppingCart.back[0].GioDen,
                        shoppingCart.back[0].NgayDi,
                        shoppingCart.back[0].NgayDen
                      )}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderTopColor: "#dddddd",
                  borderTopWidth: 0.7,
                  borderStyle: "dotted"
                }}
              >
                {shoppingCart.back.map((e, i) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        paddingHorizontal: 15,
                        paddingVertical: 10
                      }}
                      key={i}
                    >
                      <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <Text>
                          Ghế {e.ChoSo} - Toa {e.ToaSo}
                        </Text>
                      </View>
                      <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={{ color: colors.black }}>
                          {priceDisplay(e.Gia)}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
              <View
                style={{
                  borderTopColor: "#dddddd",
                  borderTopWidth: 0.7,
                  borderStyle: "dotted"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    paddingVertical: 10
                  }}
                >
                  <View style={{ flex: 1, alignItems: "flex-start" }}>
                    <Text style={{ color: colors.black, fontSize: 16 }}>
                      Số tiền chiều về
                    </Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 16, color: colors.gradient[1] }}>
                      {priceDisplay(this.totalPrice(false))}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          <View
            style={{
              width: width - 40,
              backgroundColor: colors.white,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginTop: 20,
              flexDirection: "row"
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-start" }}>
              <Text style={{ color: colors.black, fontSize: 16 }}>
                Tổng tiền thanh toán
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={{ fontSize: 16, color: colors.gradient[1] }}>
                {priceDisplay(this.state.totalPrice)}
              </Text>
            </View>
          </View>
          <View style={{ width: width - 40, marginTop: 20, marginBottom: 20 }}>
            <Button
              block
              style={{ backgroundColor: colors.gradient[1] }}
              onPress={() => this.confirmOrder()}
            >
              {this.state.isLoading && <Spinner />}
              {!this.state.isLoading && (
                <Text style={{ color: colors.white }}>XÁC NHẬN</Text>
              )}
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  img2: {
    height: 30,
    width: 30,
    marginRight: 8
  },
  content1: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row"
  },
  content2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  content3: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10
  },
  content4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  img1: {
    width: 23,
    height: 23
  },
  text1: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "bold",
    color: colors.black
  },
  text2: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.black
  }
});
