import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProfileCard from "./components/profile/Profilecard";
import Updatecard from './components/profile/Update';
import Addcard from "./components/addcard/add";

function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProfileCard/>}/>
        <Route exact path="/update" element={<Updatecard />}/>
        <Route exact path="/add" element={<Addcard/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
