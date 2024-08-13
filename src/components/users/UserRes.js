import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GithubContext from "../../context/githubContext";
import { Link } from "react-router-dom";

function UserRes() {
  const { users } = useContext(GithubContext);

  return (
    <div className="userCardSec">
      <Row xs={3} md={5} className="g-7">
        {users.map((user, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={user.avatar_url} />
              <Card.Body>
                <Card.Title>{user.login}</Card.Title>
                <Card.Text>
                  <Link to={`/user/${user.login}`}>More Info</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default UserRes;
