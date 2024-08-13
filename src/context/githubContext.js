import { createContext, useReducer } from "react";
import GithubReducer from "./githubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const intialState = { users: [], user: {}, repos: [] };

  const [state, dispatch] = useReducer(GithubReducer, intialState);

  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_GITHUB_API}/search/users?${params}`
      );
      const { items } = await response.json();
      dispatch({
        type: "getUsers",
        payload: items,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getUser = async (login) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_GITHUB_API}/users/${login}`
      );

      if (response.status === 404) {
        window.location = "/404";
      } else {
        const uData = await response.json();
        dispatch({
          type: "getUser",
          payload: uData,
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getRepos = async (login) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_GITHUB_API}/users/${login}/repos`
      );
      const uData = await response.json();
      dispatch({
        type: "getRepos",
        payload: uData,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        searchUsers,
        getUser,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
