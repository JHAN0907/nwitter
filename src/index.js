import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// intdex.html에 있는 root id를 가진 요소(div) 가져와 root 만들기
const root = ReactDOM.createRoot(document.getElementById('root'));
// 해당 root 안에 아래의 화면을 전달한다.
// ./App에서 가져온 App을 사용하였다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

