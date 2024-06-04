import { Button, DatePicker, Form, Input, Select, TimePicker } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

const TicketDetails = ({ newAddData, Ddata }) => {
  const { title } = useParams();
  const [form] = Form.useForm();
  console.log("Ddata", Ddata);

  console.log("title", title);

  const onFinish = (values) => {
    newAddData(values);
    form.resetFields();
  };

  const options = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
  ];

  return (
    <div>
      <h2>Ticket Details</h2>
      <Form form={form} onFinish={onFinish} initialValues={{ fname: "" }}>
        <Form.Item label="Customer Name" name="fname">
          <Input />
        </Form.Item>
        <Form.Item label="Movie Name" name="mname">
          <Select defaultValue={title} />
        </Form.Item>
        <Form.Item label="Number of Ticket" name="nof">
          <Select options={options} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Book
          </Button>
        </Form.Item>
      </Form>

      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Number of Tickets</th>
          </tr>
        </thead>
        <tbody>
          {Ddata.map((i) => (
            <tr key={i.id}>
              <td>{i.fname}</td>
              <td>{i.mname}</td>
              <td>{i.nof}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketDetails;
