// rafce -> shortcut -> react arrow function export component
import React from "react";
import { ReactNode } from "react"
import PropTypes from 'prop-types';


const Button = ({ children, color = 'primary', onClick }) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger']),
  onClick: PropTypes.func.isRequired,
};

export default Button;
