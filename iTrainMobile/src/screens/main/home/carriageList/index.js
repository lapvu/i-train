import React from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import colors from "../../../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
import { Card, CardItem, Right, Body } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import Loader from "../../../../components/loader";
import { getDuration } from "../../../../helpers";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#dddddd"
  },
  content: {
    flex: 1,
    flexDirection: "row"
  },
  img1: {
    width: 25,
    height: 25
  },
  img2: {
    height: 30,
    width: 30,
    marginRight: 8
  },
  text1: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold"
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold"
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
  }
});

const mockupCoach = [
  {
    name: "Toa số 1",
    type: "Giường nằm điều hòa 4 chỗ"
  },
  {
    name: "Toa số 2",
    type: "Giường nằm điều hòa 4 chỗ"
  },
  {
    name: "Toa số 3",
    type: "Giường nằm điều hòa 4 chỗ"
  },
  {
    name: "Toa số 4",
    type: "Giường nằm điều hòa 4 chỗ"
  },
  {
    name: "Toa số 5",
    type: "Giường nằm điều hòa 4 chỗ"
  },
  {
    name: "Toa số 6",
    type: "Giường nằm điều hòa 4 chỗ"
  },
  {
    name: "Toa số 7",
    type: "Giường nằm điều hòa 4 chỗ"
  },
  {
    name: "Toa số 8",
    type: "Giường nằm điều hòa 4 chỗ"
  }
];
export default class CarriageListScreen extends React.Component {
  static navigationOptions = {
    title: "Chọn toa",
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  constructor(props) {
    super(props);
    this.state = {
      initValue: null,
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    const id = this.props.navigation.getParam("tauId", "");
    const url = `https://k.vnticketonline.vn/api/GTGV/LoadOneTau?tauId=${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          initValue: res,
          isLoading: false
        });
      })
      .catch(e => {
        this.setState({
          isLoading: false
        });
        console.log(e);
      });
  }
  render() {
    const { width, height } = Dimensions.get("window");
    const { isLoading, initValue } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, width: width }}>
          {isLoading && <Loader />}
          {initValue && (
            <Card>
              <CardItem>
                <Body>
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.content1}>
                      <Icon name="clockcircleo" style={{ marginRight: 10 }} />
                      <Text>{initValue.GioDi}</Text>
                    </View>
                    <View style={styles.content2}>
                      <Image
                        source={require("../../../../assets/imgs/trains.png")}
                        style={styles.img2}
                      />
                      <Text>{initValue.MacTau}</Text>
                    </View>
                  </View>
                  <View style={styles.content3}>
                    <View style={styles.content1}>
                      <Icon name="clockcircleo" style={{ marginRight: 10 }} />
                      <Text>{initValue.GioDen}</Text>
                    </View>
                    <View style={styles.content4}>
                      <Text>
                        {getDuration(initValue.GioDi, initValue.GioDen)}
                      </Text>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
          )}
        </View>
        <View style={{ flex: 6, width: width - 40 }}>
          <Card>
            {mockupCoach.map((e, i) => {
              return (
                <CardItem
                  bordered
                  button
                  onPress={() => this.props.navigation.navigate("SeatList")}
                  key={i}
                >
                  <Image
                    source={require("../../../../assets/imgs/door.png")}
                    style={{ height: 15, width: 15, marginRight: 5 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>{e.name}</Text>
                  <Text style={{ color: "gray" }}> ({e.type})</Text>
                </CardItem>
              );
            })}
          </Card>
        </View>
      </View>
    );
  }
}
