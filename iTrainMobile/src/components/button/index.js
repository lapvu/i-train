import React from "react";
import { Button, Text, Spinner } from "native-base";

export default class MyButton extends React.Component {
  render() {
    const { isLoading, title, ...rest } = this.props;
    return (
      <Button bordered light block disabled={isLoading} {...rest}>
        {isLoading ? <Spinner /> : <Text>{title}</Text>}
      </Button>
    );
  }
}
