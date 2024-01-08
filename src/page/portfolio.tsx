import { PlayCircleIcon } from "@heroicons/react/24/outline";

const projects = [
    {
        title: "The Weather",
        href: {
            app: "https://snappergee.github.io/the-weather/",
            github: "https://github.com/SnapperGee/the-weather"

        },
        description:
            "Weather app to look up the weather conditions by city."
    },
    {
        title: "Day Planner",
        href: {
            app: "https://snappergee.github.io/day-planner/",
            github: "https://github.com/SnapperGee/day-planner"
        },
        description:
            "Daily event/reminder schedule manager."
    },
    {
        title: "Password Generator",
        href: {
            app: "https://snappergee.github.io/password-generator/",
            github: "https://github.com/SnapperGee/password-generator"
        },
        description:
            "Generate a string of text with constraints."
    },
    {
        title: "Javascript Quiz",
        href: {
            app: "https://snappergee.github.io/js-quiz/",
            github: "https://github.com/SnapperGee/js-quiz"
        },
        description:
            "Web app that presents a timed quiz on JavaScript fundamentals to the user."
    },
    {
        title: "Readme Generator",
        href: {
            app: null,
            github: "https://github.com/SnapperGee/cli-readme-generator"
        },
        description:
            "Generate a README markdown file via an interactive CLI."
    }
]

const Portfolio = () =>
(
    <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Portfolio</h2>
                <p className="mt-2 text-lg leading-8 text-gray-300">
                    Below are links to projects I have created and/or worked on.
                </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {
                projects.map((project, index) => (
                    <div key={index} className="flex max-w-xl flex-col items-start justify-between p-4 border border-gray-600">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200">
                            {project.title}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{project.description}</p>
                        <div className={`flex mt-3 self-stretch justify-${project.href.app ? "between" : "center"}`}>
                        {
                            project.href.app
                            ? <>
                                    <a href={project.href.app} className="flex items-center text-gray-300 hover:text-gray-100 hover:scale-105 active:scale-100">
                                        <PlayCircleIcon className="h-8" />
                                        <p className="ms-1">App</p>
                                    </a>
                                    <a href={project.href.github} className="flex items-center text-gray-300 hover:text-gray-100 hover:scale-105 active:scale-100">
                                        <svg className="h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <p className="ms-1">Github repo</p>
                                    </a>
                                </>
                            :  <>
                                    <a href={project.href.github} className="flex items-center text-gray-300 hover:text-gray-100 hover:scale-105 active:scale-100">
                                        <svg className="h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <p className="ms-1">Github repo</p>
                                    </a>
                                </>
                            }
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
);

export default Portfolio;
