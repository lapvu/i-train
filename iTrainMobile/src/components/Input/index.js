import React from "react";
import { Item, Input, Text, Icon } from "native-base";
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
export default class MyInput extends React.Component {
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
          rounded
          error={error && true}
          style={error ? styles.itemError : styles.item}
        >
          <Input
            style={styles.input}
            placeholderTextColor={colors.holderColor}
            {...rest}
            onChangeText={this._handleChange}
            onBlur={this._handleTouch}
          />
          {error && (
            <Icon
              name="close-circle"
              style={{ position: "absolute", right: 5 }}
            />
          )}
        </Item>
        <Text style={styles.errorMessage}>{error}</Text>
      </React.Fragment>
    );
  }
}
