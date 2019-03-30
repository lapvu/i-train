import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "./home";
import SearchStationScreen from "./other/search";
import SettingsScreen from "./settings";
import HistoryScreen from "./history";
import CalendarScreen from "./other/calendar";
import TrainListScreen from "./home/trainList";
import CarriageListScreen from "./home/carriageList";
import SeatListScreen from "./home/seatList";
import { Icon } from "native-base";
import React from "react";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Search: SearchStationScreen,
  Calendar: CalendarScreen,
  TrainList: TrainListScreen,
  CarriageList: CarriageListScreen,
  SeatList: SeatListScreen
});
HomeStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (
    routeName === "Search" ||
    routeName === "Calendar" ||
    routeName === "CarriageList" ||
    routeName === "TrainList" ||
    routeName === "SeatList"
  ) {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};
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
const MainContaier = createAppContainer(Main);

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      dateStart: {
        dateString: new Date().toISOString().slice(0, 10)
      },
      dateEnd: {
        dateString: new Date().toISOString().slice(0, 10)
      }
    };
  }

  setStation = (station, type) => {
    if (type === "from") {
      this.setState({ from: station });
    } else {
      this.setState({ to: station });
    }
  };
  swapStation = () => {
    this.setState({
      from: this.state.to,
      to: this.state.from
    });
  };
  setDate = (date, type) => {
    if (type === "dateStart") {
      this.setState({
        dateStart: date
      });
    } else {
      this.setState({
        dateEnd: date
      });
    }
  };

  render() {
    return (
      <MainContaier
        screenProps={{
          ...this.state,
          setStation: this.setStation,
          swapStation: this.swapStation,
          setDate: this.setDate
        }}
      />
    );
  }
}
