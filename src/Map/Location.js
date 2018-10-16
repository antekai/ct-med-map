import React from "react";
import { Card, Icon, Tooltip, Input } from "antd";

export const MapLocation = ({
  id = "emptyId",
  name = "emptyTitle",
  lat = "emptyLan",
  lon = "emptyLon",
  onDelete,
  onEdit,
  isEdit = false,
  onEnterName,
  onEnterLat,
  onEnterLon,
  onCheck
}) => (
  <div data-testid="map-location" className="margin-1">
    <Card
      id={id}
      title={
        isEdit ? (
          <Tooltip title="Press enter to update values">
            <Input
              defaultValue={name}
              placeholder="Edit Name"
              onPressEnter={onEnterName}
            />
          </Tooltip>
        ) : (
          name
        )
      }
      style={{ width: 250 }}
      actions={
        isEdit
          ? [
              <Tooltip title="Delete">
                <Icon type="delete" onClick={onDelete} />
              </Tooltip>,
              <Tooltip title="Done">
                <Icon type="check" onClick={onCheck} />
              </Tooltip>
            ]
          : [
              <Tooltip title="Delete">
                <Icon type="delete" onClick={onDelete} />
              </Tooltip>,
              <Tooltip title="Edit">
                <Icon type="edit" onClick={onEdit} />
              </Tooltip>
            ]
      }
    >
      <p>
        {isEdit ? (
          <Tooltip title="Press enter to update values">
            <Input
              placeholder="Edit Latitude"
              defaultValue={lat}
              onPressEnter={onEnterLat}
            />
          </Tooltip>
        ) : (
          `Latitude: ${lat}`
        )}
      </p>
      <p>
        {isEdit ? (
          <Tooltip title="Press enter to update values">
            <Input
              placeholder="Edit Longitude"
              defaultValue={lon}
              onPressEnter={onEnterLon}
            />
          </Tooltip>
        ) : (
          `Longitude: ${lon}`
        )}
      </p>
    </Card>
  </div>
);
