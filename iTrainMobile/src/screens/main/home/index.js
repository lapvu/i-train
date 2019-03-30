import React from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  ToastAndroid
} from "react-native";
import { Card, CheckBox, CardItem, Button } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../../styles/colors";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      oneWay: true,
      return: false
    };
  }
  render() {
    const { width, height } = Dimensions.get("window");
    const { navigation } = this.props;
    return (
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <View
          style={{
            flex: 2
          }}
        />
        <View
          style={{
            flex: 2,
            width: width - 40
          }}
        >
          <Card>
            <CardItem
              bordered
              button
              onPress={() =>
                this.props.navigation.navigate("Search", { name: "from" })
              }
            >
              <Icon name="enviromento" style={styles.iconMap} />
              <Text style={styles.text}>
                {this.props.screenProps.from.TenGa || "Ga đi"}
              </Text>
            </CardItem>
            <CardItem
              button
              onPress={() =>
                this.props.navigation.navigate("Search", { name: "to" })
              }
            >
              <Icon name="enviromento" style={styles.iconMap} />
              <Text style={styles.text}>
                {this.props.screenProps.to.TenGa || "Ga đến"}
              </Text>
            </CardItem>
            <Button
              style={styles.swapContainer}
              onPress={() => this.props.screenProps.swapStation()}
            >
              <Icon name="swap" style={styles.swapIcon} />
            </Button>
          </Card>
        </View>
        <View
          style={{
            flex: 7,
            width: width - 40
          }}
        >
          <Card style={{ marginBottom: 30 }}>
            <CardItem bordered>
              <View style={styles.checkBoxOne}>
                <CheckBox
                  style={{ left: 0 }}
                  onPress={() => this.setState({ oneWay: true, return: false })}
                  checked={this.state.oneWay}
                />
                <Text
                  style={styles.checkBoxText}
                  onPress={() => this.setState({ oneWay: true, return: false })}
                >
                  Một chiều
                </Text>
              </View>
              <View style={styles.checkBoxTwo}>
                <CheckBox
                  style={{ left: 0 }}
                  onPress={() => this.setState({ return: true, oneWay: false })}
                  checked={this.state.return}
                />
                <Text
                  style={styles.checkBoxText}
                  onPress={() => this.setState({ return: true, oneWay: false })}
                >
                  Khứ hồi
                </Text>
              </View>
            </CardItem>
            <CardItem bordered>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row"
                }}
              >
                <TouchableHighlight
                  style={{ flex: 1 }}
                  onPress={() =>
                    this.props.navigation.navigate("Calendar", {
                      type: "dateStart",
                      currentDate: this.props.screenProps.dateStart.dateString
                    })
                  }
                >
                  <View>
                    <View
                      style={
                        this.state.return
                          ? {
                              flexDirection: "row",
                              justifyContent: "flex-start"
                            }
                          : { flexDirection: "row", justifyContent: "center" }
                      }
                    >
                      <Text style={styles.text}>Ngày đi</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop: 10
                      }}
                    >
                      <View
                        style={
                          this.state.return
                            ? {
                                flex: 1,
                                alignItems: "flex-start"
                              }
                            : {
                                flex: 1,
                                alignItems: "flex-end"
                              }
                        }
                      >
                        <Text
                          style={
                            this.state.return
                              ? {
                                  fontSize: 36,
                                  fontWeight: "500",
                                  color: colors.blue
                                }
                              : {
                                  fontSize: 36,
                                  fontWeight: "500",
                                  color: colors.blue,
                                  marginRight: 5
                                }
                          }
                        >
                          {this.props.screenProps.dateStart.day ||
                            new Date().getDate()}
                        </Text>
                      </View>
                      <View
                        style={
                          this.state.return
                            ? {
                                flex: 1,
                                flexDirection: "column",
                                alignItems: "flex-start"
                              }
                            : {
                                flex: 1,
                                flexDirection: "column",
                                alignItems: "flex-start",
                                marginLeft: 5
                              }
                        }
                      >
                        <Text style={styles.text}>
                          TH{" "}
                          {this.props.screenProps.dateStart.month ||
                            new Date().getMonth()}
                        </Text>
                        <Text style={styles.text}>
                          {this.props.screenProps.dateStart.year ||
                            new Date().getFullYear()}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
                <View
                  style={
                    this.state.return
                      ? {
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "center"
                        }
                      : {
                          display: "none"
                        }
                  }
                >
                  <Icon name="calendar" style={styles.userIcon} />
                </View>
                {this.state.return && (
                  <TouchableHighlight
                    style={{ flex: 1 }}
                    onPress={() =>
                      this.props.navigation.navigate("Calendar", {
                        type: "dateEnd",
                        currentDate: this.props.screenProps.dateEnd.dateString
                      })
                    }
                  >
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end"
                        }}
                      >
                        <Text style={styles.text}>Ngày về</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          marginTop: 10
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            alignItems: "flex-end"
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 36,
                              fontWeight: "500",
                              color: colors.blue
                            }}
                          >
                            {this.props.screenProps.dateEnd.day ||
                              new Date().getDate()}
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "column",
                            alignItems: "flex-end"
                          }}
                        >
                          <Text style={styles.text}>
                            TH{" "}
                            {this.props.screenProps.dateEnd.month ||
                              new Date().getMonth()}
                          </Text>
                          <Text style={styles.text}>
                            {" "}
                            {this.props.screenProps.dateEnd.year ||
                              new Date().getFullYear()}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            </CardItem>
          </Card>

          <Button
            block
            style={{
              backgroundColor: colors.white
            }}
            onPress={() => {
              const {
                from,
                to,
                passenger,
                dateEnd,
                dateStart
              } = this.props.screenProps;
              // if (
              //   !from ||
              //   !to ||
              //   !passenger ||
              //   (!dateStart && this.state.oneWay) ||
              //   ((!dateStart || !dateEnd) && this.state.return)
              // ) {
              //   ToastAndroid.show(
              //     "Bạn cần chọn đầy đủ các trường",
              //     ToastAndroid.SHORT
              //   );
              // } else {
              this.props.navigation.navigate("TrainList", this.state);
              // }
            }}
          >
            <Text style={{ fontSize: 18, paddingTop: 20, paddingBottom: 20 }}>
              Tiếp tục
            </Text>
          </Button>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  iconMap: {
    fontSize: 20,
    color: colors.blur,
    width: 25
  },
  text: {
    fontSize: 18
  },
  swapContainer: {
    position: "absolute",
    top: 30,
    right: 10,
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: colors.blur,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white
  },
  swapIcon: {
    fontSize: 20,
    color: "rgba(0,0,0,0.3)",
    transform: [{ rotate: "90deg" }]
  },
  userIcon: {
    fontSize: 20,
    color: colors.blur
  },
  checkBoxOne: {
    flex: 1,
    flexDirection: "row",
    borderRightColor: colors.blur,
    borderRightWidth: 0.3,
    alignItems: "center"
  },
  checkBoxTwo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  checkBoxText: {
    marginLeft: 10,
    fontSize: 18
  }
});
export default HomeScreen;
