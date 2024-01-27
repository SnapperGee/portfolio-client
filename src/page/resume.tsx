/**
 * Contains the Resume webpage component showcasing the technologies tasks/responsibilities I've had experience with.
 * @module resume
 */

import { projects } from "./util";
import { technologies } from "./util";
import { AppGithubIconLinks } from "../component/app-github-icon-links";
import { WorkHistory } from "../component/work-history";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";

/**
 * The Resume webpage component showcasing the technologies tasks/responsibilities I've had experience with.
 * @returns The Resume webpage component showcasing the technologies tasks/responsibilities I've had experience with.
 */
export const Resume = () =>
(
    <>
        <div className="text-center text-gray-200 mt-10">
            <p>Graham Auger</p>
            <p>Email:&#160;
                <a className="hover:text-white underline" href="mailto:contact@graham-auger.dev">
                    contact@graham-auger.dev
                </a>
            </p>
        </div>
        <div className="mx-20 text-gray-300">
            <p className="mb-1">
                Experience with:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-y-2">
            {
                technologies.map((technology, index) =>
                <div key={index}>
                    <ChevronRightIcon className="inline-block w-4 h-4 me-1" />
                    <p className="inline-block">{technology}</p>
                </div>)
            }
            </div>
            <hr className="h-px my-6 border-0 bg-gray-600"/>
            <p className="mt-10 mb-3 font-bold text-xl text-gray-200">PROJECTS</p>
            <ul className="mb-14 ms-14 space-y-4">
            {
                projects.map((project, index) =>
                    <li key={index} className="p-4 w-fit border bg-gray-600/10 border-gray-600">
                        <p className="font-semibold text-gray-300 text-lg">{project.title}</p>
                        <hr className="h-px my-4 border-0 bg-gray-600"/>
                        <AppGithubIconLinks {...{
                            ...project.href,
                            height: 6,
                            classes: `w-64 mb-2 justify-${project.href.app ? "between" : "start"}`
                        }} />
                        <hr className="h-px mt-4 mb-3 border-0 bg-gray-600"/>
                        <p className="text-gray-300">{project.description}</p>
                        <p className="mt-1.5 mb-1 text-gray-300">Responsibilities/contributions included:</p>
                        <div className="overflow-hidden rounded-md border border-gray-600">
                            <ul role="list" className="divide-y divide-gray-600">
                                {project.responsibilities.map((responsibility, index) =>
                                (
                                    <li key={index} className="px-3.5 py-2.5">{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                )
            }
            </ul>
        </div>
        <div className="my-10">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button
                            className="flex w-96 ms-7 justify-between rounded-lg bg-indigo-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
                            aria-expanded={String(open)}
                            aria-controls="additionalInfo"
                        >
                            <span>Additional work experience</span>
                            <ChevronLeftIcon
                                id="arrow"
                                className={`${
                                    open ? "rotateDown" : ""
                                } h-5 w-5 text-white`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-300 space-y-4" id="additionalInfo">
                            <WorkHistory />
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    </>
);

export default Resume;
