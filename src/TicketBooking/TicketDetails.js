import { Button, Form, Input } from "antd";
import React from "react";

const TicketDetails = ({ newAddData, Ddata }) => {
  const [form] = Form.useForm();
  console.log("Ddata", Ddata);

  const onFinish = (values) => {
    newAddData(values);
    form.resetFields();
  };

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

      {/* {Ddata.map((i) => (
        <li>
          {i.fname} <Button>Update</Button>
        </li>
      ))} */}
    </div>
  );
};

export default TicketDetails;
