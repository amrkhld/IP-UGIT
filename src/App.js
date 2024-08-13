import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavC from "./components/layout/NavC";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notFound";
import FootC from "./components/layout/FootC";
import User from "./pages/User";
import { GithubProvider } from "./context/githubContext";

function App() {
  return (
    <GithubProvider>
      <div className="bgCont">
        <div className="screen-box">
          <Router>
            <NavC />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/*" element={<Navigate to="/404" />} />
              </Routes>
            </div>
            <FootC />
          </Router>
        </div>
      </div>
    </GithubProvider>
  );
}

export default App;
