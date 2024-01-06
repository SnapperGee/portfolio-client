/*
 * Quiz
 * Password Generator
 * Readme Generator
 * Day Planner
 * Weather
 */

const repos = [
    {
        id: 1,
        title: "Title",
        href: "#",
        description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
    },
]

const Portfolio = () =>
(
    <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Hero Title</h2>
                <p className="mt-2 text-lg leading-8 text-gray-300">
                    Hero description.
                </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {
                repos.map((repo) => (
                    <article key={repo.id} className="flex max-w-xl flex-col items-start justify-between">
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-100">
                                <a href={repo.href}>
                                    <span className="absolute inset-0" />
                                    {repo.title}
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300 group-hover:text-gray-200">{repo.description}</p>
                        </div>
                    </article>
                ))
            }
            </div>
        </div>
    </div>
);

export default Portfolio;
