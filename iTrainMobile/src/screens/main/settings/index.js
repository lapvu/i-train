import React from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Text
} from "native-base";
import colors from "../../../styles/colors"
import firebase from "react-native-firebase";
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Danh sách chiều đi",
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={() => firebase.auth().signOut()}>
              <Text>Logout</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>hihihi</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
export default SettingsScreen;
