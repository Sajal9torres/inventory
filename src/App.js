// import { Router } from 'react-router-dom';
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellItems from "./pages/sellitems/SellItems";
import Purchase from "./pages/purchase/Purchase";
import Mystock from "./pages/mystock/Mystock";
import Settings from "./pages/settings/Settings";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="/sellitems" element={<SellItems />} />
          <Route path="/purchaseitem" element={<Purchase />} />
          <Route path="/mystock" element={<Mystock />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
