import React from 'react';
import {useNavigate} from "react-router-dom";

const SingleUser = ({user}) => {

    const nav = useNavigate()

    return (
        <div onClick={() => nav("/user/"+user._id)}>
            <img src={user.photo} alt=""/>
            <div>{user.username}</div>
        </div>
    );
};

export default SingleUser;