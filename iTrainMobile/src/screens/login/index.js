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
class LoginScreen extends React.Component {
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
                placeholder="Username"
                style={styles.input}
                placeholderTextColor={colors.holderColor}
              />
            </Item>
            <Item regular style={styles.item}>
              <Input
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
                placeholderTextColor={colors.holderColor}
              />
            </Item>
            <Button bordered light block>
              <Text>Login</Text>
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
export default LoginScreen;
