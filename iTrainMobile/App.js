import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/screens/login";
import RegisterScreen from "./src/screens/register";
import WellcomeScreen from "./src/screens/wellcome";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "react-native";

const TabNavigator = createStackNavigator({
  Wellcome: WellcomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(TabNavigator);
