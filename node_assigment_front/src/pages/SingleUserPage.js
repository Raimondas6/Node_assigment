import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import SingleUser from "../components/SingleUser";
import SingleItem from "../components/SingleItem";

const SingleUserPage = () => {

    const {id} = useParams()
    const [user, setUser] = useState(null)

    function getUser() {
        fetch("http://localhost:4000/singleUser/"+id)
            .then(res => res.json())
            .then(data => {
                setUser(data.user)

                console.log(data.user)
                console.log("asdasda")

            })
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <div>
            <div>
                {user && <SingleUser user={user}/>}

            </div>
            <div>
                <div>Items list:
                    <SingleItem/>

                </div>

            </div>
        </div>
    );
};

export default SingleUserPage;