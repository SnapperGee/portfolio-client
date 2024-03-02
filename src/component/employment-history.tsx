/**
 * Contains the component used to generate each work history section of the resume.
 * @module work-history
 */

import { EMPLOYMENT_HISTORY } from "../constant/employment-history";

/**
 * The work history section component of the resume. It contains the job title, dates of employment,
 * and a summary of the job.
 *
 * @returns The work history section of the resume.
 */
export default function WorkHistory()
{
    return (
        <div className="text-gray-300">
            <ul className="listSquare ms-10 sm:ms-20 text-sm sm:text-base space-y-4">
            {
                EMPLOYMENT_HISTORY.map((job, index) => {
                    const TitleSpan = () => <span className="font-semibold">{job.title} ({job.startDate}-{job.endDate}):</span>;
                    return (
                        <li key={index}>
                            <p><TitleSpan /> {job.summary}</p>
                            <ul className="ms-10 sm:ms-15 list-disc space-y-2">
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
    );
}
