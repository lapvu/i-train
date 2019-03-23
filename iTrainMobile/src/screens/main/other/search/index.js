import React from "react";
import {
  Text,
  Input,
  List,
  ListItem,
  Item,
  Left,
  Right,
  Icon
} from "native-base";
import { StyleSheet, View, Dimensions } from "react-native";
import colors from "../../../../styles/colors";
import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  input: {
    color: colors.white
  }
});

export default class SearchStationScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  constructor(props) {
    super(props);
    this.state = {
      init: [],
      items: []
    };
  }
  componentDidMount() {
    return fetch("https://k.vnticketonline.vn/api/GTGV/LoadDmGa", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          init: res
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  filterList = txt => {
    if (txt) {
      let keyword = txt.toLowerCase();
      filtered = this.state.init.filter(e => {
        let YKeys = e.SKeys.toLowerCase();
        let ZKeys = e.TenGa.toLowerCase();
        if (YKeys && ZKeys) {
          return YKeys.indexOf(keyword) > -1 || ZKeys.indexOf(keyword) > -1;
        }
      });
      this.setState({
        items: filtered
      });
    } else {
      this.setState({
        items: []
      });
    }
  };
  handleSetStation = (station, go) => {
    if (
      station.TenGa != this.props.screenProps.from.TenGa &&
      station.TenGa != this.props.screenProps.to.TenGa
    ) {
      this.props.screenProps.setStation(station, go);
      this.props.navigation.navigate("Home");
    }
  };
  render() {
    const { navigation, screenProps } = this.props;
    const { width, height } = Dimensions.get("window");
    const name = navigation.getParam("name", "");
    return (
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <View style={{ flex: 1, width: width - 40 }}>
          <Item>
            <Input
              placeholder={name === "to" ? "Ga đến" : "Ga đi"}
              autoFocus={true}
              style={{
                width: width - 40,
                color: colors.white,
                backgroundColor: colors.inputColor,
                paddingLeft: 10,
                paddingRight: 10
              }}
              placeholderTextColor={colors.holderColor}
              onChangeText={this.filterList.bind(this)}
            />
          </Item>
          <List>
            {this.state.items.map((e, i) => {
              if (e) {
                return (
                  <ListItem
                    style={{ marginLeft: 10 }}
                    key={i}
                    onPress={this.handleSetStation.bind(this, e, name)}
                  >
                    <Left>
                      <Text style={{ color: colors.white }}>{e.TenGa}</Text>
                    </Left>
                    <Right>
                      <Icon
                        name="arrow-forward"
                        style={{ color: colors.white }}
                      />
                    </Right>
                  </ListItem>
                );
              }
            })}
          </List>
        </View>
      </LinearGradient>
    );
  }
}
