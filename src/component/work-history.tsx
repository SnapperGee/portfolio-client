import { jobHistory } from "./util";

/**
 * The work history section component of the resume.
 *
 * @returns The work history section of the resume.
 */
export const WorkHistory = () =>
(
    <>
        <div className="mx-20 text-gray-300">
            <ul className="listSquare ms-10 sm:ms-20 text-sm sm:text-base space-y-4">
            {
                jobHistory.map((job, index) => {
                    const TitleSpan = () => <span className="font-semibold">{job.title} ({job.startDate}-{job.endDate}):</span>;
                    return (
                        <li key={index}>
                            <p><TitleSpan /> {job.summary}</p>
                            <ul className="ms-10 sm:ms-20 list-disc space-y-2">
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
            <p className="mt-10 mb-14 text-sm text-gray-400 opacity-60">References available on request.</p>
        </div>
    </>
);

export default WorkHistory;
