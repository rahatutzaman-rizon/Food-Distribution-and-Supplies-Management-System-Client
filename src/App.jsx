import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import AppFooter from "./Pages/Shared/Footer";





const App = () => {
  return (
    <div>
    <Navbar>
    </Navbar>
    <Outlet>

    </Outlet>
<AppFooter></AppFooter>
    </div>
  );
};

export default App;