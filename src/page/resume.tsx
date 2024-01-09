import { projects } from "./util/projects";
import { AppGithubIconLinks } from "../component/app-github-icon-links";
import "../sass/contact.scss";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Hr = () => <hr className="h-px my-6 border-0 bg-gray-600"/>;

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
            <Hr />
            <p className="mt-10 font-bold sm:text-lg text-gray-200">PROJECTS</p>
            <ol className="list-decimal mb-14 ms-10 sm:ms-14 text-sm sm:text-base space-y-4">
            {
                projects.map((project, index) => {
                    return (
                        <li key={index}>
                            <div className="flex h-10 items-center">
                            <p className="font-semibold">{project.title}</p>
                            <p className="mx-4">|</p>
                                <AppGithubIconLinks {...{
                                    ...project.href,
                                    inline: true,
                                    height: 6,
                                    classes: `w-64 justify-${project.href.app ? "between" : "start"}`
                                }} />
                            </div>
                            <p>{project.description}</p>
                            <ul className="ms-10 sm:ms-14 list-disc space-y-2">
                                {project.responsibilities.map((responsibility, index) =>
                                (
                                    <li key={index}>{responsibility}</li>
                                ))}
                            </ul>
                        </li>
                    )
                })
            }
            </ol>
        </div>
    </>
);

export default Resume;
