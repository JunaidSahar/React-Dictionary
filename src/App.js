import axios from "axios";
import { useEffect, useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
