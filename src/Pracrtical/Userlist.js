import { Button, Table } from "antd";
import React from "react";
import "../style.scss";

const Userlist = ({ data, deleteData, setEditingUser }) => {
  // Define columns for the table
  const columns = [
    {
      title: "Name",
      dataIndex: "pname",
      key: "pname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Username",
      dataIndex: "uname",
      key: "uname",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Profile",
      dataIndex: "photo",
      key: "photo",
    },
    {
      title: "Update",
      key: "actions1",
      render: (text, record, index) => (
        <span>
          <Button className="b1" onClick={() => setEditingUser(index)}>
            Edit
          </Button>
          {/* <Button onClick={() => deleteData(index)} style={{ marginLeft: 8 }}>
            Delete
          </Button> */}
        </span>
      ),
    },
    {
      title: "Delete",
      key: "actions2",
      render: (text, record, index) => (
        <span>
          {/* <Button onClick={() => setEditingUser(index)}>Edit</Button> */}
          <Button
            className="b2"
            onClick={() => deleteData(index)}
            style={{ marginLeft: 8 }}
          >
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div className="form-container">
      <Table
        className="form"
        bordered
        dataSource={data ? data : "-"}
        columns={columns}
        rowKey={(record, index) => index} // Use index as key, you can replace it with a unique identifier if available
      />
    </div>
  );
};

export default Userlist;
