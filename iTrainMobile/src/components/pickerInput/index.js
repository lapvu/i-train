import React from "react";
import { Item, Text, Icon, Picker } from "native-base";
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
export default class MyPickerInput extends React.Component {
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
        <Item
          picker
          error={error && true}
          style={error ? styles.itemError : styles.item}
        >
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{
              backgroundColor: colors.inputColor,
              color: colors.holderColor,
              paddingHorizontal: 20,
              paddingVertical: 14,
              borderRadius: 35
            }}
            placeholder="giới tính"
            placeholderStyle={{
              backgroundColor: colors.inputColor,
              color: colors.holderColor,
              paddingHorizontal: 20,
              paddingVertical: 14,
              borderRadius: 35
            }}
            placeholderIconColor={colors.holderColor}
            {...rest}
          >
            <Picker.Item label="Nam" value="0" />
            <Picker.Item label="Nữ" value="1" />
          </Picker>
        </Item>
        <Text style={styles.errorMessage}>{error}</Text>
      </React.Fragment>
    );
  }
}
