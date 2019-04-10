import React from "react";
import { Text, View, Image, Button, Dimensions } from "react-native";

import colors from "../../../../styles/colors";

export default class orderDetailScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const data = this.props.navigation.state.params;
    const { width } = Dimensions.get("window");
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 20,
            color: colors.black
          }}
        >
          ĐẶT VÉ THÀNH CÔNG !
        </Text>
        <Image
          source={require("../../../../assets/imgs/checked.png")}
          style={{ height: 150, width: 150 }}
        />
        <Text style={{ marginTop: 20, marginBottom: 20 }}>
          Mã đơn hàng của bạn là :<Text style={{color:colors.black}}> {data.code}</Text>
        </Text>
        <Button
          title="TIẾP TỤC"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
