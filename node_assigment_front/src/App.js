import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import io from 'socket.io-client'
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Toolbar from "./components/Toolbar";
import UploadPage from "./pages/UploadPage";
import RequestsPage from "./pages/RequestsPage";
import AllUsersPage from "./pages/AllUsersPage";
import SingleUserPage from "./pages/SingleUserPage";

const socket = io.connect('http://localhost:4000')

function App() {
    // const [myUser, setMyUser] = useState(null)
    // const [allUsers, setAllUsers] = useState([])
    const [requests, setRequests] = useState([])

    useEffect(() => {
    socket.on("connect", () => {
      console.log("connected")
    })

  }, [])

  return (
          <div className="App">
              <BrowserRouter>
                  <Toolbar/>
                  <Routes>
                      <Route path="/" element={<RegisterPage/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                      <Route path="/upload" element={<UploadPage/>}/>
                      <Route path="/requests" element={<RequestsPage/>}/>
                      <Route path="/allUsers" element={<AllUsersPage/>}/>
                      <Route path="/user/:id" element={<SingleUserPage/>}/>
                  </Routes>
              </BrowserRouter>
          </div>

  );
}

export default App;
