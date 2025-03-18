import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDhkYjNuMGt1ZDR5NnFvYTEyY2UxMW1oZmduM2NhZTkzdzJ2YW5hdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/H1jSPXCJmo8AZi3gdP/giphy.gif" />
      // <img alt="full stack" src={require("../../assests/images/fullstack_theme.svg")}/>
    );
  }
}
