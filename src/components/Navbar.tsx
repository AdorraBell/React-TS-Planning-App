import { Layout, Row, Menu, Col, MenuProps } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateMenuItems, publicMenuItems } from "../constants/menuItems";

const Navbar: FC = () => {

    const isAuth = useTypedSelector(state => state.auth.isAuth);
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        
        const allRoutes = privateMenuItems.concat(publicMenuItems);
        allRoutes.forEach(route => {
            if(route.key === Number(e.key)){
                if(route.path) navigate(route.path);
            } 
        })
    }

    return ( 
        <Layout.Header>
            <Row justify="end">
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
        </Layout.Header>
    );
}
 
export default Navbar;