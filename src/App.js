import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/storeConfig";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profiles from "./components/Profiles";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
          <Route path="profile/:id" element={<Profiles />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
