import { Route, Routes } from "react-router-dom";
import Basic from "./layouts/Basic";
import Home from "./pages/home";
import Register from './pages/register';
import Login from './pages/login';
import RestaurantDetails from "./pages/restaurantDetails";
import AddMenuItem from "./pages/addMenuItem";

function App() {
  return (
    <Routes>
      <Route element={<Basic />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/restaurant/addItem" element={<AddMenuItem/>} />
      </Route>
      
    </Routes>
  );
}

export default App;
