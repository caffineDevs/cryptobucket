import logo from "./logo.svg";
import "./App.scss";
import Home from "./Components/Home/Home";
import Header2 from "./Components/Header/Header2";
import Router from "./router/Router";

function App() {
  return (
    <>
      <Header2 />
      <Router />
    </>
  );
}

export default App;
