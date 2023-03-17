import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import LeftPartial from "./LeftPartial";
import RightPartial from "./RightPartial";
import { useSelector } from "react-redux";

export default function Profile() {
  /*const timeDiffInMinutes = Math.round(
    (Date.now() - tweet.createdAt.getTime()) / (1000 * 60)
  );
  const timeDiffInHours = Math.round(timeDiffInMinutes / 60);*/
  const [tweets, setTweets] = useState([]);
  const loggedUser = useSelector((state) => state.user);
  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/tweets/${loggedUser.id}`,
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });
      setTweets(response.data);
      console.log(loggedUser.id);
    };
    getTweets();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row subContainer gx-5">
        <LeftPartial />
        <div className="col-5 px-0">
          <div className="d-flex flex-column profile-main-section">
            <div className="w-100 background-color-twitter profile-banner"></div>
            <div className="row w-100 profile-info px-3">
              <div className="col-5 profile-info-subcontainer-left">
                <img
                  src={loggedUser.image}
                  className="profile-photo rounded-circle"
                  alt=""
                />
                <div className="position-absolute bottom-0 pb-5">
                  <h2 className="fs-4 mb-1">
                    {loggedUser.firstname} {loggedUser.lastname}
                  </h2>
                  <h4 className="follow-subtitle fw-light text-secondary">
                    @{loggedUser.username}
                  </h4>
                </div>
                <div className="mt-3 position-absolute bottom-0 active-section-border-tweet">
                  <span>Tweets</span>
                </div>
              </div>
              <div className="col-7 pt-3 profile-info-subcontainer-right">
                {/*  <div className="d-flex flex-column align-items-end h-100">
                  {user.email === userData.email ? (
                    <a
                      className="btn following-btn-medium text-black rounded-pill"
                      href="#"
                      role="button"
                    >
                      Edit
                    </a>
                  ) : user.following.includes(userData._id) ? (
                    <a
                      className="btn following-btn-medium text-black rounded-pill"
                      role="button"
                    >
                      Following
                    </a>
                  ) : (
                    <a
                      className="btn follow-btn-medium text-white rounded-pill"
                      role="button"
                    >
                      Follow
                    </a>
                  )}

                  <div className="mt-auto pb-5">
                    <a className="text-black text-decoration-none me-3 small-text">
                      <span className="fw-bold me-2">
                        {userData.following.length}
                      </span>{" "}
                      <span className="text-secondary">Following</span>
                    </a>
                    <a className="text-black text-decoration-none small-text">
                      <span className="fw-bold me-2">
                        {userData.followers.length}
                      </span>
                      <span className="text-secondary">Followers</span>
                    </a>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
          {tweets.map((tweet) => (
            <div key={tweet.id} className="m-3">
              <div className="row all-tweets-box">
                <div className="col-1 all-tweets-img-box">
                  <img
                    alt="Cualquier cosa"
                    src={tweet.author.image}
                    className="img-profile-tweet"
                  />
                </div>
                <div className="col-10 mb-3">
                  <small className="all-tweets-box-name">
                    {tweet.author.firstname} {tweet.author.lastname}
                  </small>
                  <small className="all-tweets-box-username">
                    {" "}
                    @{tweet.author.username}
                  </small>
                  <small> {tweet.createdAt}</small>
                  <p> {tweet.content}</p>
                  <small>
                    <i className="bi bi-heart-fill unliked"></i>
                    <small className="ms-1 unliked">{tweet.likes.length}</small>
                    <i className="bi bi-heart-fill liked"></i>
                    <small className="ms-1 liked">{tweet.likes.length}</small>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <RightPartial />
      </div>
    </div>
  );
}
