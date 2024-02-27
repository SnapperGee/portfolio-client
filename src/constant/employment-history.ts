interface EmploymentHistory
{
    readonly title: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly summary: string;
    readonly descriptions: readonly string[];
}

/**
 * Array of job history objects consisting of a title, start and end dates, summary, and string array of descriptions.
 */
export const EMPLOYMENT_HISTORY: readonly Readonly<EmploymentHistory>[] = [
    Object.freeze({
        title: "Best Buy Geek Squad Technician",
        startDate: "2018",
        endDate: "present",
        summary: "Installed and repaired various AV equipment and kitchen appliances in clients' homes and businesses.",
        descriptions: [
            "Installed, uninstalled, repaired, and troubleshooted electronic devices such as televisions, receivers/amplifiers, surround sound systems, wireless networks, dishwashers, over the range venting microwaves.",
            "Configured multi channel home theater audio systems and programmed universal remotes to work with such systems."
        ]
    }),
    Object.freeze({
        title: "Best Buy Project Team Specialist",
        startDate: "2013",
        endDate: "2018",
        summary: "Set up and repaired various AV Equipment as well as retrieved and stocked product.",
        descriptions: [
            "Set up and maintained televisions, AV receivers, and sound bars displaying content from various sources.",
            "Stored and retrieved various product which sometimes required using pallet jacks and mechanical equipment used for handling televisions and appliances such as stoves, refrigerators, and freezers."
        ]
    }),
    Object.freeze({
        title: "Shira Ridge Wealth Management Advisors",
        startDate: "2013",
        endDate: "2015",
        summary: "Organized and maintained client information",
        descriptions: [
            "Input and referenced client data between web based CRM systems and data stored locally confirming data was up to date and synced.",
            "Scanned, shredded, and mailed various documents, often digitizing and archiving hard copies of data."
        ]
    }),
    Object.freeze({
        title: "City of San Rafael Redevelopment Agency",
        startDate: "2006",
        endDate: "2011",
        summary: "Had various responsibilities and tasks involved in setting up, running, and tearing down venues for various events held by San Rafael.",
        descriptions: [
            "Was responsible for setting up stages and concession stands for vendors. As well as putting up barricades and blocking roads off to manage vehicle and pedestrian traffic flow.",
            "Managed intersections and parking lots, directing traffic and organizing parking."
        ]
    }),
    Object.freeze({
        title: "Comforts Fine City and Home-style Food",
        startDate: "2008",
        endDate: "2010",
        summary: "Primarily responsible for deli and counter work.",
        descriptions: [
            "Responsibilities included interacting with customers and working the register. Chiefly taking orders from the customer, retrieving what was ordered, and charging them for it.",
            "Other responsibilities involved taking inventory, restocking, and maintaining a sanitary working environment, as well as minor food preparation."
        ]
    }),
    Object.freeze({
        title: "Far Horizons Archaeological & Cultural Trips",
        startDate: "2006",
        endDate: "2008",
        summary: "Was part of temporary staffing at Far Horizons travel agency where mainly clerical tasks were assigned.",
        descriptions: [
            "Assignments involved cleaning up and a maintaining the company database, which involved organizing materials, as well as, printing, collating, and filing documents."
        ]
    })
];

export default EmploymentHistory;
