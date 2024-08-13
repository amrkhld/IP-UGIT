const GithubReducer = (state, action) => {
  switch (action.type) {
    case "getUsers":
      return {
        ...state,
        users: action.payload,
      };

    case "getUser":
      return {
        ...state,
        user: action.payload,
      };

    case "getRepos":
      return {
        ...state,
        repos: action.payload,
      };

    default:
      return state;
  }
};

export default GithubReducer;
