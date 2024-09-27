import World from "./components/World";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <World />
      </BrowserRouter>
    </>
  );
}

export default App;
