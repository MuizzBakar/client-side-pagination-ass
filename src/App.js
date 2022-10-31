import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Error from "./component/Error";
import Navbar from "./component/Navbar";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./component/Fallback";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback} onReset={() => Navigate("/")}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />}>
              {/* <Route path="vision" element={<Vision />} /> */}
              <Route path="*" element={<Error />} />
            </Route>
            <Route path="/Users" element={<Users />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
