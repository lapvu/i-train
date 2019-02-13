import React from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";
import colors from "../../styles/colors";
import { Dimensions, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
class LoginScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  render() {
    const { width } = Dimensions.get("window");
    return (
      <LinearGradient
        colors={colors.gradient}
        style={{
          alignItems: "center",
          flex: 1
        }}
      >
        <Content
          contentContainerStyle={{
            justifyContent: "center",
            flex: 1
          }}
        >
          <Form
            style={{
              width: width - 50
            }}
          >
            <Item rounded style={styles.item}>
              <Input
                placeholder="số điện thoại"
                style={styles.input}
                placeholderTextColor={colors.holderColor}
              />
            </Item>
            <Item rounded style={styles.item}>
              <Input
                placeholder="mật khẩu"
                secureTextEntry={true}
                style={styles.input}
                placeholderTextColor={colors.holderColor}
              />
            </Item>
            <Button rounded bordered light block>
              <Text>ĐĂNG NHẬP</Text>
            </Button>
          </Form>
        </Content>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    color: colors.white,
    backgroundColor: colors.inputColor,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 35
  },
  item: {
    marginBottom: 20,
    borderColor: colors.transparent
  }
});
export default LoginScreen;
