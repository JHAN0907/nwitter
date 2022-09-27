import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn, userObj, refreshUser}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj = {userObj}/>}
            <Routes>
                {isLoggedIn?(
                    <>
                        <Route exac path="/" element={<Home userObj={userObj}/>} />
                        <Route exac path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser}/>}/>
                    </>
                ):
                (<Route exac path="/" element={<Auth/>}/>)}
                {/* <Route path="*" element={<Navigate from="*" to="/"/>}/> */}
            </Routes>
        </Router>
    )
}

export default AppRouter;