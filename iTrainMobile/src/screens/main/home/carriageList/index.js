import React from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import colors from "../../../../styles/colors";
import { Card, CardItem, Body } from "native-base";
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
      data: null
    };
  }

  componentDidMount() {
    const data = this.props.navigation.state.params;
    this.setState({
      data: data
    });
  }
  render() {
    const { width, height } = Dimensions.get("window");
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, width: width }}>
          {data && (
            <Card>
              <CardItem>
                <Body>
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.content1}>
                      <Icon name="clockcircleo" style={{ marginRight: 10 }} />
                      <Text>{data.GioDi}</Text>
                    </View>
                    <View style={styles.content2}>
                      <Image
                        source={require("../../../../assets/imgs/trains.png")}
                        style={styles.img2}
                      />
                      <Text>{data.MacTau}</Text>
                    </View>
                  </View>
                  <View style={styles.content3}>
                    <View style={styles.content1}>
                      <Icon name="clockcircleo" style={{ marginRight: 10 }} />
                      <Text>{data.GioDen}</Text>
                    </View>
                    <View style={styles.content4}>
                      <Text>
                        {getDuration(
                          data.GioDi,
                          data.GioDen,
                          data.NgayDi,
                          data.NgayDen
                        )}
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
            {data &&
              data.ToaXes.map((e, i) => {
                return (
                  <CardItem
                    bordered
                    button
                    onPress={() =>
                      this.props.navigation.navigate("SeatList", e)
                    }
                    key={i}
                  >
                    <Image
                      source={require("../../../../assets/imgs/door.png")}
                      style={{ height: 15, width: 15, marginRight: 5 }}
                    />
                    <Text style={{ fontWeight: "bold" }}>Toa Số {e.ToaSo}</Text>
                    <Text style={{ color: "gray" }}> ({e.ToaXeDienGiai})</Text>
                  </CardItem>
                );
              })}
          </Card>
        </View>
      </View>
    );
  }
}