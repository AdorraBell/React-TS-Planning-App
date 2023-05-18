import { FC, useEffect } from "react";
import AppRouter from "src/components/AppRouter";
import AppNavbar from "src/components/AppNavbar";
import { Layout } from "antd";
import 'src/App.css';
import { useActions } from "src/hooks/useActions";
import { IUser } from "src/types/types";

const App: FC = () => {

  const {setUser, setUserName, setAuth} = useActions();

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser);
            setUserName(localStorage.getItem('username') || '');
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