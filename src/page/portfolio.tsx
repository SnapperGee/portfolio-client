/**
 * Contains the Portfolio webpage component for showcasing projects I've worked on.
 * @module portfolio
 */

import { AppGithubIconLinks } from "../component/app-github-icon-links";
import { PROJECTS } from "../constant/projects";

/**
 * The Portfolio webpage component for showcasing projects I've worked on.
 * @returns The Portfolio webpage component.
 */
export const Portfolio = () => (
    <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                    Portfolio
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-300">
                    Below are links to projects I have created and/or worked on.
                </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-800 pt-10 sm:mt-16 sm:grid-cols-2 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="flex max-w-xl flex-col items-start justify-between border border-gray-600 p-4"
                    >
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200">
                            {project.title}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">
                            {project.description}
                        </p>
                        <AppGithubIconLinks
                            {...{
                                ...project.href,
                                height: 8,
                                classes: `mt-3 self-stretch justify-${project.href.app ? "between" : "center"}`
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Portfolio;
