import { useRouter } from "next/router";

import InternalLink from "./InternalLink";

export default function MobileNav({ pages }) {
    const { pathname } = useRouter();

    return (
        <nav className="fixed bottom-0 z-50 w-screen bg-white sm:hidden dark:bg-black bg-blur">
            <ul className="flex py-6 text-sm font-bold justify-evenly">
                {pages.map((page, index) => {
                    return (
                        <li key={index}>
                            <InternalLink
                                href={page.href}
                                as={
                                    page.slug != undefined
                                        ? "/" + page.slug
                                        : "/"
                                }
                                className={
                                    "p-2" +
                                    " " +
                                    (pathname == page.href
                                        ? "text-gray dark:text-gray-dark"
                                        : "hover:text-blue")
                                }
                            >
                                {page.title}
                            </InternalLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
