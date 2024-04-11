/**
 * Contains the Resume webpage component showcasing the technologies tasks/responsibilities I've had experience with.
 * @module resume
 */

import { PROJECTS } from "../constant/projects";
import { TECHNOLOGIES } from "../constant/technologies";
import { AppGithubIconLinks } from "../component/app-github-icon-links";
import EmploymentHistory from "../component/employment-history";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";

/**
 * The Resume webpage component showcasing the technologies tasks/responsibilities I've had experience with.
 * @returns The Resume webpage component showcasing the technologies tasks/responsibilities I've had experience with.
 */
export default function Resume() {
    return (
        <>
            <div className="mt-10 text-center text-gray-200">
                <p>Graham Auger</p>
                <p>
                    Email:&#160;
                    <a
                        className="underline hover:text-white"
                        href="mailto:contact@graham-auger.dev"
                    >
                        contact@graham-auger.dev
                    </a>
                </p>
            </div>
            <div className="mx-20 text-gray-300">
                <p className="mb-1">Experience with:</p>
                <div className="grid grid-cols-2 gap-y-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
                    {TECHNOLOGIES.map((technology, index) => (
                        <div key={index}>
                            <ChevronRightIcon className="me-1 inline-block h-4 w-4" />
                            <p className="inline-block">{technology}</p>
                        </div>
                    ))}
                </div>
                <hr className="my-6 h-px border-0 bg-gray-600" />
                <a
                    href="https://www.parchment.com/u/s/2AT6"
                    className="text-2xl underline"
                    target="_blank"
                    rel="noreferrer"
                >
                    UC Berkeley Full Stack Development Certification
                </a>
                <p className="mb-3 mt-8 text-2xl font-bold text-gray-200">PROJECTS</p>
                <ul className="mb-14 ms-3 min-w-fit space-y-4 sm:ms-14">
                    {PROJECTS.map((project, index) => (
                        <li
                            key={index}
                            className="w-full border border-gray-600 bg-gray-600/10 p-4"
                        >
                            <p className="text-lg font-semibold text-gray-300">{project.title}</p>
                            <hr className="my-4 h-px border-0 bg-gray-600" />
                            <AppGithubIconLinks
                                {...{
                                    ...project.href,
                                    height: 6,
                                    classes: `w-64 mb-2 justify-${project.href.app ? "between" : "start"}`
                                }}
                            />
                            <hr className="mb-3 mt-4 h-px border-0 bg-gray-600" />
                            <p className="text-gray-300">{project.description}</p>
                            <p className="mb-1 mt-1.5 text-gray-300">
                                Responsibilities/contributions included:
                            </p>
                            <div className="overflow-hidden rounded-md border border-gray-600">
                                <ul role="list" className="divide-y divide-gray-600">
                                    {project.responsibilities.map((responsibility, index) => (
                                        <li key={index} className="px-3.5 py-2.5">
                                            {responsibility}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="my-10">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                className="ms-7 flex w-96 justify-between rounded-lg bg-indigo-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
                                aria-expanded={String(open)}
                                aria-controls="additionalInfo"
                            >
                                <span>Additional work experience</span>
                                <ChevronLeftIcon
                                    id="arrow"
                                    className={`${open ? "rotateDown" : ""} h-5 w-5 text-white`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel
                                className="text-md space-y-4 px-4 pb-2 pt-4 text-gray-300"
                                id="additionalInfo"
                            >
                                <EmploymentHistory />
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    );
}
