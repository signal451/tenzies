import React, { PureComponent } from "react";

function Button(props) {
  return (
    <div className="roll">
      <button className="button" onClick={props.roll}>Roll</button>
    </div>
  );
}

export default Button;
