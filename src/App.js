import { Routes, Route } from "react-router-dom";
//import store from "./storeConfig";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
// import Profiles from "./components/Profiles";

function App() {
  return (
    //  <Provider store={store}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route path="profile" element={<Profiles />} /> */}
        {/* <Route path="login" element={<Home />}/> */}
      </Routes>
    </div>
    //</Provider>
  );
}

export default App;
