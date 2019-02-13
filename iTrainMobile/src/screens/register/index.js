import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Content, Item, Form, Input, Button, Text, Icon } from "native-base";
import colors from "../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
class RegisterScreen extends React.Component {
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
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <Form
            style={{
              width: width - 50
            }}
          >
            <Item rounded success style={styles.item}>
              <Input
                placeholder="số điện thoại"
                style={styles.input}
                placeholderTextColor={colors.holderColor}
              />
            </Item>
            <Item rounded style={styles.item}>
              <Input
                placeholder="họ tên"
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
            <Item rounded style={styles.item}>
              <Input
                placeholder="xác nhận mật khẩu"
                secureTextEntry={true}
                style={styles.input}
                placeholderTextColor={colors.holderColor}
              />
            </Item>
            <Button rounded bordered light block>
              <Text>ĐĂNG KÝ</Text>
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
  },
  container: {
    alignItems: "center",
    flex: 1
  },
  content: {
    justifyContent: "center",
    flex: 1
  }
});
export default RegisterScreen;
