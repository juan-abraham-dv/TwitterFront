import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/storeConfig";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profiles from "./components/Profiles";
import Followers from "./components/Followers";
import Followings from "./components/Following";
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
            <Route path=":id/followings" element={<Followings />} />
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
