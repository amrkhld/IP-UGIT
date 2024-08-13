import React, { useState, useEffect, useRef, useContext } from "react";
import GithubContext from "../../context/githubContext";
import Alert from "react-bootstrap/Alert";

const Search = () => {
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const formRef = useRef(null);
  const { searchUsers, users } = useContext(GithubContext);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setShowError(true);
    } else {
      setShowError(false);
      searchUsers(text);
    }
  };

  const handleFormClick = () => {
    setIsActive(true);
  };

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  }, [users]);

  return (
    <>
      {!showError && (
        <div className={`search-box ${isShrunk ? "shrink" : ""}`}>
          <form
            ref={formRef}
            onSubmit={handleSearch}
            onClick={handleFormClick}
            className={isActive ? "active" : ""}
          >
            <input
              type="text"
              value={text}
              onChange={handleInputChange}
              placeholder="Who are you looking for?"
              className="search-input"
            />
            <button type="submit" className="search-button">
              <img
                src={require("./SICO.png")}
                width="60"
                height="60"
                className="SICO"
                alt="uSICO"
              />
            </button>
          </form>
        </div>
      )}

      {showError && (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          <Alert.Heading>Oh snap!</Alert.Heading>
          <p>You need to enter a search term. Please try again.</p>
        </Alert>
      )}
    </>
  );
};

export default Search;
