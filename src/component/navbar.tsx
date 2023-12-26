import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SnapperGeeIcon from "../assets/snapper_g_icon.svg";
import SnapLibLogo from "../assets/snaplib_logo_fullrez.png";

const EMAIL = "gauger1992@gmail.com";

const classNames = (...classes: string[]): string => classes.join(" ");

const Navbar = () =>
(
    <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
        <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-8 w-auto"
                            src={SnapLibLogo}
                            alt="SnapLib"
                        />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                            About me
                            </a>
                            <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                            Portfolio
                            </a>
                            <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                            Contact
                            </a>
                            <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                            Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex items-center">
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                    className="h-8 w-8 rounded-full bg-white"
                                    src={SnapperGeeIcon}
                                    alt="Snapper G"
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                        >
                                        Your Profile
                                        </a>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                        >
                                        Settings
                                        </a>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                        >
                                        Sign out
                                        </a>
                                    )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
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
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                    About me
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    Portfolio
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    Contact
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    Resume
                </Disclosure.Button>
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
