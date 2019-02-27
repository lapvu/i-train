import React from "react";
import { Text, View, Dimensions } from "react-native";
import { Card, CheckBox, CardItem, Button } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../../../styles/colors";
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { width, height } = Dimensions.get("window");
    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
          backgroundColor: colors.blue
        }}
      >
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
              onPress={() => this.props.navigation.navigate("Search")}
            >
              <Icon
                name="enviromento"
                style={{
                  fontSize: 20,
                  color: "rgba(0,0,0,0.3)",
                  width: 25
                }}
              />
              <Text
                style={{
                  fontSize: 18
                }}
              >
                Ga đi
              </Text>
            </CardItem>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate("Search")}
            >
              <Icon
                name="enviromento"
                style={{
                  fontSize: 20,
                  color: "rgba(0,0,0,0.3)",
                  width: 25
                }}
              />
              <Text
                style={{
                  fontSize: 18
                }}
              >
                Ga đến
              </Text>
            </CardItem>
            <View
              style={{
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
              }}
            >
              <Icon
                name="swap"
                style={{
                  fontSize: 20,
                  color: "rgba(0,0,0,0.3)",
                  transform: [{ rotate: "90deg" }]
                }}
              />
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
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  borderRightWidth: colors.blur,
                  borderRightWidth: 0.5,
                  alignItems: "center"
                }}
              >
                <CheckBox style={{ left: 0 }} />
                <Text style={{ marginLeft: 15, fontSize: 18 }}>Một chiều</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}
              >
                <CheckBox style={{ left: 0 }} />
                <Text style={{ marginLeft: 15, fontSize: 18 }}>Khứ hồi</Text>
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
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start"
                    }}
                  >
                    <Text style={{ fontSize: 18 }}>Ngày đi</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      marginTop: 10
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-start"
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 35,
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
                        alignItems: "flex-start"
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>TH 2</Text>
                      <Text style={{ fontSize: 18 }}>2019</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Icon
                    name="calendar"
                    style={{
                      fontSize: 20,
                      color: "rgba(0,0,0,0.3)"
                    }}
                  />
                </View>
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
                    <Text style={{ fontSize: 18 }}>Ngày về</Text>
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
                          fontSize: 35,
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
                      <Text style={{ fontSize: 18 }}>TH 2</Text>
                      <Text style={{ fontSize: 18 }}>2019</Text>
                    </View>
                  </View>
                </View>
              </View>
            </CardItem>
          </Card>
          <View>
            <Card style={{ marginBottom: 30 }}>
              <CardItem
                button
                onPress={() => this.props.navigation.navigate("Passenger")}
              >
                <Icon
                  name="user"
                  style={{
                    fontSize: 20,
                    color: "rgba(0,0,0,0.3)"
                  }}
                />
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
      </View>
    );
  }
}
export default HomeScreen;
