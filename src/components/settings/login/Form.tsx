import React, {useState} from "react";
import {Button, TextField} from "@mui/material";


type PropsType = {
    title: string
    handleClick: (email: string, pass: string) => void
}

const Form: React.FC<PropsType> = ({title, handleClick}) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div>
            <TextField value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       id="outlined-basic"
                       label="email"
                       variant="outlined"
                       type="email"
                       placeholder="Email"
            />
            <TextField value={pass}
                       onChange={(e) => setPass(e.target.value)}
                       id="outlined-basic"
                       label="password"
                       variant="outlined"
                       type="password"
                       placeholder="Password"
            />
            <Button onClick={() => handleClick(email, pass)} variant="contained" color="success" type="submit">
                {title}
            </Button>
        </div>
    )
}

export default Form