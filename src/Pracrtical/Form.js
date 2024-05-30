import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Userform = ({ addDate }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    addDate(values);
    form.resetFields();
    navigate("/Userlist");
  };
  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{ pname: "", email: "", uname: "", contact: "" }}
      >
        <div className="col-md-4">
          <Form.Item
            label="Personal Name:"
            name="pname"
            rules={[{ required: true, message: "Please Enter personal name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email Id:"
            name="email"
            rules={[{ required: true, message: "Please Enter Email Id" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="User Name:"
            name="uname"
            rules={[{ required: true, message: "Please Enter User Name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contact Info:"
            name="contact"
            rules={[{ required: true, message: "Please Enter Contact Info" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Userform;
