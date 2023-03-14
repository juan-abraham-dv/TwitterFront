import { Routes, Route } from "react-router-dom";
//import store from "./storeConfig";
import Home from "./components/Home";

function App() {
  return (
    //  <Provider store={store}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    //</Provider>
  );
}

export default App;
