import { FC, useEffect } from "react";
import AppRouter from "./components/AppRouter";
import AppNavbar from "./components/AppNavbar";
import { Layout } from "antd";
import './App.css';
import { useActions } from "./hooks/useActions";
import { IUser } from "./types/types";

const App: FC = () => {

  const {setUser, setAuth} = useActions();

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setAuth(true);
        }
    }, [])
    
    
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