import React from "react";
import { Modal, Form, Input, InputNumber } from "antd";

const FormItem = Form.Item;

export const LocationModal = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Location"
          okText="Save"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Location name">
              {getFieldDecorator("name", {
                rules: [
                  { required: true, message: `Please add Location's name!` },
                  {
                    pattern: /[A-Za-z0-9]{1,15}/,
                    message: `name should only contain letters (from 1 to 15)`
                  }
                ]
              })(
                <Input placeholder="Please add location's Name" type="text" />
              )}
            </FormItem>
            <FormItem label="Latitude">
              {getFieldDecorator("lat", {
                rules: [
                  {
                    required: true,
                    message: `Please add Location's latitude!`
                  },
                  {
                    pattern: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
                    message: `Latitude should only contain a valid latitude format`
                  }
                ],
                initialValue: 48.17243
              })(
                <InputNumber
                  placeholder="Please add Location's latitude"
                  step={0.1}
                  size={150}
                />
              )}
            </FormItem>
            <FormItem label="longitude">
              {getFieldDecorator("lon", {
                rules: [
                  {
                    required: true,
                    message: `Please add Location's longitude!`
                  },
                  {
                    pattern: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
                    message: `longitude should only contain a valid longitude format`
                  }
                ],
                initialValue: 11.576502
              })(
                <InputNumber
                  placeholder="Please add Location's longitude"
                  step={0.1}
                />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);
