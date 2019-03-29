import React, { Component } from "react";
import { Box, Button } from "grommet";
import { Edit } from "grommet-icons";

export default class Sidebar extends Component {
  render() {
    return (
      <Box
        width="300px"
        background="light-3"
        overflow={{ vertical: "scroll", horizontal: "hidden" }}
        elevation="medium"
        style={{ zIndex: "1" }}
        {...this.props}
      >
        <Box pad="small" onClick={this.props.onNewThreadClick}>
          <Button icon={<Edit />} label="New Thread" onClick={() => {}} />
        </Box>
        {this.props.children}
      </Box>
    );
  }
}
