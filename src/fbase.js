// 버전이 바뀌어서 원하는 폴더를 지정할 때 compat을 추가해야 함
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

firebase.initializeApp(firebaseConfig);

// export const를 사용하면 auth Service의 이름을 가진체 사용할 수 있는 것으로 보인다.
// 또한 export const를 여러개 사용하여 다수의 모듈을 내보낼 수도 있는 것 같다.
export const authService = firebase.auth();

export const firebaseInstance = firebase;

export const dbService = firebase.firestore();