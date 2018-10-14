import React from "react";
import { Card, Icon, Tooltip } from "antd";

export const MapLocation = ({
  id = "emptyId",
  title = "emptyTitle",
  lat = "emptyLan",
  lon = "emptyLon"
}) => (
  <div data-testid="map-location">
    <Card
      title={title}
      extra={<a href="#">Edit</a>}
      style={{ width: 300 }}
      actions={[
        <Tooltip title="Delete">
          <Icon type="delete" />
        </Tooltip>,
        <Tooltip title="Edit">
          <Icon type="edit" />
        </Tooltip>
      ]}
    >
      <p>{title}</p>
      <p>{lat}</p>
      <p>{lon}</p>
    </Card>
  </div>
);
