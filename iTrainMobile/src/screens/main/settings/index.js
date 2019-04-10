import React from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Header,
  Body,
  Title
} from "native-base";
import { Image, AsyncStorage } from "react-native";
import colors from "../../../styles/colors";
import firebase from "react-native-firebase";
import { Dimensions } from "react-native";
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Danh sách chiều đi",
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  constructor(props) {
    super(props);
    this.state = {
      fullName: ""
    };
  }
  load = async () => {
    const user = await AsyncStorage.getItem("user");
    const data = await firebase
      .firestore()
      .collection("users")
      .doc(JSON.parse(user).uid)
      .get();
    this.setState({
      fullName: data.data().fullName
    });
  };
  componentDidMount() {
    this.load();
  }
  render() {
    const { width } = Dimensions.get("window");
    return (
      <Container>
        <Header style={{ backgroundColor: colors.gradient[0] }}>
          <Body
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Title>Cài đặt</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/imgs/person-icon.png")}
            style={{ marginVertical: 20, height: 120, width: 120 }}
          />
          <Text>Xin chào {this.state.fullName}</Text>
          <List>
            <ListItem
              onPress={() => firebase.auth().signOut()}
              style={{ width: width - 40, marginLeft: 0 }}
            >
              <Text>Đăng xuất</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
export default SettingsScreen;
