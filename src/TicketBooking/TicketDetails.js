import { Form, Input } from "antd";
import React, { useState } from "react";

const TicketDetails = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h2>Ticket Details</h2>
      <Form form={form} onSubmit={handleSubmit}>
        <Form.Item>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default TicketDetails;
