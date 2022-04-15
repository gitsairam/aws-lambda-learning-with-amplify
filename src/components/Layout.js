import { Outlet, useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

export function Layout(){
const{route,signOut}=useAuthenticator((context)=>[context.route,context.signOut]);
const navigate=useNavigate();

function logOut(){
    signOut();
    navigate("/login");
}

    return (<> 
    <nav>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/protected")}>First Protected Route</button>
        <button onClick={()=>navigate("/protected2")}>Second Protected Route</button>
        {route!=="authenticated"?(<button onClick={()=>navigate("/login")}>Login</button>):(
            <button onClick={()=>logOut()}>Logout</button>
        )}
    </nav>
    <h1>Welcome to simple application</h1>
    <span>{route==="authenticated"?"You are logged in!":"Please Log In"}</span>
    <Outlet />
    </>)
}