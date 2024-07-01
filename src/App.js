import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import "./assets/css/style.css";

function App() {
  return (
    <div className="wrap">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
