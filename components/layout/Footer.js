import Link from "next/link";

export default function Footer({ pages }) {
    const other = [
        {
            title: "Source Code",
            url: "https://github.com/nico-bachner/v3",
        },
        {
            title: "Uses",
            url: "/uses",
        },
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
        <footer className="px-8 mx-auto my-24 max-w-prose">
            <hr className="my-12 dark:border-gray-700" />
            <nav className="grid text-gray-400 sm:grid-cols-3 dark:text-gray-600">
                <ul>
                    {pages.map((page, index) => {
                        return (
                            <li
                                key={index}
                                className="my-4 hover:text-gray-500"
                            >
                                <Link
                                    href={page.href}
                                    as={
                                        page.slug != undefined
                                            ? "/" + page.slug
                                            : "/"
                                    }
                                >
                                    <a>{page.title}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    {other.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="my-4 hover:text-gray-500"
                            >
                                <Link href={item.url}>
                                    <a>{item.title}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    {links.map((link, index) => {
                        return (
                            <li
                                key={index}
                                className="my-4 hover:text-gray-500"
                            >
                                <Link href={link.url}>
                                    <a>{link.title}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </footer>
    );
}