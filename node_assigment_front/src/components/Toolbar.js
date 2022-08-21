import {React} from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className="toolbar-wrapper">
            <div className="toolbar-link-wrapper">
                <Link to="/upload">Upload</Link>
                <Link to="/requests">Requests</Link>
            </div>
            <div>
                <button>Logout</button>
            </div>

        </div>
    );
};

export default Toolbar;