import { Table } from "antd";
import client from "feathers";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const userService = client.service("users");

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [paginate, setPaginate] = useState({
    limit: 0,
    total: 0,
  });

  useEffect(() => {
    (async () => {
      const usersData = await userService.find();
      const { data, ...rest } = usersData;
      setUsers(data);
      setPaginate(rest);
    })();
  }, []);
  console.log(paginate);

  return (
    <div>
      <h2>User List</h2>
      <Table
        columns={[
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Created at",
            dataIndex: "createdAt",
            key: "created",
          },
        ]}
        dataSource={users.map((it: any) => ({ ...it, key: it._id }))}
        pagination={{
          pageSize: paginate.limit,
          total: paginate.total,
        }}
      />
    </div>
  );
};

export default HomePage;
