import { FC } from "react";
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { rules } from "src/utils/rules";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { useActions } from "src/hooks/useActions";

const { Text } = Typography;

//username: Samantha
//pass: 1-463-123-4447

const LoginForm: FC = () => {

    const {error, isLoading} = useTypedSelector(state => state.auth);
    const {login} = useActions();

    interface FormData {
        username: string,
        password: string,
        remember: boolean
    }

    const onSubmit = (data: FormData) => {
        login(data.username, data.password, data.remember);
    }

    return ( 
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onSubmit}
                autoComplete="off" >
                    {error &&
                        <div className="error-text-block">
                            <Text 
                                strong type="danger"
                                >
                                {error}
                            </Text>
                        </div>
                    }
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[rules.required('Please input your username!')]}
                        >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[rules.required('Please input your password!')]}
                        >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" loading={isLoading}>
                            Submit
                        </Button>
                    </Form.Item>
            </Form>
        </>
    );
}
 
export default LoginForm;