import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "./home";
import PassengerScreen from "./other/passenger";
import SearchStationScreen from "./other/search";
import SettingsScreen from "./settings";
import HistoryScreen from "./history";
import { Icon } from "native-base";
import React from "react";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Search: SearchStationScreen,
  Passenger: PassengerScreen
});

const Main = createBottomTabNavigator(
  {
    Home: HomeStack,
    History: HistoryScreen,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "search";
        } else if (routeName === "Settings") {
          iconName = "cog";
        } else if (routeName === "History") {
          iconName = "ticket";
        }
        return (
          <Icon
            type="FontAwesome"
            name={iconName}
            style={{ color: tintColor, fontSize: 20 }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#1B7DF0",
      inactiveTintColor: "#c6c6c6",
      style: {
        height: 50
      }
    }
  }
);
export default createAppContainer(Main);
