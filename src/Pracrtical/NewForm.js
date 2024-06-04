import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const NewForm = ({ newAddData, Ddata, updateData }) => {
  const [form] = Form.useForm();
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  console.log("Ddata", Ddata);

  const onFinish = (values) => {
    if (isEditMode) {
      updateData(currentEditIndex, values);
      isEditMode(false);
      setCurrentEditIndex(null);
    } else {
      newAddData(values);
    }
    form.resetFields();
  };

  const handleEdit = (index) => {
    const DataEdit = Ddata[index];
    form.setFieldsValue(DataEdit);
    setIsEditMode(true);
    setCurrentEditIndex(index);
    // form.resetFields();
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish} initialValues={{ fname: "" }}>
        <Form.Item label="name" name="fname">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {isEditMode ? "Update" : "Add"}
          </Button>
        </Form.Item>
      </Form>

      {Ddata.map((i, index) => (
        <li>
          {i.fname} <Button onClick={() => handleEdit(index)}>Update</Button>
        </li>
      ))}
    </div>
  );
};

export default NewForm;
