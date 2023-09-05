import React from "react";
import {useAuth} from "../../../hook/use-auth";
import {Navigate} from "react-router-dom";
import Profile from "./profile";


const ProfilePage: React.FC = () => {

    const {isAuth} = useAuth()

    return (
        isAuth ? <Profile /> : <Navigate to="/login" />
    )

}

export default ProfilePage