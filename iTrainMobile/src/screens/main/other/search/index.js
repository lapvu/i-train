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
var SQLite = require("react-native-sqlite-storage");
var db = SQLite.openDatabase(
  { name: "itrain", createFromLocation: "~db/itrain.db" },
  () => {
    console.log("ok");
  },
  err => {
    console.log(err);
  }
);
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
      items: []
    };
  }
  getData = txt => {
    let station = [];
    return new Promise((resolve, reject) => {
      db.transaction(
        tx => {
          tx.executeSql(
            `SELECT * FROM stations where short_name like '%${txt}%' limit 10;`,
            [],
            (tx, rs) => {
              for (let i = 0; i <= rs.rows.length; i++) {
                station.push(rs.rows.item(i));
                resolve(station);
              }
            }
          );
        },
        error => {
          reject(error.message);
        }
      );
    });
  };
  filterList = txt => {
    if (txt) {
      this.getData(txt)
        .then(data => this.setState({ items: data }))
        .catch(err => console.log(err));
    } else {
      this.setState({ items: [] });
    }
  };
  handleSetStation = (station, go) => {
    if (
      station.short_name != this.props.screenProps.from &&
      station.short_name != this.props.screenProps.to
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
                      <Text style={{ color: colors.white }}>
                        {e.short_name}
                      </Text>
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
