import Navbar from "./component/navbar";
import { Outlet } from "react-router-dom";

const App = () =>
(
    <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </>
);

export default App;
