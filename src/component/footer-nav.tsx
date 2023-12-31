import { NavLink } from "react-router-dom";

const navigation = {
    main: [
        { name: "About me", to: "/" },
        { name: "Portfolio", to: "/portfolio" },
        { name: "Contact", to: "/contact" },
        { name: "Resume", to: "/resume" }
    ],
    social: [
        {
            name: "GitHub",
            href: "https://github.com/SnapperGee",
            icon: (props: Record<string, unknown>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
                </svg>
            )
        },
        {
            name: "Stack Overflow",
            href: "https://stackoverflow.com/users/7993601",
            icon: (props: Record<string, unknown>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"
                        clipRule="evenodd"
                    />
                </svg>

            )
        }
    ]
};

const FooterNav = () =>
(
    <div className="sticky bottom-0 overflow-hidden px-6 py-10 sm:py-12 lg:px-8 bg-gray-800">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {
                navigation.main.map((item) => (
                    <div key={item.name} className="pb-6">
                        <NavLink to={item.to} className={({isActive}) => `text-sm leading-6 ${isActive ? "text-gray-500" : "hover:text-gray-500 text-gray-300"}`}>
                            {item.name}
                        </NavLink>
                    </div>
            ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
            {
                navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
            ))}
        </div>
    </div>
);

  export default FooterNav;
