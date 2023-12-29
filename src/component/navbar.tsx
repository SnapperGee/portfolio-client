import SnapperGeeIcon from "../assets/snapper_g_icon.svg";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const EMAIL = "gauger1992@gmail.com";

// Current: "bg-gray-900 text-white"
// Default: "text-gray-300 hover:bg-gray-700 hover:text-white"
const INACTIVE_NAV_BTN_CLASSES = "text-gray-300 hover:bg-gray-700 hover:text-white";
const ACTIVE_NAV_BTN_CLASSES = "bg-gray-900 text-white";

const NAV_LINKS = [
    {
        text: "About me",
        to: "/"
    },
    {
        text: "Portfolio",
        to: "/portfolio"
    },
    {
        text: "Contact",
        to: "/contact"
    },
    {
        text: "Resume",
        to: "/resume"
    }
];

const Navbar = () =>
(
    <Disclosure as="nav" className="bg-gray-800 mb-24">
        {({ open }) => (
            <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-auto rounded-full bg-white"
                                src={SnapperGeeIcon}
                                alt="Snapper G"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {
                                    NAV_LINKS.map((navLink) =>
                                    (
                                        <NavLink
                                            key={navLink.to}
                                            to={navLink.to}
                                            className={({ isActive }) =>
                                                `rounded-md px-3 py-2 text-sm font-medium ${isActive ? ACTIVE_NAV_BTN_CLASSES : INACTIVE_NAV_BTN_CLASSES}`
                                            }
                                        >
                                            {navLink.text}
                                        </NavLink>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                    </div>
                    <div className="-mr-2 flex sm:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {
                        NAV_LINKS.map((navLink) =>
                        (
                            <NavLink
                                key={navLink.to}
                                to={navLink.to}
                                className={({ isActive }) =>
                                    `block rounded-md px-3 py-2 text-sm font-medium ${isActive ? ACTIVE_NAV_BTN_CLASSES : INACTIVE_NAV_BTN_CLASSES}`
                                }
                            >
                                {navLink.text}
                            </NavLink>
                        ))
                    }
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full bg-white"
                                src={SnapperGeeIcon}
                                alt="Snapper G"
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-white">Graham Auger</div>
                            <div className="text-sm font-medium text-gray-400">{EMAIL}</div>
                        </div>
                    </div>
                </div>
            </Disclosure.Panel>
            </>
        )}
    </Disclosure>
);

export default Navbar;
