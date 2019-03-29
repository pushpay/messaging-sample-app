import React, { Component } from "react";
import { Box, Stack, Text } from "grommet";

export default class SidebarItem extends Component {
  render() {
    let subtitleText = this.props.subtitle;
    if (subtitleText && subtitleText.length > 40) {
      subtitleText = `${subtitleText.substring(0, 40)}...`;
    }
    return (
      <Stack anchor="right">
        <Box style={{ cursor: "pointer" }}>
          <Box
            pad="medium"
            border={{ side: "bottom", color: "border", size: "xsmall" }}
            background={this.props.active ? "light-1" : undefined}
            {...this.props}
          >
            <Box>{this.props.title}</Box>
            <Box style={{ color: "#999" }}>{subtitleText}</Box>
          </Box>
        </Box>
        {this.props.unreadCount > 0 ? (
          <Box
            background="accent-1"
            pad={{ horizontal: "small", vertical: "xsmall" }}
            round="full"
            margin="small"
            width="2.4em"
            height="2.4em"
          >
            <Text>{this.props.unreadCount}</Text>
          </Box>
        ) : (
          undefined
        )}
      </Stack>
    );
  }
}
