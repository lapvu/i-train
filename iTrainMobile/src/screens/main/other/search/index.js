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

const stations = [
  {
    id: 0,
    name: "lao cai"
  },
  {
    id: 1,
    name: "Ha noi"
  },
  {
    id: 2,
    name: "Thai nguyen"
  },
  {
    id: 3,
    name: "Yen Bai"
  }
];

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
  filterList = txt => {
    if (txt) {
      let station = stations.filter(item => {
        return item.name.toLowerCase().search(txt.toLowerCase()) !== -1;
      });
      this.setState({ items: station });
    } else {
      this.setState({ items: [] });
    }
  };
  render() {
    const { navigation } = this.props;
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
              return (
                <ListItem
                  style={{ marginLeft: 10 }}
                  key={i}
                  onPress={() => {
                    this.props.navigation.navigate("Home", {
                      name: e.name,
                      id: e.id,
                      state: name
                    });
                  }}
                >
                  <Left>
                    <Text style={{ color: colors.white }}>{e.name}</Text>
                  </Left>
                  <Right>
                    <Icon
                      name="arrow-forward"
                      style={{ color: colors.white }}
                    />
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </View>
      </LinearGradient>
    );
  }
}
