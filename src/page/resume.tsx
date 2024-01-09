import "../sass/contact.scss";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Hr = () => <hr className="h-px my-6 border-0 bg-gray-600"/>;

const recentTechnologies = [
    "node", "npm", "react", "express", "handlebars", "jquery", "webpack", "vite", "tailwind", "bootstrap", "mocha",
    "chai", "typedoc", "typescript", "javascript", "sass", "css", "html", "MariaDB", "MySQL", "PostgreSQL", "MongoDB"
];

const technologies = [
    ".NET", "C#", "Gradle", "Java", "JavaFX", "JUnit", "Python", "bash"
];

const jobHistory = [
    {
        title: "Best Buy Geek Squad Technician",
        startDate: "2018",
        endDate: "present",
        summary: "Installed and repaired various AV equipment and kitchen appliances in clients' homes and businesses.",
        descriptions: [
            "Installed, uninstalled, repaired, and troubleshooted electronic devices such as televisions, receivers/amplifiers, surround sound systems, wireless networks, dishwashers, over the range venting microwaves.",
            "Configured multi channel home theater audio systems and programmed universal remotes to work with such systems."
        ]
    },
    {
        title: "Best Buy Project Team Specialist",
        startDate: "2013",
        endDate: "2018",
        summary: "Set up and repaired various AV Equipment as well as retrieved and stocked product.",
        descriptions: [
            "Set up and maintained televisions, AV receivers, and sound bars displaying content from various sources.",
            "Stored and retrieved various product which sometimes required using pallet jacks and mechanical equipment used for handling televisions and appliances such as stoves, refrigerators, and freezers."
        ]
    },
    {
        title: "Shira Ridge Wealth Management Advisors",
        startDate: "2013",
        endDate: "2015",
        summary: "Organized and maintained client information",
        descriptions: [
            "Input and referenced client data between web based CRM systems and data stored locally confirming data was up to date and synced.",
            "Scanned, shredded, and mailed various documents, often digitizing and archiving hard copies of data."
        ]
    },
    {
        title: "City of San Rafael Redevelopment Agency",
        startDate: "2006",
        endDate: "2011",
        summary: "Had various responsibilities and tasks involved in setting up, running, and tearing down venues for various events held by San Rafael.",
        descriptions: [
            "Was responsible for setting up stages and concession stands for vendors. As well as putting up barricades and blocking roads off to manage vehicle and pedestrian traffic flow.",
            "Managed intersections and parking lots, directing traffic and organizing parking."
        ]
    },
    {
        title: "Comforts Fine City and Home-style Food",
        startDate: "2008",
        endDate: "2010",
        summary: "Primarily responsible for deli and counter work.",
        descriptions: [
            "Responsibilities included interacting with customers and working the register. Chiefly taking orders from the customer, retrieving what was ordered, and charging them for it.",
            "Other responsibilities involved taking inventory, restocking, and maintaining a sanitary working environment, as well as minor food preparation."
        ]
    },
    {
        title: "Far Horizons Archaeological & Cultural Trips",
        startDate: "2006",
        endDate: "2008",
        summary: "Was part of temporary staffing at Far Horizons travel agency where mainly clerical tasks were assigned.",
        descriptions: [
            "Assignments involved cleaning up and a maintaining the company database, which involved organizing materials, as well as, printing, collating, and filing documents."
        ]
    }
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
                I&apos;ve extensively utilized the following technologies:
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
            <p className="mb-1">
                I also have experience working with:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-y-2">
            {
                technologies.map((technology, index) =>
                <div key={index}>
                    <ChevronRightIcon className="inline-block w-4 h-4 me-1" />
                    <p className="inline-block">{technology}</p>
                </div>)
            }
            </div>
            <Hr />
            <p className="mt-10 font-bold sm:text-lg text-gray-200">PROJECTS</p>
            <ul className="listSquare mb-14 ms-10 sm:ms-14 text-sm sm:text-base space-y-4">
            {
                jobHistory.map((job, index) => {
                    const TitleSpan = () => <span className="font-semibold">{job.title} ({job.startDate}-{job.endDate}):</span>;
                    return (
                        <li key={index}>
                            <p><TitleSpan /> {job.summary}</p>
                            <ul className="ms-10 sm:ms-14 list-disc space-y-2">
                                {job.descriptions.map((description, index) =>
                                (
                                    <li key={index}>{description}</li>
                                ))}
                            </ul>
                        </li>
                    )
                })
            }
            </ul>
            {/* <p className="mt-10 font-bold sm:text-lg text-gray-200">WORK EXPERIENCE</p>
            <ul className="listSquare ms-10 sm:ms-14 text-sm sm:text-base space-y-4">
            {
                jobHistory.map((job, index) => {
                    const TitleSpan = () => <span className="font-semibold">{job.title} ({job.startDate}-{job.endDate}):</span>;
                    return (
                        <li key={index}>
                            <p><TitleSpan /> {job.summary}</p>
                            <ul className="ms-10 sm:ms-14 list-disc space-y-2">
                                {job.descriptions.map((description, index) =>
                                (
                                    <li key={index}>{description}</li>
                                ))}
                            </ul>
                        </li>
                    )
                })
            }
            </ul>
            <p className="mt-10 mb-14 text-sm text-gray-400 opacity-60">References available on request.</p> */}
        </div>
    </>
);

export default Resume;
