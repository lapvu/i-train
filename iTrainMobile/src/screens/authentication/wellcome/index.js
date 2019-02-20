import React from "react";
import { Content, Button, Text, Icon } from "native-base";
import { Dimensions, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../../styles/colors";
import SvgUri from "react-native-svg-uri";
import { googleLogin,facebookLogin } from "../../../utils";
class WellcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { width, height } = Dimensions.get("window");
    return (
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <SvgUri
            width="60"
            height="60"
            source={require("../../../assets/imgs/train.svg")}
          />
          <Text
            style={{
              color: colors.white,
              fontWeight: "500",
              fontSize: 23,
              textAlign: "center",
              marginTop: 5
            }}
          >
            I-TRAIN
          </Text>
        </Content>
        <Content contentContainerStyle={styles.content}>
          <Button
            rounded
            block
            style={{
              width: width - 100,
              marginBottom: 10,
              backgroundColor: colors.white
            }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ color: colors.black }}>ĐĂNG NHẬP</Text>
          </Button>
          <Button
            rounded
            block
            style={{
              width: width - 100,
              marginBottom: 10,
              backgroundColor: colors.green
            }}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={{ color: colors.black }}>ĐĂNG KÝ</Text>
          </Button>
          <View
            style={{
              width: width - 100,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Button
              rounded
              block
              style={{
                flex: 1,
                width: "45%"
              }}
              onPress={() => facebookLogin()}
            >
              <Icon type="FontAwesome" name="facebook-f" />
            </Button>
            <Button
              rounded
              block
              style={{
                flex: 1,
                width: "45%",
                backgroundColor: "#DC4E42"
              }}
              onPress={() => googleLogin()}
            >
              <Icon type="FontAwesome" name="google" />
            </Button>
          </View>
        </Content>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  content: { justifyContent: "center", alignItems: "center", flex: 1 }
});
export default WellcomeScreen;