import React from "react";
import { Routes, Route} from 'react-router-dom';
import Main from "./pages/Main";
import Boost from "./pages/Boost";
import Fren from "./pages/Fren";
import About from "./pages/About";
import League from "./pages/League";
import PartyKings from "./pages/PartyKings";
import Squad from "./pages/Squad";
import Stats from "./pages/Stats"


function App() {
  return (
    <Routes>
      <Route path="/" Component={Main}/>
      <Route path="/boost" Component={Boost}/>
      <Route path="/fren" Component={Fren}/>
      <Route path="/about" Component={About}/>
      <Route path="/league" Component={League}/>
      <Route path="/party" Component={PartyKings}/>
      <Route path="/squad" Component={Squad}/>
      <Route path="/stats" Component={Stats}/>
    </Routes>
  );
}

export default App;
