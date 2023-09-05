import React from "react";
import {useAuth} from "../../../hook/use-auth";
import {Navigate} from "react-router-dom";
import Basket from "./Basket";


const BasketPage: React.FC = () => {

    const {isAuth} = useAuth()

    return (
        isAuth ? <Basket /> : <Navigate to="/login" />
    )

}

export default BasketPage