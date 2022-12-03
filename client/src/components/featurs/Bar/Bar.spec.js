import React    from "react";
import template from "./Bar.spec.js";

class Bar extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Bar;
