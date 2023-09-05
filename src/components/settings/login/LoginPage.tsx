import React from "react";
import Login from "./Login";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const LoginPage: React.FC = () => {

    return (
        <div>
            <div className="logout">
                <Login />
            </div>
            <p>
                Or <Link to="/register"><Button>Register</Button></Link>
            </p>
        </div>

    )
}

export default LoginPage