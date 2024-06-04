import {
  Button,
  DatePicker,
  Form,
  Input,
  Row,
  Col,
  Select,
  TimePicker,
} from "antd";
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
    <div className="    ">
      <h2>Ticket Details</h2>
      <Form
        className="form mb-5"
        form={form}
        onFinish={onFinish}
        initialValues={{ fname: "" }}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              label="Customer Name"
              name="fname"
              rules={[
                { required: true, message: "Please Enter customer name" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Movie Name" name="mname">
              <Select defaultValue={title} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Number of Ticket" name="nof">
              <Select options={options} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Book
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Button style={{ marginTop: "50px" }} type="primary">
        Print / Download
      </Button>
      <table
        className="mt-5"
        style={{
          border: "1px solid black",

          backgroundColor: "aquamarine",
        }}
      >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Movie Name</th>
            <th>Number of Tickets</th>
          </tr>
        </thead>
        <tbody>
          {Ddata.map((i) => (
            <tr key={i.id}>
              <td>{i.fname}</td>
              <td>{title}</td>
              <td>{i.nof}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketDetails;
