import React from "react";
import { Item, Input, Text, Icon, DatePicker } from "native-base";
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
const styles = StyleSheet.create({
  input: {
    color: colors.white,
    backgroundColor: colors.inputColor,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 35
  },
  item: {
    borderColor: colors.transparent
  },
  itemError: {},
  errorMessage: {
    color: "red",
    marginBottom: 5,
    paddingHorizontal: 20
  }
});
export default class MyDatePicker extends React.Component {
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };
  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  };
  render() {
    const { error, ...rest } = this.props;
    return (
      <React.Fragment>
        <DatePicker
          defaultDate={new Date(2018, 4, 4)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2018, 12, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText="ngày sinh"
          textStyle={{
            color: colors.holderColor,
            backgroundColor: colors.inputColor,
            paddingHorizontal: 20,
            borderRadius: 35
          }}
          placeHolderTextStyle={{
            color: colors.holderColor,
            backgroundColor: colors.inputColor,
            paddingHorizontal: 20,
            paddingVertical: 14,
            borderRadius: 35
          }}
          disabled={false}
          {...rest}
        />
        <Text style={styles.errorMessage}>{error}</Text>
      </React.Fragment>
    );
  }
}
