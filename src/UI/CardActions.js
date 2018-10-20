import React from "react";
import { Tooltip, Icon } from "antd";
import { withProps } from "recompose";
import PropTypes from "prop-types";

const BaseCardAction = ({ type, onClick }) => (
  <Tooltip title={type}>
    <Icon type={type} onClick={onClick} />
  </Tooltip>
);

BaseCardAction.propTypes = {
  type: PropTypes.oneOf(["edit", "delete"]),
  onClick: PropTypes.func
};

export const DeleteCard = withProps({ type: "delete" })(BaseCardAction);
export const EditCard = withProps({ type: "edit" })(BaseCardAction);
