import { AppGithubIconLinks } from "../component/app-github-icon-links";

const projects = [
    {
        title: "The Weather",
        href: {
            app: "https://snappergee.github.io/the-weather",
            github: "https://github.com/SnapperGee/the-weather"

        },
        description:
            "Weather app to look up the weather conditions by city."
    },
    {
        title: "Bookworm",
        href: {
            app: "https://snappergee.github.io/bookworm",
            github: "https://github.com/SnapperGee/bookworm"

        },
        description:
            "Find book recommendations based on best sellers and genre/topics."
    },
    {
        title: "Day Planner",
        href: {
            app: "https://snappergee.github.io/day-planner",
            github: "https://github.com/SnapperGee/day-planner"
        },
        description:
            "Daily event/reminder schedule manager."
    },
    {
        title: "Password Generator",
        href: {
            app: "https://snappergee.github.io/password-generator",
            github: "https://github.com/SnapperGee/password-generator"
        },
        description:
            "Generate a string of text with constraints."
    },
    {
        title: "Compare",
        href: {
            app: null,
            github: "https://github.com/SnapLib/typescript-compare"
        },
        description:
            "Compare 2 JavaScript objects to each other."
    },
    {
        title: "Hermes",
        href: {
            app: null,
            github: "https://github.com/SnapperGee/node-hermes-hrms"
        },
        description:
            "An employee management application with a CLI."
    },
    {
        title: "Javascript Quiz",
        href: {
            app: "https://snappergee.github.io/js-quiz",
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
                        <AppGithubIconLinks {...{
                            ...project.href,
                            height: 8,
                            classes: `flex mt-3 self-stretch justify-${project.href.app ? "between" : "center"}`
                        }} />
                    </div>
                ))
            }
            </div>
        </div>
    </div>
);

export default Portfolio;
