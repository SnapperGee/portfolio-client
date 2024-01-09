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

        ]
    },
    {
        title: "Hermes",
        href: {
            app: null,
            github: "https://github.com/SnapperGee/node-hermes-hrms"
        },
        description:
            "An employee management application with a CLI.",
        responsibilities: [

        ]
    },
    {
        title: "Javascript Quiz",
        href: {
            app: "https://snappergee.github.io/js-quiz",
            github: "https://github.com/SnapperGee/js-quiz"
        },
        description:
            "Web app that presents a timed quiz on JavaScript fundamentals to the user.",
        responsibilities: [

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

        ]
    }
]);

export default projects;
