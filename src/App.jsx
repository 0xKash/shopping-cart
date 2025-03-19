import "./App.css";

import useAPI from "./functions/fetchAPI";
import Card from "./components/card/card";
import Home from "./pages/home/home";

function App() {
  // const { items } = useAPI();

  return (
    <div className="content">
      <Home />
    </div>
  );
}

export default App;
