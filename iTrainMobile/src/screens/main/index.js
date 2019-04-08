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
import { AsyncStorage } from "react-native";
import React from "react";
import firebase from "react-native-firebase";
import confirmOrderScreen from "./home/confirmOrder";
import orderDetailScreen from "./home/orderDetail";
import GuideScreen from "./guide";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Search: SearchStationScreen,
  Calendar: CalendarScreen,
  TrainList: TrainListScreen,
  CarriageList: CarriageListScreen,
  SeatList: SeatListScreen,
  ConfirmOrder: confirmOrderScreen,
  OrderDetail: orderDetailScreen
});
HomeStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (
    routeName === "Search" ||
    routeName === "Calendar" ||
    routeName === "CarriageList" ||
    routeName === "TrainList" ||
    routeName === "SeatList" ||
    routeName === "ConfirmOrder" ||
    routeName === "OrderDetail"
  ) {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};
const Main = createBottomTabNavigator(
  {
    Home: HomeStack,
    History: HistoryScreen,
    Guide: GuideScreen,
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
        } else if (routeName === "Guide") {
          iconName = "bookmark-o";
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
      },
      shoppingCart: {
        go: [],
        back: []
      },
      user: null
    };
    this.ref = firebase.firestore().collection("shoppingCarts");
  }
  addToCart = async (item, type) => {
    let copyState = Object.assign({}, this.state.shoppingCart);
    if (type) {
      copyState.go.push(item);
      this.setState({
        shoppingCart: copyState
      });
    } else {
      copyState.back.push(item);
      this.setState({
        shoppingCart: copyState
      });
    }
  };
  deleteItem = (index, type) => {
    let copyState = Object.assign({}, this.state.shoppingCart);
    if (type) {
      copyState.go.splice(index, 1);
      this.setState({
        shoppingCart: copyState
      });
    } else {
      copyState.back.splice(index, 1);
      this.setState({
        shoppingCart: copyState
      });
    }
  };
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
  loadUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      this.setState({
        user: JSON.parse(user)
      });
    } catch (e) {
      console.log("Error getting document:", e);
    }
  };
  resetShoppingCart = () => {
    this.setState({
      shoppingCart: {
        go: [],
        back: []
      }
    });
  };
  componentDidMount() {
    this.loadUser();
  }
  render() {
    return (
      <MainContaier
        screenProps={{
          ...this.state,
          setStation: this.setStation,
          swapStation: this.swapStation,
          setDate: this.setDate,
          addToCart: this.addToCart,
          deleteItem: this.deleteItem,
          resetShoppingCart:this.resetShoppingCart
        }}
      />
    );
  }
}
