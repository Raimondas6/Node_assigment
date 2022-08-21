import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const usernameRef = useRef()
    const passwordRef = useRef()
    const nav = useNavigate()

    const [error, setError] = useState("")

    function loginUser() {
        const user = {
            username: usernameRef.current.value,
            passwordOne: passwordRef.current.value
        }
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }


        fetch("http://localhost:4000/login", options)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (!data.error) {
                    // setMyUser(data.user)
                    // setAllUsers(data.users)
                    nav('/allUsers')
                }
                return setError(data.message)
            })
    }

    return (
        <div>
            <div>
                <input ref={usernameRef} type="text" placeholder="username"/>
                <input ref={passwordRef} type="text" placeholder="password"/>
                {error && <div style={{color: "red"}}>{error}</div>}
            </div>
            <div>
                <button onClick={loginUser}>Login</button>
            </div>
        </div>
    );
};

export default LoginPage;