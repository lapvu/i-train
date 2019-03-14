import React from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { Card, CardItem, Body, Button } from "native-base";
import colors from "../../../../styles/colors";
import Icon from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  }
});
export default class TrainListScreen extends React.Component {
  static navigationOptions = {
    title: "Danh sách chiều đi",
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
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            width: width,
            backgroundColor: colors.white,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../../../../assets/imgs/trainblack.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ fontSize: 18, marginLeft: 10, fontWeight: "bold" }}>
            {this.props.screenProps.from}
          </Text>
          <Icon name="arrowright" style={{ marginHorizontal: 5 }} />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {this.props.screenProps.to}
          </Text>
        </View>
        <View style={{ flex: 10, width: width - 40 }}>
          <Card style={{marginTop:20}}>
            <CardItem>
              <Body>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      alignItems: "center",
                      flex: 1,
                      flexDirection: "row"
                    }}
                  >
                    <Icon name="clockcircleo" style={{ marginRight: 8 }} />
                    <Text>3:00</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      source={require("../../../../assets/imgs/trains.png")}
                      style={{ height: 30, width: 30, marginRight: 8 }}
                    />
                    <Text>aaaa</Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: 10
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      flex: 1,
                      flexDirection: "row"
                    }}
                  >
                    <Icon name="clockcircleo" style={{ marginRight: 8 }} />
                    <Text>3:00</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "flex-end"
                    }}
                  >
                    <Text>3:00</Text>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
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
          >
            <Text>Tiếp tục</Text>
          </Button>
        </View>
      </LinearGradient>
    );
  }
}
