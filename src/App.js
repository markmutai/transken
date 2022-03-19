// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { HeaderContact } from "./components/headercontact";
import { HomePage } from "./pages/home";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App bg-gradient-to-br from-white_egg via-white_egg to-white_semi">
      <div className="absolute top-0 right-0 ptn w-full h-full z-0"></div>
      <HeaderContact />
      {/* <div className="contentContainer mx-auto lg:w-11/12 2xl:w-8/12 pb-16"> */}
      <Navbar />
      <HomePage />
      <div className="absolute bottom-0 right-0 ptn-bottom w-full h-40 z-90"></div>
      <Footer />
      {/* </div> */}
      {/* </div> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
