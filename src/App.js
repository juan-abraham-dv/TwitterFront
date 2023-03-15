import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/storeConfig";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          {/* <Route path="login" element={<SignIn />}/> */}
        </Routes>
      </div>
      //
    </Provider>
  );
}

export default App;
