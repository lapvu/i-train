import React from "react";
import { Container, Content, Button, Spinner, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors";
class WellcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { width } = Dimensions.get("window");
    return (
      <Container
        style={{
          alignItems: "center",
          backgroundColor: colors.blue,
          flex: 1
        }}
      >
        <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
          <Text
            style={{
              color: colors.white
            }}
          >
            hello
          </Text>
        </Content>
        <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
          <Button
            block
            style={{
              width: width - 100,
              marginBottom: 10
            }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text>Login</Text>
          </Button>
          <Button
            block
            style={{
              width: width - 100,
              marginBottom: 10
            }}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text>Register</Text>
          </Button>
          <Button
            block
            style={{
              width: width - 100
            }}
          >
            <Spinner />
          </Button>
        </Content>
      </Container>
    );
  }
}

export default WellcomeScreen;
