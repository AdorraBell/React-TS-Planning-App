import { FC } from "react";
import AppRouter from "./components/AppRouter";
import AppNavbar from "./components/AppNavbar";
import { Layout } from "antd";
import './App.css';

const App: FC = () => {
  return ( 
    <Layout>
      <AppNavbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout >
   );
}
 
export default App;