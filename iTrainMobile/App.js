import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import LoginScreen from "./src/screens/authentication/login";
import RegisterScreen from "./src/screens/authentication/register";
import WellcomeScreen from "./src/screens/authentication/wellcome";
import AuthLoadingScreen from "./src/screens/authentication/authLoading";
import MainScreen from "./src/screens/main";
import React from "react";
const AppStack = createStackNavigator(
  {
    Main: MainScreen
  },
  {
    header: null,
    headerMode: "none"
  }
);
const AuthStack = createStackNavigator({
  Wellcome: WellcomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

export default () => <AppContainer />;
