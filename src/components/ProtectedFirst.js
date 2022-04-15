import {API} from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

export function ProtectedFirst(){
    const {user}=useAuthenticator((context)=>[context.user]);
    const [jokes,setJokes]=useState("");

    async function getJoke(){
        const requestInfo={
            Authorization:`${user.getSignInUserSession().getIdToken().getJwtToken()}`
        };

        const data = await API.get("apiguard1","/jokes",requestInfo);
        console.log("data",data);
        setJokes(data);
    }
    return (<><h1>ProtectedFirst</h1>
    <button onClick={()=>getJoke()}>Get Joke</button><br />
    {jokes}
    </>);
}