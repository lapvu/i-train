import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import { Card, CardItem, Body } from "native-base";
import colors from "../../../../styles/colors";
import Icon from "react-native-vector-icons/AntDesign";
import { getDuration, formatDate } from "../../../../helpers";
import Loader from "../../../../components/loader";
import ShoppingCart from "../../../../components/shoppingCart";
export default class TrainListScreen extends React.Component {
  static navigationOptions = {
    title: "Danh sách chiều đi",
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  constructor(props) {
    super(props);
    this.state = {
      go: [],
      back: [],
      isLoading: false,
      items: null
    };
  }

  loadData = async () => {
    this.setState({
      isLoading: true
    });
    const { dateStart, dateEnd, from, to } = this.props.screenProps;
    const oneWay = this.props.navigation.getParam("oneWay", "");
    let url = "https://dsvn.vn/api/banveweb/SearchTauByGaDiGaDenNgayXP";
    let body = {
      "1": from.MaGa,
      "2": to.MaGa,
      "3": dateStart.dateString,
      "4": dateEnd.dateString,
      "5": oneWay,
      "6": ""
    };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (oneWay) {
        this.setState({
          isLoading: false,
          go: data.TauDis
        });
      } else {
        this.setState({
          isLoading: false,
          go: data.TauDis,
          back: data.TauVes
        });
      }
    } catch (e) {
      console.log(e);
      this.setState({
        isLoading: false
      });
    }
  };
  componentDidMount() {
    this.loadData();
  }
  render() {
    const { width } = Dimensions.get("window");
    const { isLoading, go, back } = this.state;
    const oneWay = this.props.navigation.getParam("oneWay", "");
    return (
      <View style={styles.container}>
        <View style={{ flex: 10 }}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <View
              style={{
                paddingHorizontal: 20,
                width: width,
                height: 45,
                backgroundColor: colors.white,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../../../../assets/imgs/trainblack.png")}
                style={styles.img1}
              />
              <Text style={styles.text1}>
                {this.props.screenProps.from.TenGa}
              </Text>
              <Icon name="arrowright" style={{ marginHorizontal: 5 }} />
              <Text style={styles.text2}>
                {this.props.screenProps.to.TenGa}
              </Text>
            </View>
            {isLoading && <Loader />}
            {go.map((e, index) => {
              return (
                <Card style={{ marginTop: 10, width: width - 40 }} key={index}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("CarriageList", {
                        data: e,
                        way: true
                      })
                    }
                  >
                    <Body>
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.content1}>
                          <Icon
                            name="clockcircleo"
                            style={{ marginRight: 8 }}
                          />
                          <Text>
                            {e.GioDi} ({formatDate(e.NgayDi)})
                          </Text>
                        </View>
                        <View style={styles.content2}>
                          <Image
                            source={require("../../../../assets/imgs/trains.png")}
                            style={styles.img2}
                          />
                          <Text>{e.MacTau}</Text>
                        </View>
                      </View>
                      <View style={styles.content3}>
                        <View style={styles.content1}>
                          <Icon
                            name="clockcircleo"
                            style={{ marginRight: 8 }}
                          />
                          <Text>
                            {e.GioDen} ({formatDate(e.NgayDen)})
                          </Text>
                        </View>
                        <View style={styles.content4}>
                          <Text>
                            {getDuration(
                              e.GioDi,
                              e.GioDen,
                              e.NgayDi,
                              e.NgayDen
                            )}
                          </Text>
                        </View>
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              );
            })}
            {!isLoading && go.length === 0 && (
              <View style={{ width: width - 40 }}>
                <Card>
                  <CardItem>
                    <Body>
                      <Text>
                        Không tìm thấy chuyến tàu nào từ{" "}
                        {this.props.screenProps.from.TenGa} đến{" "}
                        {this.props.screenProps.to.TenGa}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </View>
            )}
            {!oneWay && (
              <View
                style={{
                  paddingHorizontal: 20,
                  width: width,
                  height: 45,
                  backgroundColor: colors.white,
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 15
                }}
              >
                <Image
                  source={require("../../../../assets/imgs/trainblack.png")}
                  style={styles.img1}
                />
                <Text style={styles.text1}>
                  {this.props.screenProps.to.TenGa}
                </Text>
                <Icon name="arrowright" style={{ marginHorizontal: 5 }} />
                <Text style={styles.text2}>
                  {this.props.screenProps.from.TenGa}
                </Text>
              </View>
            )}
            {!isLoading && !oneWay && back.length === 0 && (
              <View style={{ width: width - 40 }}>
                <Card>
                  <CardItem>
                    <Body>
                      <Text>
                        Không tìm thấy chuyến tàu nào từ{" "}
                        {this.props.screenProps.to.TenGa} đến{" "}
                        {this.props.screenProps.from.TenGa}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </View>
            )}
            {!isLoading &&
              back.map((e, index) => {
                return (
                  <Card
                    style={{ marginTop: 10, width: width - 40 }}
                    key={index}
                  >
                    <CardItem
                      button
                      onPress={() =>
                        this.props.navigation.navigate("CarriageList", {
                          data: e,
                          way: false
                        })
                      }
                    >
                      <Body>
                        <View style={{ flexDirection: "row" }}>
                          <View style={styles.content1}>
                            <Icon
                              name="clockcircleo"
                              style={{ marginRight: 8 }}
                            />
                            <Text>
                              {e.GioDi} ({formatDate(e.NgayDi)})
                            </Text>
                          </View>
                          <View style={styles.content2}>
                            <Image
                              source={require("../../../../assets/imgs/trains.png")}
                              style={styles.img2}
                            />
                            <Text>{e.MacTau}</Text>
                          </View>
                        </View>
                        <View style={styles.content3}>
                          <View style={styles.content1}>
                            <Icon
                              name="clockcircleo"
                              style={{ marginRight: 8 }}
                            />
                            <Text>
                              {e.GioDen} ({formatDate(e.NgayDen)})
                            </Text>
                          </View>
                          <View style={styles.content4}>
                            <Text>
                              {getDuration(
                                e.GioDi,
                                e.GioDen,
                                e.NgayDi,
                                e.NgayDen
                              )}
                            </Text>
                          </View>
                        </View>
                      </Body>
                    </CardItem>
                  </Card>
                );
              })}
          </ScrollView>
        </View>
        <View
          style={{
            flex: 2,
            width: width
          }}
        >
          {(this.props.screenProps.shoppingCart.go.length != 0 ||
            this.props.screenProps.shoppingCart.back.length != 0) && (
            <ShoppingCart
              items={this.props.screenProps}
              navigation={this.props.navigation}
            />
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#dddddd",
    flex: 1
  },
  topContainer: {},
  img1: {
    width: 25,
    height: 25
  },
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
  text1: {
    fontSize: 18,
    marginLeft: 10
  },
  text2: {
    fontSize: 18
  }
});
