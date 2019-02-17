import React from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";
import firebase from "react-native-firebase";
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button onPress={() => firebase.auth().signOut()}>
          <Text>Logout</Text>
        </Button>
      </View>
    );
  }
}
export default SettingsScreen;
