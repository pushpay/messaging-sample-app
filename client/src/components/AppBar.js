import React, { Component } from "react";
import { Box } from "grommet";

export default class AppBar extends Component {
  render() {
    return (
      <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background={{ color: "brand", dark: "light-1" }}
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="medium"
        style={{ zIndex: "2" }}
        {...this.props}
      />
    );
  }
}
