/**
 * This module contains the Error webpage component that is displayed if an invalid route is attempted to be navigated.
 * @module error
 */

import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { BookOpenIcon, DocumentTextIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid"

/**
 * Links to webpages that can be navigated to.
 */
const links = [
    {
        name: "About",
        to: "/",
        description: "My general background information.",
        icon: UserIcon,
    },
    {
        name: "Portfolio",
        to: "/portfolio",
        description: "Portfolio showcasing various projects and works.",
        icon: BookOpenIcon },
    {
        name: "Contact",
        to: "/contact",
        description: "Contact information.",
        icon: EnvelopeIcon,
    },
    {
        name: "Resume",
        to: "/resume",
        description: "Workforce background information.",
        icon: DocumentTextIcon
    }
];

/**
 * This module contains the Error webpage component that is displayed if an invalid route is attempted to be navigated.
 *
 * @returns The Error webpage component.
 */
export const Error = () =>
(
    <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
            <p className="text-5xl font-semibold leading-8 text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">This page does not exist</h1>
            <p className="mt-4 text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
                Sorry, the page you&apos;re looking for doesn&apos;t exist.
            </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
            <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
                {
                    links.map((link) => (
                        <li key={link.to} className="relative flex gap-x-6 py-6">
                            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                                <link.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                            </div>
                            <div className="flex-auto">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                                    <Link to={link.to}>
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {link.name}
                                    </Link>
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-300">{link.description}</p>
                            </div>
                            <div className="flex-none self-center">
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  );

export default Error;
