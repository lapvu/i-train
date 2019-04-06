import React from "react";
import { Image, AsyncStorage } from "react-native";
import firebase from "react-native-firebase";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../../styles/colors";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = () => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        AsyncStorage.setItem("user", JSON.stringify(user));
        this.props.navigation.navigate("Main");
      } else {
        this.props.navigation.navigate("Auth");
      }
    });
  };

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
