import React from "react";
import { H1, Text } from "native-base";
import { StyleSheet, View, Dimensions } from "react-native";
import colors from "../../../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  contentLeft: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  contentrRight: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    flexDirection: "row"
  }
});
export default class PassengerScreen extends React.Component {
  static navigationOptions = {
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
        <H1 style={{ textAlign: "center", color: colors.white }}>Hành Khách</H1>
        <View style={{ flex: 1, width: width - 40 }}>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <Text style={{ color: colors.white }}>Người lớn</Text>
            </View>
            <View style={styles.contentrRight}>
              <Text style={{ color: colors.white }}>aaaaaaa</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <Text style={{ color: colors.white }}>Trẻ em</Text>
            </View>
            <View style={styles.contentrRight}>
              <Text style={{ color: colors.white }}>Sinh viên</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <Text style={{ color: colors.white }}>Sinh viên</Text>
            </View>
            <View style={styles.contentrRight}>
              <Text style={{ color: colors.white }}>aaaaaaa</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <Text style={{ color: colors.white }}>Người cao tuổi</Text>
            </View>
            <View style={styles.contentrRight}>
              <Text style={{ color: colors.white }}>aaaaaaa</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }} />
      </LinearGradient>
    );
  }
}
