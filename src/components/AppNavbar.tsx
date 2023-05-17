import { Row, Menu, Col, MenuProps, Typography } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateMenuItems, publicMenuItems } from "../constants/menuItems";
import { Header } from "antd/es/layout/layout";
import { useActions } from "../hooks/useActions";

const { Text } = Typography;

const Navbar: FC = () => {

    const isAuth = useTypedSelector(state => state.auth.isAuth);
    const username = useTypedSelector(state => state.auth.username);
    const navigate = useNavigate();
    const {logout} = useActions();

    const onClick: MenuProps['onClick'] = (e) => {
        
        const allRoutes = privateMenuItems.concat(publicMenuItems);
        allRoutes.forEach(route => {
            if (route.key === Number(e.key)){
                if (route.path) {
                    navigate(route.path);
                } else {
                    if (route.label === 'Log out') logout();
                }
            } 
        })
    }

    return ( 
        <Header>
            <Row justify="space-between">
                <Col span={7}>
                    {
                        isAuth &&
                        <Text type="success" strong>
                            {username}
                        </Text>
                    }
                </Col>
                <Col span={5}>
                    {
                        isAuth ?
                        <Menu
                                theme="dark"
                                mode="horizontal"
                                items={privateMenuItems}
                                onClick={onClick}
                                />

                        :
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            items={publicMenuItems}
                            onClick={onClick}
                            />
                    }
                </Col>
            </Row>
        </Header>
    );
}
 
export default Navbar;