import { HeaderNav } from "./component/header-nav";
import { FooterNav } from "./component/footer-nav";
import { Outlet } from "react-router-dom";

export const App = () =>
(
    <>
        <header className="shrink-0">
            <HeaderNav />
        </header>
        <main className="flex-1">
            <Outlet />
        </main>
        <footer className="shrink-0">
            <FooterNav />
        </footer>
    </>
);

export default App;
