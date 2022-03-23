// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
// import { Navbar } from "./components/navbar";
// import { HeaderContact } from "./components/headercontact";
// import { Footer } from "./components/footer";
import { HomePage } from "./pages/home";
import { ErrorPage } from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/404" component={ErrorPage} />
          <Route
            path="*"
            element={<ErrorPage to="/" replace />}
          />

        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
