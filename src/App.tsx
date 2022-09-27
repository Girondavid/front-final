import { Route, Routes } from "react-router-dom";
import FrontCart from "./components/FrontCart";
import AppUser from "./components/UserLogin";
import UserSing_in from "./components/UserSign_in";
import UserFront from "./components/UserFront";

const App = () => {
  return (
    <Routes>
      <Route path="/products" element={<FrontCart />}/>
      <Route path="/sign_up" element={<AppUser/>}/>
      <Route path="/sign_in" element={<UserSing_in/>}/>
      <Route path="/User" element={<UserFront/>}/>
    </Routes>
  );
}

export default App;