/**
 * The root parent component of the application (excluding the component rendered in {@link main}).
 * @module app
 */

import HeaderNav from "./component/header-nav";
import FooterNav from "./component/footer-nav";
import { Outlet } from "react-router-dom";

/**
 * The root parent component of the application (excluding the component rendered in {@link main}).
 * @returns The root parent component of the application (excluding the component rendered in {@link main}).
 */
export default function App() {
    return (
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
}
