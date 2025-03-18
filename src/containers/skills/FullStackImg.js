import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXhtZWlzYzE1dXl5bmttanNweXMxN244YTExOXZqY3phbTFiZGEwMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yTFemEJxmeW2YLOT6p/giphy.gif" />
      // <img alt="full stack" src={require("../../assests/images/fullstack_theme.svg")}/>
    );
  }
}
