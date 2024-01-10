import { projects } from "./util/projects";
import { AppGithubIconLinks } from "../component/app-github-icon-links";
import "../sass/resume.scss";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const recentTechnologies = [
    "node", "npm", "react", "express", "handlebars", "jquery", "webpack", "vite", "tailwind", "bootstrap", "mocha",
    "chai", "typedoc", "typescript", "javascript", "sass", "css", "html", "prisma", "graphQL", "MariaDB", "MySQL",
    "PostgreSQL", "MongoDB", ".NET", "C#", "Gradle", "Java", "JavaFX", "JUnit", "Python", "bash"
];

const Resume = () =>
(
    <>
        <div className="text-center text-gray-200 my-10">
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
                recentTechnologies.map((technology, index) =>
                <div key={index}>
                    <ChevronRightIcon className="inline-block w-4 h-4 me-1" />
                    <p className="inline-block">{technology}</p>
                </div>)
            }
            </div>
            <hr className="h-px my-6 border-0 bg-gray-600"/>
            <p className="mt-10 font-bold sm:text-lg text-gray-200">PROJECTS</p>
            <ol className="list-decimal mb-14 ms-10 sm:ms-14 text-sm sm:text-base space-y-4">
            {
                projects.map((project, index) =>
                    (
                        <li key={index}>
                            <div className="p-4 w-max border border-gray-600">
                                <p className="font-semibold text-gray-300 text-lg">{project.title}</p>
                                <hr className="h-px my-4 border-0 bg-gray-600"/>
                                <AppGithubIconLinks {...{
                                    ...project.href,
                                    inline: true,
                                    height: 6,
                                    classes: `w-64 mb-2 justify-${project.href.app ? "between" : "start"}`
                                }} />
                                <p className="text-gray-300">{project.description}</p>
                                <ul className="ms-10 sm:ms-14 list-disc space-y-2">
                                    {project.responsibilities.map((responsibility, index) =>
                                    (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    )
                )
            }
            </ol>
        </div>
    </>
);

export default Resume;
