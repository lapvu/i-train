import Picker from "react-native-picker";
import React from "react";
import { Item, Text, Icon } from "native-base";
import { StyleSheet, View } from "react-native";
import colors from "../../styles/colors";
const styles = StyleSheet.create({
  item: {
    borderColor: colors.transparent,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 13,
    paddingBottom: 13,
    color: colors.white,
    backgroundColor: colors.inputColor,
    borderRadius: 35
  },
  itemError: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 13,
    paddingBottom: 13,
    borderRadius: 35
  },
  errorMessage: {
    color: "red",
    marginBottom: 5,
    paddingHorizontal: 20
  }
});
export default class MyPickerInput extends React.Component {
  _showPicker = () => {
    let data = ["Nam", "Nữ"];
    Picker.init({
      pickerData: data,
      pickerTitleText: "Giới tính",
      pickerConfirmBtnText: "Xác nhận",
      pickerCancelBtnText: "Hủy",
      pickerToolBarBg: [255, 255, 255, 1],
      pickerBg: [0, 148, 255, 1],
      pickerConfirmBtnColor: [0, 0, 0, 1],
      pickerCancelBtnColor: [0, 0, 0, 1],
      pickerTitleColor: [0, 0, 0, 1],
      pickerFontSize: 18,
      pickerFontColor: [255, 255, 255, 1],
      onPickerConfirm: data => {
        this.props.onValueChangePicker(data);
        this.props.onChange(this.props.name, data);
      },
      onPickerCancel: data => {
        console.log(data);
      },
      onPickerSelect: data => {
        this.props.onTouch(this.props.name);
      }
    });
    Picker.show();
  };
  render() {
    const { error, onValueChangePicker, gender, actions, ...rest } = this.props;
    return (
      <React.Fragment>
        <View>
          <Item
            rounded
            error={error && true}
            style={error ? styles.itemError : styles.item}
            onPress={this._showPicker.bind(this)}
          >
            <Text
              style={{
                color: colors.holderColor
              }}
            >
              {gender || "Giới tính"}
            </Text>
            {error && (
              <Icon
                name="close-circle"
                style={{ position: "absolute", right: 5 }}
              />
            )}
          </Item>
          <Text style={styles.errorMessage}>{error}</Text>
        </View>
      </React.Fragment>
    );
  }
}
