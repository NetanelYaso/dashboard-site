import React    from "react";
import template from "./Line.spec.js";

class Line extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Line;
