import React, { Component } from "react";
import { Box, Text } from "grommet";

export default class Message extends Component {
  render() {
    if (this.props.out) {
      return (
        <div
          style={{
            maxWidth: "60%",
            alignSelf: "flex-end"
          }}
        >
          <Box direction="row" align="center">
            <Box
              background="accent-1"
              pad="small"
              round="small"
              margin={{ vertical: "xsmall" }}
            >
              <Text size="small" {...this.props} />
            </Box>
          </Box>
        </div>
      );
    } else {
      return (
        <div
          style={{
            maxWidth: "60%",
            alignSelf: "flex-start"
          }}
        >
          <Box direction="row" align="center">
            <Box
              background={{ color: "brand", dark: "light-1" }}
              pad="small"
              round="small"
              margin={{ vertical: "xsmall" }}
            >
              <Text size="small" {...this.props} />
            </Box>
          </Box>
        </div>
      );
    }
  }
}
