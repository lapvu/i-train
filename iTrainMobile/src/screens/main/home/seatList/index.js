import React from "React";
import { Text } from "native-base";
import colors from "../../../../styles/colors";
export default class SeatListScreen extends React.Component {
  static navigationOptions = {
    title: "Chọn ghế",
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  render() {
    return <Text>aaaaa</Text>;
  }
}
