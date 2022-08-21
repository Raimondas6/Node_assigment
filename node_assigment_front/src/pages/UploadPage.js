import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";

const UploadPage = () => {
    const nav = useNavigate()
    const inp = useRef()

    function uploadItem() {
        const item = {
            image: inp.current.value
        }
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        }


        fetch("http://localhost:4000/uploadItem", options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // nav('/singleUser/:id')
                }
            )
    }

    return (
        <div>
            <div>

            </div>
            <div>
                <input ref={inp} type="text" placeholder="image url"/>
                <button onClick={uploadItem}>Upload Item</button>
            </div>

        </div>
    );
};

export default UploadPage;