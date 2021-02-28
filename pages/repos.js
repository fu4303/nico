import ExternalLink from "../components/ExternalLink";
import Card from "../components/Card";

import { useState, useEffect } from "react";

export default function About() {
    const GitHubApiEndpoint = "https://api.github.com/users/nico-bachner";

    const [userData, setUserData] = useState(null);
    const getUserData = () =>
        fetch(GitHubApiEndpoint).then((res) => res.json());
    useEffect(() => {
        getUserData().then((userData) => {
            setUserData(userData);
        });
    }, []);

    const [allRepos, setToggleAllRepos] = useState(false);

    const [repos, setData] = useState(null);
    const getData = () =>
        fetch(GitHubApiEndpoint + "/repos").then((res) => res.json());
    useEffect(() => {
        getData().then((repos) => {
            repos.sort((a, b) => {
                return b.stargazers_count - a.stargazers_count;
            });
            setData(repos);
        });
    }, []);

    const [allForks, setToggleAllForks] = useState(false);

    return (
        <>
            <h1>GitHub Repositories</h1>
            <p>
                Here are a few of my public GitHub repositories. They can all be
                found on{" "}
                <a
                    href="https://github.com/nico-bachner?tab=repositories"
                    className="link"
                >
                    GitHub
                </a>
                . Currently, I have {userData?.public_repos} public repositories
                in total.
            </p>
            <section>
                <h2 className="my-4">Repositories</h2>
                <div className="grid grid-cols-1 gap-4">
                    {repos?.map((repo, index) => {
                        repo.name = repo.name
                            .replaceAll("-", " ")
                            .replaceAll("md", "Markdown");
                        if (
                            repo.fork != true &&
                            (repo.stargazers_count > 0 || allRepos)
                        ) {
                            return (
                                <ExternalLink
                                    key={index}
                                    href={repo.html_url}
                                    unstyled
                                >
                                    <Card link="true" className="px-6 py-6">
                                        <h3 className="text-2xl capitalize">
                                            {repo.name}
                                        </h3>
                                        <p>{repo.description}</p>
                                    </Card>
                                </ExternalLink>
                            );
                        }
                    })}
                </div>
                <button
                    onClick={() => {
                        if (allRepos != true) {
                            setToggleAllRepos(true);
                        } else {
                            setToggleAllRepos(false);
                        }
                    }}
                    className="m-4"
                >
                    {allRepos == false ? "Show All" : "Show Less"}
                </button>
            </section>
            <section>
                <h2 className="my-4">Forks</h2>
                <div className="grid grid-cols-1 gap-4">
                    {repos?.map((repo, index) => {
                        repo.name = repo.name.replaceAll("-", " ");
                        if (
                            repo.fork == true &&
                            (repo.stargazers_count > 0 || allForks)
                        ) {
                            return (
                                <ExternalLink
                                    key={index}
                                    href={repo.html_url}
                                    unstyled="true"
                                >
                                    <Card link="true" className="px-6 py-6">
                                        <h3 className="text-2xl capitalize">
                                            {repo.name}
                                        </h3>
                                        <p>{repo.description}</p>
                                    </Card>
                                </ExternalLink>
                            );
                        }
                    })}
                </div>
                <button
                    onClick={() => {
                        if (allForks != true) {
                            setToggleAllForks(true);
                        } else {
                            setToggleAllForks(false);
                        }
                    }}
                    className="m-4"
                >
                    {allForks == false ? "Show All" : "Show Less"}
                </button>
            </section>
        </>
    );
}
