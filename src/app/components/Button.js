import React from "react";
import { Link } from "react-router-dom";

function Button({ children, ...props }) {
  const Tag = props.to ? Link : props.href ? "a" : "button";

  return (
    <Tag className="Button" {...props}>
      {children}
    </Tag>
  );
}

export default Button;
