import React from "react";
import { Button, Text } from "native-base";

export default class MyButton extends React.Component {
  render() {
    const { title, ...rest } = this.props;
    return (
      <Button rounded bordered light block {...rest}>
        <Text>{title}</Text>
      </Button>
    );
  }
}
