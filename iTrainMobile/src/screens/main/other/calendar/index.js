import React from "react";
import { Text } from "native-base";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import colors from "../../../../styles/colors";
export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  render() {
    return (
      <CalendarList
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
        current={new Date().toISOString().slice(0, 10)}
        minDate={new Date().toISOString().slice(0, 10)}
        onDayPress={day => {
          console.log("selected day", day);
        }}
      />
    );
  }
}
