/**
 * Contains the About webpage component that contains a profile image and general info about me.
 *
 * @module about
 */

import SnapperGeeIcon from "../assets/snapper_g_icon.svg";

/**
 * The About webpage component that contains a profile image and general info about me.
 * @returns The About webpage component.
 */
export default function About() {
    return (
        <div className="my-24 flex flex-col items-center justify-center px-8 sm:flex-row">
            <div className="mb-4 sm:mb-0 sm:mr-4">
                <img
                    className="h-64 min-w-64 rounded-lg bg-white"
                    src={SnapperGeeIcon}
                    alt="Snapper G profile icon picture"
                />
            </div>
            <div className="self-center text-gray-300 sm:text-left">
                <h4 className="text-lg font-bold">Graham Auger</h4>
                <p className="mt-1">
                    I&apos;ve been a practicing software engineer for half a decade
                    and have experience ranging from implementing front end client
                    facing interfaces to back end server side logic and database
                    administration. This has involved working in a variety of
                    environments including npm and node, .NET, and Gradle. I have
                    extensive experience with packages such as react, express,
                    graphql, tailwind, and bootstrap. Utilizing all these
                    technologies has involved languages such as C<i>#</i>, Java,
                    Python, SQL, NoSQL, Typescript, Javascript, sass, css, and html.
                    I have a certificate in full stack development from the
                    University of California Berkeley extension Computer science
                    training course.
                </p>
            </div>
        </div>
    );
}
