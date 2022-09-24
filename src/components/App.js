import { useState, useEffect } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  // useEffect는 특정한 상황에서 특정 행동을 하고 싶을 때 사용하는 것이다.
  // 최초의 1회만 작동하도록 함.
  useEffect(()=>{
    // observer를 설정한 것으로 userEffect에 다시 들어오지 않아도 혼자 변화를 감시한다.
    // 변화가 되었다면 작동하여 isLoggedIn 변수를 변화한다.
    authService.onAuthStateChanged((user)=> {
      if(user){
        setIsLoggedIn(user);
        setUserObj(user);
      } else{
        setIsLoggedIn(false);
        setUserObj(null);
      }
      // 한번 이 함수가 작동했다면 로그인 됬든 안됬든 검사는 했으므로 초기화를 true로 설정
      setInit(true);
    });
  },[])

  return (
    <>
      {
        init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : "initializing..."
      }
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
