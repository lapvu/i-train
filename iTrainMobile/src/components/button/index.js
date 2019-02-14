import React from "react";
import { Button, Text, Spinner } from "native-base";

export default class MyButton extends React.Component {
  render() {
    const { isLoading, title, ...rest } = this.props;
    return (
      <Button rounded bordered light block {...rest}>
        {isLoading ? <Spinner /> : <Text>{title}</Text>}
      </Button>
    );
  }
}
