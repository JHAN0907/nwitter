import { dbService} from "fbase";
import { useState, useEffect } from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";


const Home = ({ userObj }) => {

    const [nweets, setNweets] = useState([]);


    useEffect(() => {
        dbService.collection("nweets").orderBy("createdAt", "desc").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        })
    }, []);

    

    return (
        <div className="container">
           <NweetFactory userObj={userObj}/>
            <div style={{marginTop: 30}}>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={userObj.uid === nweet.creatorId} />
                ))}
            </div>
        </div>
    );
};

export default Home;