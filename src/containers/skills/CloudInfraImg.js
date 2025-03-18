import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img alt="full stack" src={require("../../assests/images/cloud.PNG")} />
    );
  }
}
