import React    from "react";
import template from "./Pie.spec.js";

class Pie extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Pie;
