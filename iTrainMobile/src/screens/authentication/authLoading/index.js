import React from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import firebase from "react-native-firebase";
export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = () => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("Main");
      } else {
        this.props.navigation.navigate("Auth");
      }
    });
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
