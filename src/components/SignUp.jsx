import axios from "axios";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { storeUser } from "../Redux/userSlice";

export default function SignUp() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");
  const [loggedUserData, setLoggedUserData] = useState(null);

  const handleUserCreation = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("email", email);
    formData.append("username", userName);
    formData.append("password", password);
    formData.append("image", image);

    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users`,
      formData
    );

    setLoggedUserData(response.data);
  };

  useEffect(() => {
    if (loggedUserData !== null) {
      dispatch(storeUser({ loggedUserData }));
    }
  }, [loggedUserData]);

  return (
    <>
      <div className="register-main-container register-background">
        <div className="w-75">
          <div className="row rounded bg-white">
            <div className="d-none d-md-block col col-md-5 background-color-twitter rounded-start p-5">
              <div className="d-flex flex-column h-100">
                <i className="bi bi-twitter text-white display-5"></i>
                <h2 className="mt-auto text-white">
                  Hi! Welcome to Twitter Clone 👋
                </h2>
              </div>
            </div>
            <div className="register-form-column col col-sm-12 col-md-6 col-lg-7 p-5">
              <div className="d-flex justify-content-center">
                <form
                  onSubmit={(event) => {
                    handleUserCreation(event);
                  }}
                  className="register-form"
                >
                  <div className="mb-4">
                    <h1 className="register-main-title">Sign Up</h1>
                    <p className="small-text">
                      Create an account and start using Twitter
                    </p>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="firstname"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="lastname"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      placeholder="Last name"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      value={userName}
                      onChange={(event) => setUserName(event.target.value)}
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="file"
                      name="image"
                      onChange={(event) => setImage(event.target.files[0])}
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="mb-3 mt-5">
                    <button
                      type="submit"
                      name="submitBtn"
                      className="w-100 btn rounded-pill background-color-twitter text-white  submitBtn mb-5"
                    >
                      Sign Up
                    </button>

                    <p className="text-center">
                      Already have an account?{" "}
                      <a href="/login" className="text-decoration-none">
                        Sign in
                      </a>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
