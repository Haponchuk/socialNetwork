import './App.css';
import Header from './components/Header/Header'
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import ErrorPage from "./components/ErrorPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const App = () => {
    return (
        <Router>
            <div className="app-wrapper">

                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/messages" element={<Messages/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </div>

            </div>
        </Router>
    );
}


export default App;

