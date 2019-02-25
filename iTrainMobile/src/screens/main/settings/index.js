import React from "react";
import {
  Container,
  Header,
  Left,
  Content,
  Title,
  List,
  ListItem,
  Text
} from "native-base";
import firebase from "react-native-firebase";
class SettingsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Title>Header</Title>
          </Left>
        </Header>
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
