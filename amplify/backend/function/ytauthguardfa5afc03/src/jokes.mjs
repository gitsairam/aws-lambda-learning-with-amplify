import axios from 'axios';

export const getJokes=async ()=>{


    try{
        const response=await axios.get("https://icanhazdadjoke.com/",{
            headers:{
                Accept:"application/json",
                "User-Agent":"axios 0.20.1"
            }
        });

        console.log("received:",response.data);
        return response.data;
    }
    catch(err){
        console.log("error:",err)
    }
}