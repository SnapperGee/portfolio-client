/**
 * Contains the component used to generate icon links to the deployed apps, if applicable, and github repo for each app
 * in the {@link projects} component.
 *
 * @module app-github-icon-links
 */

import { PlayCircleIcon } from "@heroicons/react/24/outline";

interface props {
    classes: string;
    app: string | null;
    github: string;
    height: number;
}

/**
 * The app and github icon links to display for each project on the projects page.
 *
 * @param props The classes to apply to the div, the app link, the github link, and the height of the icons.
 *
 * @returns the div used to display the app and github links on the projects page.
 */
export const AppGithubIconLinks = ({ classes, app, github, height }: props) => (
    <div className={`flex ${classes ? classes : ""}`}>
        {app ? (
            <>
                <a
                    href={app}
                    className="flex items-center text-gray-300 hover:scale-105 hover:text-gray-100 active:scale-100"
                >
                    <PlayCircleIcon className={`h-${height}`} />
                    <p className="ms-1">App</p>
                </a>
                <a
                    href={github}
                    className="flex items-center text-gray-300 hover:scale-105 hover:text-gray-100 active:scale-100"
                >
                    <svg className={`h-${height}`} fill="currentColor" viewBox="0 0 24 24">
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className="ms-1">Github repo</p>
                </a>
            </>
        ) : (
            <>
                <a
                    href={github}
                    className="flex items-center text-gray-300 hover:scale-105 hover:text-gray-100 active:scale-100"
                >
                    <svg className={`h-${height}`} fill="currentColor" viewBox="0 0 24 24">
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className="ms-1">Github repo</p>
                </a>
            </>
        )}
    </div>
);

export default AppGithubIconLinks;
