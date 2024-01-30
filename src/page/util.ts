/**
 * Contains utility functions for the webpages.
 * @module util
 */

/**
 * List of technologies to be listed on the resume page.
 */
export const technologies: readonly string[] = [
    "node", "npm", "react", "express", "handlebars", "jquery", "webpack", "vite", "tailwind", "bootstrap", "mocha",
    "chai", "typedoc", "typescript", "javascript", "sass", "css", "html", "prisma", "graphQL", "MariaDB", "MySQL",
    "PostgreSQL", "MongoDB", ".NET", "C#", "Gradle", "Java", "JavaFX", "JUnit", "Python", "bash"
];

interface Project
{
    title: string;
    href: {
        app: string | null;
        github: string;
    };
    description: string;
    responsibilities: readonly string[];
}

/**
 * The project data for the projects page. This includes the title, links to the deployed app if applicable,
 * description, and responsibilities for each project.
 */
export const projects: readonly Readonly<Project>[] = Object.freeze([
    {
        title: "The Weather",
        href: {
            app: "https://snappergee.github.io/the-weather",
            github: "https://github.com/SnapperGee/the-weather"

        },
        description:
            "Weather app to look up the weather conditions by city and country.",
        responsibilities: [
            "Utilize features of bootstrap to implement a modern looking responsive design.",
            "Use the Openweathermap API to retrieve the current weather conditions and the 5 day forecast for a city.",
            "Use DayJS to account for timezones so correct times would be displayed.",
            "Configure the webpack development environment to build and bundle the application appropriately for development or distribution.",
            "Validate input to ensure a valid query could be made using the Openweathermap API.",
            "Implement query history feature so queries are stored and can be recalled.",
            "Write application documentation."
        ]
    },
    {
        title: "Bookworm",
        href: {
            app: "https://snappergee.github.io/bookworm",
            github: "https://github.com/SnapperGee/bookworm"

        },
        description:
            "Find book recommendations based on best sellers and genre/topics.",
        responsibilities: [
            "Use the OpenLibrary API to retrieve book information based on genre.",
            "Use tailwind to create a responsive interface for getting book genre input from a user.",
            "Use the user input to query the OpenLibrary API for books of that genre.",
            "Manage the webpack configuration.",
            "Manage and coordinate pull requests from project contributors.",
        ]
    },
    {
        title: "Day Planner",
        href: {
            app: "https://snappergee.github.io/day-planner",
            github: "https://github.com/SnapperGee/day-planner"
        },
        description:
            "Daily event/reminder schedule manager.",
        responsibilities: [
            "Utilize DayJS to account for time zone corrections.",
            "Implement an interface with sass and bootstrap.",
            "Use JQuery and typescript to implement the application logic and add further interactivity to the interface.",
            "Persist data to local storage."
        ]
    },
    {
        title: "Password Generator",
        href: {
            app: "https://snappergee.github.io/password-generator",
            github: "https://github.com/SnapperGee/password-generator"
        },
        description:
            "Generate a string of text with constraints.",
        responsibilities: [
            "Use vanilla JavaScript to implement the application logic and additional interface interactivity.",
            "Implement custom styling via vanilla CSS."
        ]
    },
    {
        title: "Compare",
        href: {
            app: null,
            github: "https://github.com/SnapLib/typescript-compare"
        },
        description:
            "Compare 2 JavaScript objects to each other.",
        responsibilities: [
            "Implement unit tests with the Mocha testing framework and Chai assertion library.",
            "Generate test reports with Mochaewsome.",
            "Generate documentation with Typedoc.",
            "Use typescript to implement the application logic.",
            "Use eslint and editor config to enforce code style and formatting."
        ]
    },
    {
        title: "Hermes",
        href: {
            app: null,
            github: "https://github.com/SnapperGee/node-hermes-hrms"
        },
        description:
            "An CLI based employee management application.",
        responsibilities: [
            "Create MySQL database for tracking and managing company employee.",
            "Use MySQL2 package to create an API for interacting with database.",
            "Use inquirer package to create a CLI interface for interacting with the API."
        ]
    },
    {
        title: "JS Quiz",
        href: {
            app: "https://snappergee.github.io/js-quiz",
            github: "https://github.com/SnapperGee/js-quiz"
        },
        description:
            "Web app that presents a timed quiz on JavaScript fundamentals to the user.",
        responsibilities: [
            "Use sass and bootstrap to create a responsive interface.",
            "Use typescript to implement the application logic.",
            "Use eslint to enforce code style and formatting."
        ]
    },
    {
        title: "Readme Generator",
        href: {
            app: null,
            github: "https://github.com/SnapperGee/cli-readme-generator"
        },
        description:
            "Generate a README markdown file via an interactive CLI.",
        responsibilities: [
            "Use inquirer package to create a CLI interface for getting user input.",
            "Use vanilla ESM JavaScript to implement the application logic."
        ]
    }
]);
