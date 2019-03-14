import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import colors from "../../../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
import { Card, CardItem, Right, Icon } from "native-base";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  content: {
    flex: 1,
    flexDirection: "row"
  }
});
export default class CoachListScreen extends React.Component {
  static navigationOptions = {
    title: "Chọn toa",
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  render() {
    const { width, height } = Dimensions.get("window");
    return (
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <View style={{ flex: 1, width: width - 40 }}>
          <Card>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate("SeatList")}
            >
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate("SeatList")}
            >
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate("SeatList")}
            >
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </View>
      </LinearGradient>
    );
  }
}
