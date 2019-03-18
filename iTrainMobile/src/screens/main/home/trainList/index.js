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
  },
  topContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center"
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

const mockupTrain = [
  {
    name: "SP2",
    timeGo: "9:30 pm",
    timeArrival: "5:30 am",
    totalTime: "7h13'",
    selected: false
  },
  {
    name: "SP3",
    timeGo: "9:30 pm",
    timeArrival: "5:30 am",
    totalTime: "7h13'",
    selected: false
  },
  {
    name: "SP4",
    timeGo: "9:30 pm",
    timeArrival: "5:30 am",
    totalTime: "7h13'",
    selected: false
  }
];

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
      initValue: mockupTrain
    };
  }
  setSelect = index => {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.initValue.forEach((e, i) => {
      if (i === index) {
        e.selected = !e.selected;
      } else {
        e.selected = false;
      }
    });
    this.setState({ stateCopy });
  };
  render() {
    const { width, height } = Dimensions.get("window");
    return (
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require("../../../../assets/imgs/trainblack.png")}
            style={styles.img1}
          />
          <Text style={styles.text1}>{this.props.screenProps.from}</Text>
          <Icon name="arrowright" style={{ marginHorizontal: 5 }} />
          <Text style={styles.text2}>{this.props.screenProps.to}</Text>
        </View>
        <View style={{ flex: 10, width: width - 40 }}>
          {this.state.initValue.map((e, index) => {
            return (
              <Card style={{ marginTop: 10 }} key={index}>
                <CardItem
                  button
                  onPress={() => this.setSelect(index)}
                  style={
                    e.selected
                      ? {
                          backgroundColor: "pink",
                          borderColor: "red",
                          borderWidth: 1
                        }
                      : {
                          borderColor: "transparent",
                          borderWidth: 1
                        }
                  }
                >
                  <Body>
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.content1}>
                        <Icon name="clockcircleo" style={{ marginRight: 8 }} />
                        <Text>{e.timeGo}</Text>
                      </View>
                      <View style={styles.content2}>
                        <Image
                          source={require("../../../../assets/imgs/trains.png")}
                          style={styles.img2}
                        />
                        <Text>{e.name}</Text>
                      </View>
                    </View>
                    <View style={styles.content3}>
                      <View style={styles.content1}>
                        <Icon name="clockcircleo" style={{ marginRight: 8 }} />
                        <Text>{e.timeArrival}</Text>
                      </View>
                      <View style={styles.content4}>
                        <Text>{e.totalTime}</Text>
                      </View>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            );
          })}
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
            onPress={() => this.props.navigation.navigate("CoachList")}
          >
            <Text>Tiếp tục</Text>
          </Button>
        </View>
      </LinearGradient>
    );
  }
}
