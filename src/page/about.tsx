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
        <div className="my-24 flex flex-col items-center justify-around px-8 md:flex-row">
            <div className="mb-4 md:mb-0 md:mr-4">
                <img
                    className="h-96 min-w-96 rounded-lg bg-white"
                    src={SnapperGeeIcon}
                    alt="Snapper G profile icon picture"
                />
            </div>
            <div className="text-gray-300 md:text-left">
                <h4 className="text-lg font-bold">Graham Auger</h4>
                <p className="my-1">
                    I&apos;ve been a practicing software engineer for half a decade and have experience ranging from
                    implementing front end client facing interfaces to back end server side logic and database
                    administration. I also have a certificate in full stack development from the University of
                    California Berkeley extension Computer Science training course. This has involved working in a
                    variety of environments utilizing various languages and technologies including:
                </p>
                <ul className="list-disc ms-12">
                    <li>npm & node</li>
                    <li>React</li>
                    <li>HTML, SASS/CSS, & TypeScript/JavaScript</li>
                    <li>TailwindCSS & Bootstrap</li>
                    <li>.NET & C<i>#</i></li>
                    <li>Java & Gradle</li>
                    <li>SQL & NoSQL</li>
                    <li>Python</li>
                </ul>
                <p className="my-1">
                    In addition to software development, I love art and being able to see and experience the
                    creativity of others and the the worlds and characters an artist creates. Particularly through
                    drawings, animations, music, and photography. The Studio Ghibli films are perfect examples of
                    what I love seeing in art.
                    I&apos;m also a sucker for The Lion King and most Pixar movies, but who isn&apos;t?
                </p>
            </div>
        </div>
    );
}
