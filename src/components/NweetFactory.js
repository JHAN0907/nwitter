import { useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";

const NweetFactory = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");


    const onFileChange = (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result }
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };

    const onClearAttachment = () => setAttachment("");

    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        try{
            if(attachment !== ""){
                const attachmentRef = storageService
                        .ref()
                        .child(`${userObj.uid}/${uuidv4()}`);
                const response = await attachmentRef.putString(attachment, "data_url");
                attachmentUrl = await response.ref.getDownloadURL();
            }
            await dbService.collection("nweets").add({
                text: nweet,
                createdAt: Date.now(),
                creatorId: userObj.uid,
                attachmentUrl,
            });
            setNweet("");
            setAttachment("");
        } catch(error){
            console.log(error);
        } 
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;

        setNweet(value);
    };
    return (
        <form onSubmit={onSubmit}>
            <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
            <input type="file" accept="image/*" onChange={onFileChange} />
            <input type="submit" value="Nweet" />
            {attachment && (
                <div>
                    <img src={attachment} width="50px" height="50px" />
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}
        </form>
    );
};

export default NweetFactory;