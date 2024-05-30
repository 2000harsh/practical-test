import { List } from "antd";
import React from "react";

const Userlist = ({ data }) => {
  return (
    <div>
      <List
        bordered
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            {item.pname} - {item.email} - {item.uname} - {item.contact}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Userlist;
