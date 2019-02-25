import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./home";
import SettingsScreen from "./settings";
import HistoryScreen from "./history";
import { Icon } from "native-base";
import React from "react";
const Main = createBottomTabNavigator(
  {
    Home: HomeScreen,
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
