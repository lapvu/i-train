import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Item,
  Form,
  Input,
  Button,
  Text
} from "native-base";
import colors from "../../styles/colors";
class RegisterScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.blue,
      elevation: 0
    },
    headerTintColor: "#fff"
  };
  render() {
    const { width } = Dimensions.get("window");
    return (
      <Container
        style={{
          backgroundColor: colors.blue,
          alignItems: "center"
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
            <Item regular style={styles.item}>
              <Input
                placeholder="số điện thoại"
                style={styles.input}
                placeholderTextColor={colors.holderColor}
              />
            </Item>
            <Item regular style={styles.item}>
              <Input
                placeholder="họ tên"
                style={styles.input}
                placeholderTextColor={colors.holderColor}
              />
            </Item>
            <Item regular style={styles.item}>
              <Input
                placeholder="mật khẩu"
                secureTextEntry={true}
                style={styles.input}
                placeholderTextColor={colors.holderColor}
              />
            </Item>
            <Item regular style={styles.item}>
              <Input
                placeholder="xác nhận mật khẩu"
                secureTextEntry={true}
                style={styles.input}
                placeholderTextColor={colors.holderColor}
              />
            </Item>
            <Button bordered light block>
              <Text>ĐĂNG KÝ</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    color: colors.white,
    backgroundColor: "rgba(255,255,255,0.2)"
  },
  item: {
    marginBottom: 15,
    borderColor: colors.transparent
  }
});
export default RegisterScreen;
