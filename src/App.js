import { Home } from "./components/Home.js";
import { FooBar } from "./components/FooBar.js";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/foobar" element={<FooBar/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
