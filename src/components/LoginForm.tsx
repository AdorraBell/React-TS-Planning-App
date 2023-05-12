import { FC } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { rules } from "../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";

const LoginForm: FC = () => {

    const dispatch = useDispatch();
    const error = useTypedSelector(state => state.auth.error);

    const onSubmit = () => {
        dispatch(AuthActionCreators.login('user', '123'));
    }

    const onFinishFailed = () => {

    }

    return ( 
        <>
        <p>{error}</p>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off" >
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
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
            </Form>
        </>
    );
}
 
export default LoginForm;