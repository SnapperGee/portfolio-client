import HeaderNav from "./component/header-nav";

import { Outlet } from "react-router-dom";

const App = () =>
(
    <>
        <header>
            <HeaderNav />
        </header>
        <main>
            <Outlet />
        </main>
    </>
);

export default App;
