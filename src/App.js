
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Layout} from "./components/Layout";
import {Home} from "./components/Home";
import {Authenticator} from "@aws-amplify/ui-react";
import { ProtectedFirst } from './components/ProtectedFirst';
import { ProtectedSecond } from './components/ProtectedSecond';
import {Login} from "./components/Login";
import {RequireAuth} from "./RequireAuth";

function MyRoutes(){
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="/protected" element={<RequireAuth><ProtectedFirst /></RequireAuth>} />
      <Route path="/protected2" element={<RequireAuth> <ProtectedSecond /></RequireAuth>} />
      <Route path="/login" element={<Login />}/>
      

    </Route>
  </Routes>
  </BrowserRouter>)
}

function App() {
  return (
    <Authenticator.Provider>  <MyRoutes /></Authenticator.Provider>
 
  );
}

export default App;
