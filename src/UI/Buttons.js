import React from "react";
import { Button } from "antd";
import { withProps } from "recompose";
import PropTypes from "prop-types";

const BaseButton = ({ txt, onClick, type, size }) => (
  <Button type={type} className="margin-1" size={size} onClick={onClick}>
    {txt}
  </Button>
);
BaseButton.propTypes = {
  txt: PropTypes.oneOfType(PropTypes.string, PropTypes.element),
  type: PropTypes.oneOf(["primary", "ghost", "dashed", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func
};

export const GhostButton = withProps({ type: `ghost` })(BaseButton);
export const PrimaryButton = withProps({ type: `primary` })(BaseButton);
export const DangerButton = withProps({ type: `danger` })(BaseButton);
