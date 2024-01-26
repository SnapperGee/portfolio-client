/**
 * The root parent application component.
 * @module app
 */

import { HeaderNav } from "./component/header-nav";
import { FooterNav } from "./component/footer-nav";
import { Outlet } from "react-router-dom";

/**
 * The root parent application component.
 * @returns The root parent application component.
 */
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
