import { Route, Routes } from "react-router-dom";
import Order from "./component/Layout/Orders/Order";
import Home from "./component/Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Order />} />
        <Route index path="orders" element={<Order />} />
      </Route>
    </Routes>
  );
}

export default App;
