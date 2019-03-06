import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
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
    const state = navigation.getParam("state", "");
    const name = navigation.getParam("name", "");
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
                {state === "from" ? name : "Ga đi"}
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
                {state === "to" ? name : "Ga đến"}
              </Text>
            </CardItem>
            <View style={styles.swapContainer}>
              <Icon name="swap" style={styles.swapIcon} />
            </View>
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
                <View
                  style={{
                    flex: 1
                  }}
                >
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
                    <Text
                      style={styles.text}
                      onPress={() => this.props.navigation.navigate("Calendar")}
                    >
                      Ngày đi
                    </Text>
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
                        28
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
                      <Text style={styles.text}>TH 2</Text>
                      <Text style={styles.text}>2019</Text>
                    </View>
                  </View>
                </View>
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
                  <View
                    style={{
                      flex: 1
                    }}
                  >
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
                          28
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "column",
                          alignItems: "flex-end"
                        }}
                      >
                        <Text style={styles.text}>TH 2</Text>
                        <Text style={styles.text}>2019</Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            </CardItem>
          </Card>
          <View>
            <Card style={{ marginBottom: 30 }}>
              <CardItem
                button
                onPress={() => this.props.navigation.navigate("Passenger")}
              >
                <Icon name="user" style={styles.userIcon} />
                <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
                  Hành khách
                </Text>
              </CardItem>
            </Card>
          </View>
          <Button
            block
            style={{
              backgroundColor: colors.white
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
