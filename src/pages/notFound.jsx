import fourOfour from "./404.png";

function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-content">
        <img src={fourOfour} alt="Sad Character" className="not-found-image" />
        <h1>AWWW...DON'T CRY.</h1>
        <p>It's just a 404!</p>
        <p>"Maybe they are just hiding in a really good branch!"</p>
      </div>
    </div>
  );
}

export default NotFound;
