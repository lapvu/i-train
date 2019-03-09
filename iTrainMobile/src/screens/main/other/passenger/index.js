import React from "react";
import { H1, Text, Button } from "native-base";
import { StyleSheet, View, Dimensions } from "react-native";
import colors from "../../../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
import NumericInput from "react-native-numeric-input";
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
        <View style={{ flex: 1, width: width - 40, marginTop: 20 }}>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <Text style={{ color: colors.white }}>Người lớn</Text>
            </View>
            <View style={styles.contentrRight}>
              <NumericInput
                onChange={value => console.log(value)}
                totalWidth={100}
                totalHeight={30}
                iconSize={25}
                minValue={0}
                maxValue={10}
                containerStyle={{
                  borderRadius: 0
                }}
                textColor="#fff"
                inputStyle={{
                  fontSize: 16
                }}
                rightButtonBackgroundColor={colors.blue}
                leftButtonBackgroundColor={colors.green}
                iconStyle={{
                  color: colors.white
                }}
              />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <Text style={{ color: colors.white }}>Trẻ em</Text>
              <Text style={{ color: "gray", fontSize: 13 }}>0-10 tuổi</Text>
            </View>
            <View style={styles.contentrRight}>
              <NumericInput
                onChange={value => console.log(value)}
                totalWidth={100}
                totalHeight={30}
                iconSize={25}
                minValue={0}
                maxValue={10}
                containerStyle={{
                  borderRadius: 0
                }}
                textColor="#fff"
                inputStyle={{
                  fontSize: 16
                }}
                rightButtonBackgroundColor={colors.blue}
                leftButtonBackgroundColor={colors.green}
                iconStyle={{
                  color: colors.white
                }}
              />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <Text style={{ color: colors.white }}>Sinh viên</Text>
            </View>
            <View style={styles.contentrRight}>
              <NumericInput
                onChange={value => console.log(value)}
                totalWidth={100}
                totalHeight={30}
                iconSize={25}
                minValue={0}
                maxValue={10}
                containerStyle={{
                  borderRadius: 0
                }}
                textColor="#fff"
                inputStyle={{
                  fontSize: 16
                }}
                rightButtonBackgroundColor={colors.blue}
                leftButtonBackgroundColor={colors.green}
                iconStyle={{
                  color: colors.white
                }}
              />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <Text style={{ color: colors.white }}>Người cao tuổi</Text>
              <Text style={{ color: "gray", fontSize: 13 }}>trên 60 tuổi</Text>
            </View>
            <View style={styles.contentrRight}>
              <NumericInput
                onChange={value => console.log(value)}
                totalWidth={100}
                totalHeight={30}
                iconSize={25}
                minValue={0}
                maxValue={10}
                containerStyle={{
                  borderRadius: 0
                }}
                textColor="#fff"
                inputStyle={{
                  fontSize: 16
                }}
                rightButtonBackgroundColor={colors.blue}
                leftButtonBackgroundColor={colors.green}
                iconStyle={{
                  color: colors.white
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginTop: 30
          }}
        >
          <Button
            style={{
              width: width - 40,
              alignItems: "center",
              justifyContent: "center"
            }}
            light
          >
            <Text> Lưu </Text>
          </Button>
        </View>
      </LinearGradient>
    );
  }
}
