import React from "react";
import {useAuth} from "../../../hook/use-auth";
import {Navigate} from "react-router-dom";
import Account from "./account";


const AccountPage: React.FC = () => {

    const {isAuth} = useAuth()

    return (
        isAuth ? <Account /> : <Navigate to="/login" />
    )

}

export default AccountPage