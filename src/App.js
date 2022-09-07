import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header'
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Friends from "./components/Friends/Friends";
import Feed from "./components/Feed/Feed";
import Community from "./components/Community/Community";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <Router>
            <div className="app-wrapper">

                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile state={props.state.profilePage}/>}/>
                        <Route path="/" element={<Profile state={props.state.profilePage}/>}/>
                        <Route path="/messages/*" element={<Messages state={props.state.messagePage}/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                        <Route path="/feed" element={<Feed/>}/>
                        <Route path="/community" element={<Community/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </div>

            </div>
        </Router>
    );
}


export default App;

