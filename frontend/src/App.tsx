import { Route, Routes } from "react-router-dom";
import Basic from "./layouts/Basic";
import Home from "./pages/homepage";
function App() {
  return (
    <Routes>
      <Route element={<Basic />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
      </Route>
      <Route path="/login" element={<div>Login</div>} />
    </Routes>
  );
}

export default App;
