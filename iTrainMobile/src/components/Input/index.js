import React from "react";
import { Item, Input, Text, Icon } from "native-base";
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
const styles = StyleSheet.create({
  input: {
    color: colors.white,
    backgroundColor: colors.inputColor,
    paddingLeft: 10,
    paddingRight: 10
  },
  item: {
    borderColor: colors.transparent,
    marginLeft: 0
  },
  itemError: {
    marginLeft: 0
  },
  errorMessage: {
    color: "red",
    marginBottom: 5
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
          error={error && true}
          style={error ? styles.itemError : styles.item}
        >
          <Input
            style={styles.input}
            placeholderTextColor={colors.holderColor}
            onChangeText={this._handleChange}
            onBlur={this._handleTouch}
            {...rest}
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
