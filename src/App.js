import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import { useState } from "react";
import SigninForm from "./components/SigninForm";
import Loginform from "./components/LoginForm";
import NotesDetails from "./components/NotesDetails";
import Footer from "./components/Footer";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/login"
                element={<Loginform showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<SigninForm showAlert={showAlert} />}
              />
              <Route
                exact
                path="/notedetails"
                element={<NotesDetails/>}
              />
            </Routes>
          </div>
          <Footer/>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
