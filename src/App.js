import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/storeConfig";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profiles from "./components/Profiles";
import Followers from "./components/Followers";
import Following from "./components/Following";
import Logout from "./components/Logout";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<SignIn />} />
            <Route path="profile/:id" element={<Profiles />} />
            <Route path=":id/followers" element={<Followers />} />
            <Route path=":id/following" element={<Following />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
