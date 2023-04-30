import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img alt="full stack" src={require("../../assests/images/fullstack_theme.svg")}/>
    );
  }
}
