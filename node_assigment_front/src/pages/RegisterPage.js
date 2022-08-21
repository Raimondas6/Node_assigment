import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom"

const RegisterPage = () => {

    const usernameRef = useRef()
    const passwordOneRef = useRef()
    const passwordTwoRef = useRef()
    const nav = useNavigate()

    const [error, setError] = useState("")

    function registerUser() {
        const user = {
            username: usernameRef.current.value,
            passwordOne: passwordOneRef.current.value,
            passwordTwo: passwordTwoRef.current.value
        }
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }

        fetch("http://localhost:4000/registerUser", options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (!data.error) nav("/login")
                return setError(data.message)
            })

    }

    return (
        <div>
            <div className="d-flex flex-column w-300">
                <input ref={usernameRef} type="text" placeholder="username"/>
                <input ref={passwordOneRef} type="text" placeholder="password"/>
                <input ref={passwordTwoRef} type="text" placeholder="repeat password"/>
                {error && <div style={{color: "red"}}>{error}</div>}
            </div>
            <div>
                <button onClick={registerUser}>Register</button>
            </div>
        </div>
    );
};

export default RegisterPage;