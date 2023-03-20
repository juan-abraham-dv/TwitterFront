import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { storeUser } from "../Redux/userReducer";
import { useNavigate, Link } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = async (event) => {
    event.preventDefault();
    const formData = { email, password };

    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users/tokens`,
      formData
    );

    dispatch(storeUser(response.data));
    navigate("/");
  };

  return (
    <div className="register-main-container register-background">
      <div className="w-75">
        <div className="row rounded bg-white">
          <div className="d-none d-md-block col col-md-5 background-color-twitter rounded-start p-5">
            <div className="d-flex flex-column h-100">
              <i className="bi bi-twitter text-white display-5"></i>
              <h2 className="mt-auto text-white">
                Hey! Nice to see you again 🥰
              </h2>
            </div>
          </div>
          <div className="register-form-column col col-sm-12 col-md-6 col-lg-7 p-5">
            <div className="d-flex justify-content-center">
              <form
                onSubmit={(event) => handleUserLogin(event)}
                className="register-form"
              >
                <div className="mb-4">
                  <h1 className="register-main-title">Log In</h1>
                  <p className="small-text">Ready to start using Twitter?</p>
                </div>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="mb-3 mt-5">
                  <button
                    type="submit"
                    className="w-100 btn rounded-pill text-white background-color-twitter submitBtn mb-5"
                  >
                    Log In
                  </button>

                  <p className="text-center">
                    Don't have an account?
                    <Link to={"/signup"} className="text-decoration-none">
                      {" "}
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
