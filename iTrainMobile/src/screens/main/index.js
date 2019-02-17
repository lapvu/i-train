import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./home";
import SettingsScreen from "./settings";
const Main = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
});
export default createAppContainer(Main);
