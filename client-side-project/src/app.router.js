import { Route,Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";



export function AppRouter(){
   return(
    <div>
         <Routes>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/" element={<Login></Login>}></Route>
    </Routes>
    </div>
   )
}