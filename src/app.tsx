import HeaderNav from "./component/header-nav";
import FooterNav from "./component/footer-nav";
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
        <footer>
            <FooterNav />
        </footer>
    </>
);

export default App;
