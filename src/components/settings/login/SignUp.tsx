import React from "react";
import {AppDispatch} from "../../../store";
import {useDispatch} from "react-redux";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import Form from "./Form";
import {setUser} from "../../../store/modules/shop/reducers/userSlice";

const SignUp: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }));
            })
            .catch(console.error)
    }

    return (
        <div>
            <Form
                title="register"
                handleClick={handleRegister}
            />
        </div>
    )
}

export default SignUp