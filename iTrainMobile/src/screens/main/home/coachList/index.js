import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
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
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  render() {
    return (
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <Text>aa</Text>
      </LinearGradient>
    );
  }
}
