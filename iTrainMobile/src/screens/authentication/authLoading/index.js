import React from "react";
import { Image } from "react-native";
import firebase from "react-native-firebase";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../../styles/colors";
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
      <LinearGradient
        colors={colors.gradient}
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      >
        <Image
          source={require("../../../assets/imgs/train.png")}
          style={{
            width: 80,
            height: 80
          }}
        />
      </LinearGradient>
    );
  }
}
