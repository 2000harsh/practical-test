import React, { useEffect } from "react";
import { Button, Form, Input, Row, Col, Upload, message } from "antd";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { UploadProps } from "antd";
import "../style.scss";

const Userform = ({ addDate, editData, initialValues }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  const onFinish = (values) => {
    if (initialValues) {
      editData(values);
    } else {
      addDate(values);
    }
    form.resetFields();
    navigate("/Userlist");
  };

  const props: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="form-container">
      <Form
        className="form"
        form={form}
        onFinish={onFinish}
        initialValues={{ pname: "", email: "", uname: "", contact: "" }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <h2>{initialValues ? "Edit User" : "Add User"}</h2>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              label="Personal Name:"
              name="pname"
              rules={[
                { required: true, message: "Please Enter personal name" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Email Id:"
              name="email"
              rules={[
                { required: true, message: "Please Enter Email Id" },
                {
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="User Name:"
              name="uname"
              rules={[{ required: true, message: "Please Enter User Name" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Contact Info:"
              name="contact"
              rules={[
                { required: true, message: "Please Enter Contact Info" },
                { pattern: /^\d+$/, message: "Contact Info must be a number" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Profile Photo" name="photo">
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                {initialValues ? "Update" : "Submit"}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Userform;
