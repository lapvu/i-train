import React from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import colors from "../../../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
import { Card, CardItem, Right, Body } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
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
export default class CoachListScreen extends React.Component {
  static navigationOptions = {
    title: "Chọn toa",
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  render() {
    const { width, height } = Dimensions.get("window");
    return (
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <View style={{ flex: 1, width: width - 40 }}>
          <Card>
            <CardItem>
              <Body>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.content1}>
                    <Icon name="clockcircleo" style={{ marginRight: 10 }} />
                    <Text>3:00</Text>
                  </View>
                  <View style={styles.content2}>
                    <Image
                      source={require("../../../../assets/imgs/trains.png")}
                      style={styles.img2}
                    />
                    <Text>aaaa</Text>
                  </View>
                </View>
                <View style={styles.content3}>
                  <View style={styles.content1}>
                    <Icon name="clockcircleo" style={{ marginRight: 10 }} />
                    <Text>3:00</Text>
                  </View>
                  <View style={styles.content4}>
                    <Text>3:00</Text>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>
        <View style={{ flex: 6, width: width - 40 }}>
          <Card>
            <CardItem
              bordered
              button
              onPress={() => this.props.navigation.navigate("SeatList")}
            >
              <Image
                source={require("../../../../assets/imgs/door.png")}
                style={{ height: 15, width: 15, marginRight: 5 }}
              />
              <Text style={{ fontWeight: "bold" }}>Toa số 1 </Text>
              <Text style={{ color: "gray" }}>(Giường nằm điều hòa)</Text>
            </CardItem>
            <CardItem
              bordered
              button
              onPress={() => this.props.navigation.navigate("SeatList")}
            >
              <Image
                source={require("../../../../assets/imgs/door.png")}
                style={{ height: 15, width: 15, marginRight: 5 }}
              />
              <Text style={{ fontWeight: "bold" }}>Toa số 1 </Text>
              <Text style={{ color: "gray" }}>(Giường nằm điều hòa)</Text>
            </CardItem>
          </Card>
        </View>
      </LinearGradient>
    );
  }
}
