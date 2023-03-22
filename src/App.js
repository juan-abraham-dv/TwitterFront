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
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound404 from "./components/NotFound404";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Routes>
            <Route path="login" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="profile/:id" element={<Profiles />} />
              <Route path=":id/followers" element={<Followers />} />
              <Route path=":id/following" element={<Following />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<NotFound404 />}></Route>
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
