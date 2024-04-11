/**
 * Contains the About webpage component that contains a profile image and general info about me.
 *
 * @module about
 */

import ProfilePic from "../assets/pfp.webp";

/**
 * The About webpage component that contains a profile image and general info about me.
 * @returns The About webpage component.
 */
export default function About() {
    return (
        <div className="my-24 flex flex-col items-center justify-around 2xl:justify-center 2xl:gap-x-24 px-8 xl:flex-row">
            <div className="mb-4 xl:mb-0 xl:mr-4">
                <img
                    className="min-w-96 rounded-lg bg-white"
                    height={600}
                    width={600}
                    src={ProfilePic}
                    alt="Snapper G profile icon picture"
                />
            </div>
            <div className="text-gray-300 xl:text-left text-xl max-w-[50rem] xl:max-w-[40rem]">
                <h4 className="text-4xl font-bold mb-2">Graham Auger</h4>
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
