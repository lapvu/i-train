import React from "react";
import { View, Dimensions, ScrollView, Text } from "react-native";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "native-base";
import { priceDisplay } from "../../helpers";
import Modal from "react-native-modal";
export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }
  toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  render() {
    const { width } = Dimensions.get("window");
    const { items } = this.props;
    return (
      <React.Fragment>
        <Modal isVisible={this.state.isModalVisible}>
          <View
            style={{
              width: width - 40,
              height: 400,
              backgroundColor: colors.white
            }}
          >
            <View style={{ flex: 5, padding: 10 }}>
              <ScrollView>
                {items.shoppingCart.go.length != 0 && (
                  <React.Fragment>
                    <View
                      style={{
                        width: "100%",
                        backgroundColor: colors.blue,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff"
                        }}
                      >
                        CHIỀU ĐI
                      </Text>
                    </View>
                    {items.shoppingCart.go.map((e, i) => {
                      return (
                        <View
                          style={{
                            flexDirection: "row",
                            padding: 10,
                            backgroundColor: "yellow",
                            borderBottomWidth: 0.5,
                            borderBottomColor: colors.black
                          }}
                          key={i}
                        >
                          <View
                            style={{
                              flex: 5
                            }}
                          >
                            <Text>
                              Tên tàu : {e.trainName} - Toa : {e.ToaSo} - Chỗ
                              số: {e.ChoSo}
                            </Text>
                            <Text>Giá : {priceDisplay(e.Gia)}</Text>
                          </View>
                          <View
                            style={{
                              flex: 1
                            }}
                          >
                            <Button
                              small
                              iconRight
                              danger
                              style={{ padding: 3 }}
                            >
                              <Text
                                style={{
                                  color: colors.white,
                                  marginHorizontal: 3
                                }}
                              >
                                22
                              </Text>
                              <Icon
                                name="delete"
                                style={{ color: colors.white, fontSize: 18 }}
                              />
                            </Button>
                          </View>
                        </View>
                      );
                    })}
                  </React.Fragment>
                )}
                {items.shoppingCart.back.length != 0 && (
                  <React.Fragment>
                    <View
                      style={{
                        width: "100%",
                        backgroundColor: colors.blue,
                        paddingHorizontal: 10,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff"
                        }}
                      >
                        CHIỀU VỀ
                      </Text>
                    </View>
                    {items.shoppingCart.back.map((e, i) => {
                      return (
                        <View
                          style={{
                            flexDirection: "row",
                            padding: 10,
                            backgroundColor: "yellow",
                            borderBottomWidth: 0.5,
                            borderBottomColor: colors.black
                          }}
                          key={i}
                        >
                          <View
                            style={{
                              flex: 4
                            }}
                          >
                            <Text>
                              {e.trainName} - Toa : {e.ToaSo} - Chỗ số:{" "}
                              {e.ChoSo}
                            </Text>
                            <Text>Giá : {priceDisplay(e.Gia)}</Text>
                          </View>
                          <View
                            style={{
                              flex: 1
                            }}
                          >
                            <Button
                              small
                              iconRight
                              danger
                              style={{ padding: 3 }}
                            >
                              <Text
                                style={{
                                  color: colors.white,
                                  marginHorizontal: 3
                                }}
                              >
                                22
                              </Text>
                              <Icon
                                name="delete"
                                style={{ color: colors.white, fontSize: 18 }}
                              />
                            </Button>
                          </View>
                        </View>
                      );
                    })}
                  </React.Fragment>
                )}
              </ScrollView>
            </View>
            <View
              style={{
                flex: 1
              }}
            >
              <Text
                onPress={this.toggleModal}
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  padding: 6,
                  backgroundColor: colors.green
                }}
              >
                Tiếp tục
              </Text>
              <Text
                onPress={this.toggleModal}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  padding: 6,
                  backgroundColor: colors.green
                }}
              >
                Đặt vé
              </Text>
            </View>
          </View>
        </Modal>
        <View
          style={{
            position: "absolute",
            bottom: 20,
            right: 20
          }}
        >
          <View
            style={{
              zIndex: 2
            }}
          >
            <Button
              style={{
                height: 55,
                width: 55,
                borderRadius: 55,
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={this.toggleModal}
            >
              <Icon
                name="shopping-cart"
                style={{
                  color: colors.white,
                  fontSize: 24
                }}
              />
            </Button>
          </View>
          <View
            style={{
              position: "absolute",
              top: -5,
              zIndex: 10,
              left: -5
            }}
          >
            <Text
              onPress={this.toggleModal}
              style={{
                height: 24,
                width: 24,
                borderRadius: 20,
                color: colors.white,
                backgroundColor: "#db4c20",
                textAlignVertical: "center",
                textAlign: "center"
              }}
            >
              {items.shoppingCart.go.length + items.shoppingCart.back.length ||
                0}
            </Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
