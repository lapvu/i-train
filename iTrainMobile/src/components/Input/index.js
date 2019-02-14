import React from "react";
import { Item, Input } from "native-base";
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
    marginBottom: 20,
    borderColor: colors.transparent
  }
});
export default class MyInput extends React.Component {
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };
  render() {
    const { ...rest } = this.props;
    return (
      <Item rounded success style={styles.item}>
        <Input
          style={styles.input}
          placeholderTextColor={colors.holderColor}
          {...rest}
          onChangeText={this._handleChange}
        />
      </Item>
    );
  }
}
