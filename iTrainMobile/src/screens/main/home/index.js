import React from "react";
import { Text, View, Dimensions } from "react-native";
import { Icon, List, ListItem } from "native-base";
import colors from "../../../styles/colors";
class HomeScreen extends React.Component {
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
            flex: 1,
            width: width - 30,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              color: colors.white
            }}
          >
            ĐẶT VÉ TÀU
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: width - 30,
            backgroundColor: colors.white,
            paddingHorizontal: 25,
            paddingVertical: 5,
            marginBottom: 5,
            borderRadius: 5
          }}
        >
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
            <Icon
              type="FontAwesome"
              name="circle"
              style={{
                color: "gray",
                fontSize: 18,
                marginRight: 5
              }}
            />
            <Text style={{ color: "gray", fontSize: 20 }}>Ga khởi hành</Text>
          </View>
          <View  style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
          <Icon
              type="FontAwesome"
              name="ellipsis-v"
              style={{
                color: "gray",
                fontSize: 25,
                marginRight: 5
              }}
            />
          </View>
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
            <Icon
              type="FontAwesome"
              name="map-marker"
              style={{
                color: "gray",
                fontSize: 20,
                marginLeft: 2,
                marginRight: 5
              }}
            />
            <Text style={{ color: "gray", fontSize: 20 }}>Ga đến</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            width: width - 30,
            backgroundColor: colors.white,
            marginBottom: 5,
            borderRadius: 5
          }}
        >
          <Text>Ga khởi hành</Text>
          <Text>Ga đến</Text>
        </View>
        <View
          style={{
            flex: 1,
            width: width - 30,
            backgroundColor: colors.white,
            marginBottom: 5,
            borderRadius: 5,
            height: "auto"
          }}
        >
          <View
            style={{
              flex: 1,
              borderBottomColor: "gray",
              borderBottomWidth: 0.5
            }}
          />
          <View style={{ flex: 1 }} />
        </View>
        <View
          style={{
            flex: 2,
            width: width - 30
          }}
        >
          <Text>Ga khởi hành</Text>
          <Text>Ga đến</Text>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
