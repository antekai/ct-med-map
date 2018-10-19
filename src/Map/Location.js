import React from "react";
import { Card, Icon, Tooltip, Input, Form, Button } from "antd";

const FormItem = Form.Item;

export const MapLocation = Form.create()(
  class extends React.Component {
    render() {
      const {
        id = "emptyId",
        name = "emptyTitle",
        lat = "emptyLan",
        lon = "emptyLon",
        onDelete,
        onEdit,
        isEdit = false,
        onSave,
        form
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <div data-testid="map-location" className="margin-1">
          {isEdit ? (
            <Form onSubmit={onSave}>
              <Card
                id={id}
                title={
                  <FormItem>
                    {getFieldDecorator("name", {
                      rules: [
                        {
                          required: true,
                          message: "Please enter name"
                        },
                        {
                          pattern: /[A-Za-z0-9]{1,15}/,
                          message: `Invalid name`
                        }
                      ],
                      initialValue: name
                    })(<Input addonBefore="name" placeholder="Edit Name" />)}
                  </FormItem>
                }
                style={{ width: 250 }}
                actions={[
                  <Tooltip title="Delete">
                    <Icon type="delete" onClick={onDelete} />
                  </Tooltip>,
                  <Tooltip title="Save">
                    <Button type="primary" htmlType="submit" size="small">
                      <Icon type="check" />
                    </Button>
                  </Tooltip>
                ]}
              >
                <div>
                  <FormItem>
                    {getFieldDecorator("lat", {
                      rules: [
                        {
                          required: true,
                          message: `Please add latitude!`
                        },
                        {
                          pattern: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
                          message: `Invalid latitude format`
                        }
                      ],
                      initialValue: lat
                    })(<Input addonBefore="Lat" placeholder="latitude" />)}
                  </FormItem>
                </div>
                <div>
                  <FormItem>
                    {getFieldDecorator("lon", {
                      rules: [
                        {
                          required: true,
                          message: `Please add longitude!`
                        },
                        {
                          pattern: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
                          message: `Invalid longitude format`
                        }
                      ],
                      initialValue: lon
                    })(<Input addonBefore="Lng" placeholder="longitude" />)}
                  </FormItem>
                </div>
              </Card>
            </Form>
          ) : (
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
              <div>Latitude: {lat}</div>
              <div>Longitude: {lon}</div>
            </Card>
          )}
        </div>
      );
    }
  }
);
