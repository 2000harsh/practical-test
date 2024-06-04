import { Form, Input } from "antd";
import React, { useState } from "react";

const TicketDetails = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h2>Ticket Details</h2>
      <Form form={form} onFinish={onFinish} initialValues={{ fname: "" }}>
        <Form.Item label="name" value>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default TicketDetails;
