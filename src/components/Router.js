import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation/>}
            <Routes>
                {isLoggedIn?(
                    <>
                        <Route exac path="/" element={<Home/>} />
                        <Route exac path="/profile" element={<Profile/>}/>
                    </>
                ):
                (<Route exac path="/" element={<Auth/>}/>)}
                {/* <Route path="*" element={<Navigate from="*" to="/"/>}/> */}
            </Routes>
        </Router>
    )
}

export default AppRouter;