import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../context/githubContext";
import RepoList from "../components/users/RepoList";

function User() {
  const params = useParams();
  const { getUser, user, getRepos, repos } = useContext(GithubContext);

  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, [getUser, getRepos, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <div className="user-page">
      <Link to="/" className="back-to-search">
        <svg fill="none" viewBox="0 0 24 24">
          <path
            d="M16 5v2h-2V5h2zm-4 4V7h2v2h-2zm-2 2V9h2v2h-2zm0 2H8v-2h2v2zm2 2v-2h-2v2h2zm0 0h2v2h-2v-2zm4 4v-2h-2v2h2z"
            fill="currentColor"
          />
        </svg>
        BACK TO SEARCH
      </Link>
      <div className="user-profile">
        <div className="profile-left">
          <img src={avatar_url} alt={`${name}'s avatar`} className="avatar" />
          <p>@{login}</p>
        </div>
        <div className="profile-right">
          <h2>
            {name}
            <span className="badge">
              {type}
              {hireable && <span className="badge hireable">Hireable</span>}
            </span>
          </h2>
          <p>{bio}</p>
          <ul>
            {location && (
              <li>
                <strong>Location: </strong>
                {location}
              </li>
            )}
            {blog && (
              <li>
                <strong>Website: </strong>
                <a href={blog} target="_blank" rel="noopener noreferrer">
                  {blog}
                </a>
              </li>
            )}
            {twitter_username && (
              <li>
                <strong>Twitter: </strong>
                <a
                  href={`https://twitter.com/${twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {twitter_username}
                </a>
              </li>
            )}
          </ul>
          <div className="stats">
            <div className="stat">
              <strong>Followers</strong>
              <p>
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M11 0H5v2H3v6h2v2h6V8H5V2h6V0zm0 2h2v6h-2V2zM0 14h2v4h12v2H0v-6zm2 0h12v-2H2v2zm14 0h-2v6h2v-6zM15 0h4v2h-4V0zm4 8h-4v2h4V8zm0-6h2v6h-2V2zm5 12h-2v4h-4v2h6v-6zm-6-2h4v2h-4v-2z"
                    fill="currentColor"
                  />
                </svg>
                {followers}
              </p>
            </div>
            <div className="stat">
              <strong>Following</strong>
              <p>
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M10 3H8v2H6v2h2V5h2v2h2v2h-2v2H8v2H6v2H4v-2H2v2h2v2h2v-2h4v2h2v2h-2v2h2v-2h2v-2h-2v-4h2v-2h2v2h2v2h2v-2h2v-2h-2v2h-2v-2h-2V9h2V5h-4v2h-2V5h-2V3z"
                    fill="currentColor"
                  />
                </svg>
                {following}
              </p>
            </div>
            <div className="stat">
              <strong>Public Repos</strong>
              <p>
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M8 2h12v20H4V2h4zm4 8h-2v2H8V4H6v16h12V4h-4v8h-2v-2z"
                    fill="currentColor"
                  />
                </svg>
                {public_repos}
              </p>
            </div>
            <div className="stat">
              <strong>Public Gists</strong>
              <p>
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M8 5h2v2H8V5zM6 7h2v2H6V7zM4 9h2v2H4V9zm-2 2h2v2H2v-2zm2 2h2v2H4v-2zm2 2h2v2H6v-2zm2 2h2v2H8v-2zm8-12h-2v2h2V5zm2 2h-2v2h2V7zm2 2h-2v2h2V9zm2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2z"
                    fill="currentColor"
                  />
                </svg>
                {public_gists}
              </p>
            </div>
          </div>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            <button className="customButton">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
                />
              </svg>
              VISIT GITHUB PROFILE
            </button>
          </a>
        </div>
      </div>
      <RepoList repos={repos} />
    </div>
  );
}

export default User;
