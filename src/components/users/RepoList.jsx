import React, { useState } from "react";

function RepoList({ repos }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRepositories = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="latest-repos">
        <h2 onClick={toggleRepositories} className="collapsible-header">
          Latest Repositories
        </h2>
        <ul className={`repo-list ${isOpen ? "open" : "closed"}`}>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p>{repo.description}</p>
              <div>
                <span>
                  <img src={require("./star.png")} height="20px" width="20px" />
                  {repo.stargazers_count}
                </span>
                <span>
                  <img src={require("./fork.png")} height="20px" width="20px" />
                  {repo.forks_count}
                </span>
                <span>
                  <svg fill="none" viewBox="0 0 24 24">
                    <path
                      d="M18 2H6v2H4v2H2v12h2v2h2v2h12v-2h2v-2h2V6h-2V4h-2V2zm0 2v2h2v12h-2v2H6v-2H4V6h2V4h12zm-8 6h4v4h-4v-4zM8 6h8v2H8V6zm0 10H6V8h2v8zm8 0v2H8v-2h8zm0 0h2V8h-2v8z"
                      fill="currentColor"
                    />
                  </svg>
                  {repo.open_issues_count}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <svg
          onClick={toggleRepositories}
          className={`arrow ${isOpen ? "down" : "right"}`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}

export default RepoList;
