import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";

export default function Footer(props) {
    const pages = props.pages;
    const hiddenPages = [
        {
            title: "Source Code",
            url: "https://github.com/nico-bachner/v3",
        },
        {
            title: "Uses",
            url: "/uses",
        },
        {
            title: "Repositories",
            url: "/repos",
        },
        {
            title: "Mac Setup",
            url: "/setup",
        },
    ];
    const other = [
        {
            title: "CV",
            url: "https://read.cv/nicob",
        },
    ];
    const links = [
        {
            title: "GitHub",
            url: "https://github.com/nico-bachner",
        },
        {
            title: "DEV",
            url: "https://dev.to/nicob",
        },
        {
            title: "Stack Overflow",
            url: "https://stackoverflow.com/users/story/13506524",
        },
        {
            title: "Code Golf",
            url: "https://code.golf/golfers/nico-bachner",
        },
    ];

    return (
        <nav
            className={
                "grid grid-cols-2 gap-8 text-center sm:grid-cols-4" +
                " " +
                props.className
            }
        >
            <ul>
                {pages.map((page, index) => {
                    return (
                        <li key={index} className="my-4 text-left">
                            <InternalLink
                                href={page.href}
                                as={
                                    page.slug != undefined
                                        ? "/" + page.slug
                                        : "/"
                                }
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {page.title}
                            </InternalLink>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {hiddenPages.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="my-4 text-right sm:text-center"
                        >
                            <InternalLink
                                href={item.url}
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {item.title}
                            </InternalLink>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {other.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="my-4 text-left sm:text-center"
                        >
                            <ExternalLink
                                href={item.url}
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {item.title}
                            </ExternalLink>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {links.map((link, index) => {
                    return (
                        <li key={index} className="my-4 text-right">
                            <ExternalLink
                                href={link.url}
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {link.title}
                            </ExternalLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
