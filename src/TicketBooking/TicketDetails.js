import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const TicketDetails = (newAddData) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    newAddData(values);
    form.resetFields();
    console.log(values);
  };

  return (
    <div>
      <h2>Ticket Details</h2>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{ name: "", number: "" }}
      >
        <Form.Item label="name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="number" name="number">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Book
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TicketDetails;
