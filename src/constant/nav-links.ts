/**
 * The site navigation link text and paths to display in the header and footer navigation bars.
 */
export const NAV_LINKS: readonly {readonly text: string, readonly href: string}[] = Object.freeze([
    Object.freeze({
        text: "About",
        href: "/"
    }),
    Object.freeze({
        text: "Portfolio",
        href: "/portfolio"
    }),
    Object.freeze({
        text: "Contact",
        href: "/contact"
    }),
    Object.freeze({
        text: "Resume",
        href: "/resume"
    })
]);

export default NAV_LINKS;
