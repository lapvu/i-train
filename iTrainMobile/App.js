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

const AppStack = createStackNavigator({
  Main: MainScreen
});
const AuthStack = createStackNavigator({
  Wellcome: WellcomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
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
