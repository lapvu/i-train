import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import { Card, CardItem, Body, Button } from "native-base";
import colors from "../../../../styles/colors";
import Icon from "react-native-vector-icons/AntDesign";
import { getDuration, formatDate } from "../../../../helpers";
import Loader from "../../../../components/loader";
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
      idTrainSelected: ""
    };
  }
  getData = async (date, from, to, param) => {
    let url;
    if (param) {
      url = `https://k.vnticketonline.vn/api/GTGV/LoadDmTau?maGaDen=${
        from.MaGa
      }&maGaDi=${to.MaGa}&ngayDi=${date.dateString}`;
    } else {
      url = `https://k.vnticketonline.vn/api/GTGV/LoadDmTau?maGaDen=${
        to.MaGa
      }&maGaDi=${from.MaGa}&ngayDi=${date.dateString}`;
    }

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    return data;
  };
  loadData = async () => {
    this.setState({
      isLoading: true
    });
    const { dateStart, dateEnd, from, to } = this.props.screenProps;
    const oneWay = this.props.navigation.getParam("oneWay", "");
    if (oneWay) {
      try {
        const data = await this.getData(dateStart, from, to, 1);
        this.setState({
          go: data,
          isLoading: false
        });
      } catch (e) {
        console.log(e);
        this.setState({
          isLoading: false
        });
      }
    } else {
      try {
        const data1 = await this.getData(dateStart, from, to, 1);
        const data2 = await this.getData(dateEnd, from, to, 0);
        this.setState({
          go: data1,
          back: data2,
          isLoading: false
        });
      } catch (e) {
        console.log(e);
        this.setState({
          isLoading: false
        });
      }
    }
  };
  componentDidMount() {
    this.loadData();
  }

  render() {
    const { width, height } = Dimensions.get("window");
    const { isLoading, go, back } = this.state;
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
                        tauId: e.Id
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
                          <Text>{getDuration(e.GioDi, e.GioDen)}</Text>
                        </View>
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              );
            })}
            {back.length != 0 && (
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
            {back.map((e, index) => {
              return (
                <Card style={{ marginTop: 10, width: width - 40 }} key={index}>
                  <CardItem
                    button
                    onPress={() =>
                      this.props.navigation.navigate("CarriageList", {
                        tauId: e.Id
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
                          <Text>{getDuration(e.GioDi, e.GioDen)}</Text>
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
            alignItems: "center",
            justifyContent: "center",
            flex: 2
          }}
        >
          <Button
            style={{
              width: width - 40,
              alignItems: "center",
              justifyContent: "center"
            }}
            light
            onPress={() => this.props.navigation.navigate("CarriageList")}
          >
            <Text>Tiếp tục</Text>
          </Button>
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
