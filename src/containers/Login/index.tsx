import { Input, Form, Button } from "antd";
import client from "feathers";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (value: any) => {
    await (client as any).authenticate({
      strategy: "local",
      ...value,
    });
    navigate("/");
  };

  useEffect(() => {
    (async () => {
      await (client as any).authenticate();
      navigate("/");
    })();
  }, []);

  const validateMessages = {
    required: "${label} is required",
  };

  return (
    <div>
      <Form
        onFinish={handleSubmit}
        layout="vertical"
        wrapperCol={{ sm: { span: 24 }, md: { span: 9 } }}
        validateMessages={validateMessages}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true },
            { type: "email", message: "Email is invalid" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
