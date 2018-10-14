import React from "react";
import { Card, Icon, Tooltip } from "antd";

export const MapLocation = ({
  id = "emptyId",
  name = "emptyTitle",
  lat = "emptyLan",
  lon = "emptyLon",
  onDelete,
  onEdit
}) => (
  <div data-testid="map-location" className="margin-1">
    <Card
      id={id}
      title={name}
      style={{ width: 250 }}
      actions={[
        <Tooltip title="Delete">
          <Icon type="delete" onClick={onDelete} />
        </Tooltip>,
        <Tooltip title="Edit">
          <Icon type="edit" onClick={onEdit} />
        </Tooltip>
      ]}
    >
      <p>Latitude: {lat}</p>
      <p>Longtitude: {lon}</p>
    </Card>
  </div>
);
