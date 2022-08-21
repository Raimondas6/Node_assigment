import {useEffect, useState} from 'react';
import SingleUserPage from "./SingleUserPage";
import SingleUser from "../components/SingleUser";

const AllUsersPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log("asdafs")

        fetch("http://localhost:4000/allUsers")
            .then(res => res.json())
            .then(data => {
                console.log(data.message)
                console.log("asdasda")
                setUsers(data.message)
            })
    }, [])




    return (
        <div className="d-flex f-wrap">
            {users.map(x => <SingleUser user={x} key={x._id}/>)}
        </div>
    );
};

export default AllUsersPage;