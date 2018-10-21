import React from "react";
import { Modal, Form, Input, InputNumber } from "antd";
import PropTypes from "prop-types";

const FormItem = Form.Item;

export const MapNewLocationModal = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="New Location"
          okText="Submit"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical" data-cy="new-location-modal-form">
            <FormItem label="Location name">
              {getFieldDecorator("name", {
                rules: [
                  { required: true, message: `Location's name is required` },
                  {
                    pattern: /[A-Za-z0-9]{1,15}/,
                    message: `Accepted only letters and numbers`
                  }
                ]
              })(
                <Input
                  placeholder="Location's name"
                  type="text"
                  data-cy="new-location-name"
                />
              )}
            </FormItem>
            <FormItem label="Latitude">
              {getFieldDecorator("lat", {
                rules: [
                  {
                    required: true,
                    message: `latitude is required`
                  },
                  {
                    pattern: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
                    message: `invalid latitude`
                  }
                ],
                initialValue: 48.17243
              })(
                <InputNumber
                  placeholder="Latitude"
                  data-cy="new-location-lat"
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
                    message: `longitude is required`
                  },
                  {
                    pattern: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
                    message: `invalid longitude`
                  }
                ],
                initialValue: 11.576502
              })(
                <InputNumber
                  placeholder="Longitude"
                  data-cy="new-location-lon"
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

MapNewLocationModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  form: PropTypes.object
};
