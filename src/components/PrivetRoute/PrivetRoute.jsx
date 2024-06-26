import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation()
    
    if (loading) {
        return <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    }


    if (user) {
        return children;
    }



    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRoute;