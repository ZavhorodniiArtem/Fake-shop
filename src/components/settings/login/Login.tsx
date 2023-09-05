import React from "react";
import Form from "./Form";
import {AppDispatch} from "../../../store";
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {setUser} from "../../../store/modules/shop/reducers/userSlice";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate('/')
            })
            .catch(() => alert('Invalid user'))
    }

    return (
        <div style={{padding: 15}}>
            <Form
                title="sign in"
                handleClick={handleLogin}
            />

        </div>
    )
}

export default Login