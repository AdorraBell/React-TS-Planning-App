import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouteNames, privateRoutes, publicRoutes } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter: FC = () => {

    const isAuth = useTypedSelector(state => state.auth.isAuth);

    return ( 
        isAuth 
        ?
        <Routes>
            {privateRoutes.map(route =>
                <Route 
                    {...route}
                    />
            )}
            <Route path="/*" element={<Navigate to={RouteNames.EVENT} replace />} />
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route 
                    {...route}  
                    />
            )}
            <Route path="/*" element={<Navigate to={RouteNames.LOGIN} replace />} />
        </Routes>
     );
}
 
export default AppRouter;