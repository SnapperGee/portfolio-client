import Navbar from "./component/navbar";
import { Outlet } from "react-router-dom";

const App = () =>
(
    <>
        <Navbar />
        <Outlet />
    </>
);

export default App;
