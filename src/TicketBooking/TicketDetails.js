import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const TicketDetails = (newAddData, Ddata) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    newAddData(values);
    form.resetFields();
  };
  console.log("Ddata", Ddata);

  return (
    <div>
      <h2>Ticket Details</h2>
      <Form form={form} onFinish={onFinish} initialValues={{ fname: "" }}>
        <Form.Item label="name" name="fname">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Book
          </Button>
        </Form.Item>
      </Form>

      {Ddata.map((i, index) => (
        <li>{i.fname} </li>
      ))}
    </div>
  );
};

export default TicketDetails;
