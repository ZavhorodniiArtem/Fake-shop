import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import SignUp from "./SignUp";

const RegisterPage: React.FC = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp />
            <p>
                Already have an account? <Link to="/login"><Button>Sign in</Button></Link>
            </p>
        </div>
    )
}

export default RegisterPage