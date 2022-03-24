// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { AnimatePresence } from "framer-motion";
import RouteToTop from "./components/routeToTop";
import { Home } from "./pages/home";
import { ErrorPage } from "./pages/404";
import { Privacy } from './pages/privacy/index';

function App() {
  return (
    <BrowserRouter>
      <RouteToTop />
      {/* <AnimatePresence> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/404" component={ErrorPage} />
        <Route
          path="*"
          element={<ErrorPage to="/" replace />}
        />

      </Routes>
      {/* </AnimatePresence> */}
    </BrowserRouter>
  );
}

export default App;
