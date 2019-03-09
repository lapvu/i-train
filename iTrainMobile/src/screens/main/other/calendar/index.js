import React from "react";
import { Text } from "native-base";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig
} from "react-native-calendars";
import colors from "../../../../styles/colors";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"
  ],
  monthNamesShort: [
    "TH 1",
    "TH 2",
    "TH 3",
    "TH 4",
    "TH 5",
    "TH 6",
    "TH 7",
    "TH 8",
    "TH 9",
    "TH 10",
    "TH 11",
    "TH 12"
  ],
  dayNames: ["Cn", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7"],
  dayNamesShort: ["Cn", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7"]
};

LocaleConfig.defaultLocale = "fr";
export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };

  render() {
    const dateNow = new Date().toISOString().slice(0, 10);
    const type = this.props.navigation.getParam("type", "");
    const currentDate = this.props.navigation.getParam("currentDate", "");
    return (
      <CalendarList
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
        current={"2019-03-10"}
        minDate={dateNow}
        onDayPress={day => {
          this.props.screenProps.setDate(day, type);
          this.props.navigation.navigate("Home");
        }}
      />
    );
  }
}
