import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Spinner } from "native-base";
import colors from "../../styles/colors";
const Loader = () => {
  const { height, width } = Dimensions.get("window");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View
        style={{
          marginTop: 20,
          backgroundColor: colors.white,
          alignItems: "center",
          justifyContent: "center",
          width: width - 50,
          height: width - 50
        }}
      >
        <Spinner />
        <Text>Đang tải ...</Text>
      </View>
    </View>
  );
};
export default Loader;
