import "../sass/about-me.scss";
import SnapperGeeIcon from "../assets/snapper_g_icon.svg";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

const ArrowRight = <ArrowRightCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" id="arrow"/>;

const moreBtnClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
{
    event.currentTarget.querySelector("#arrow")?.classList.toggle("rotateDown");
};

const MoreBtn = () =>
(
    <button
        type="button"
        onClick={moreBtnClickHandler}
        className="inline-flex items-center my-4 gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        {ArrowRight}
        More
    </button>
);

const AboutMe = () =>
(
    <div className="flex flex-col sm:flex-row justify-center items-center px-8">
        <div className="mb-4 sm:mb-0 sm:mr-4">
            <img
                className="h-32 bg-white min-w-32 rounded-lg"
                src={SnapperGeeIcon}
                alt="Snapper G"
            />
        </div>
        <div className="self-center sm:text-left text-gray-300">
            <h4 className="text-lg font-bold">Graham Auger</h4>
            <p className="mt-1">
                As a passionate software developer with a few years of programming experience primarily as a hobbyist, I
                have honed a diverse skill set that encompasses both front-end and back-end technologies. My technical
                proficiency includes a range of programming languages such as C#, Java, JavaScript, TypeScript, Python,
                and SQL, along with in-depth knowledge of web development standards like HTML and CSS complemented by
                SASS.
            </p>

            <MoreBtn />

            <div className="space-y-4">
                <p>
                    I am proficient in utilizing build tools and package managers such as Gradle and Node/npm, and have
                    experience in implementing robust testing solutions using Junit Jupiter and Mocha with Chai testing
                    frameworks. My expertise extends to styling with frameworks like Bootstrap and Tailwind, which enables
                    me to create visually appealing and responsive user interfaces.
                </p>

                <p>
                    I have further strengthened my full-stack development capabilities by completing a comprehensive
                    Node-based course, where I received certification. This course enriched my understanding of ReactJS,
                    ExpressJS, Handlebars, Webpack, and jQuery, equipping me with the skills to build and deploy dynamic,
                    scalable applications.
                </p>

                <p>
                    With a strong foundation in both the theoretical and practical aspects of software development, I am
                    eager to bring my blend of skills and passion for coding to a professional setting, where I can
                    contribute to impactful projects and continue my journey of learning and growth in the field of software
                    development.
                </p>
            </div>
        </div>
    </div>
);

export default AboutMe;
