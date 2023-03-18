import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import LeftPartial from "./LeftPartial";
import RightPartial from "./RightPartial";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState();
  const loggedUser = useSelector((state) => state.user);
  const params = useParams();
  console.log(0);

  useEffect(() => {
    console.log(1);
    const getUserData = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/tweets/${params.id}`,
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });
      setTweets(response.data.tweets);
      setUser(response.data.user);
    };
    getUserData();
  }, []);

  console.log(tweets);
  console.log(user);

  return (
    <>
      <div className="home-main-container">
        <div className="row gx-5">
          <LeftPartial />
          {user && tweets ? (
            <div className="col-5 p-0">
              <div className="d-flex flex-column profile-main-section">
                <div className="w-100 background-color-twitter profile-banner"></div>
                <div className="row w-100 profile-info px-3">
                  <div className="col-5 profile-info-subcontainer-left">
                    <img
                      src={user.image}
                      className="profile-photo rounded-circle"
                      alt=""
                    />
                    <div className="position-absolute bottom-0 pb-5">
                      <h2 className="fs-4 mb-1">
                        {user.firstname} {user.lastname}
                      </h2>
                      <h4 className="follow-subtitle fw-light text-secondary">
                        @{user.username}
                      </h4>
                    </div>
                    <div className="mt-3 position-absolute bottom-0 active-section-border-tweet">
                      <span>Tweets</span>
                    </div>
                  </div>
                  <div className="col-7 pt-3 profile-info-subcontainer-right">
                    <div className="d-flex flex-column align-items-end h-100">
                      {user.username === loggedUser.username ? (
                        <a
                          className="btn following-btn-medium text-black rounded-pill"
                          href="#"
                          role="button"
                        >
                          Edit
                        </a>
                      ) : user.followers.includes(loggedUser._id) ? (
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
                            {user.following.length}
                          </span>{" "}
                          <span className="text-secondary">Following</span>
                        </a>
                        <a className="text-black text-decoration-none small-text">
                          <span className="fw-bold me-2">
                            {user.followers.length}
                          </span>
                          <span className="text-secondary">Followers</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {tweets.map((tweet) => {
                const timeDiffInMinutes = Math.round(
                  (Date.now() - new Date(tweet.createdAt).getTime()) /
                    (1000 * 60)
                );
                return (
                  <div key={tweet.id} className="m-3">
                    <div className="row">
                      <div className="col-2">
                        <img
                          alt={user.username}
                          src={user.image}
                          className="img-profile-tweet"
                        />
                      </div>
                      <div className="col-10 mb-3">
                        <small className="all-tweets-box-name">
                          {user.firstname} {user.lastname}
                        </small>
                        <small className="all-tweets-box-username">
                          {" "}
                          @{user.username}
                        </small>
                        <small>
                          {" "}
                          •{" "}
                          {timeDiffInMinutes < 60 ? (
                            <span>{timeDiffInMinutes}m</span>
                          ) : (
                            <>
                              {(() => {
                                const timeDiffInHours = Math.round(
                                  timeDiffInMinutes / 60
                                );
                                if (
                                  timeDiffInHours >= 1 &&
                                  timeDiffInHours <= 24
                                ) {
                                  return <span>{timeDiffInHours}h</span>;
                                } else {
                                  return (
                                    <span>
                                      {new Date(tweet.createdAt).toLocaleString(
                                        "default",
                                        {
                                          month: "short",
                                          day: "numeric",
                                        }
                                      )}
                                    </span>
                                  );
                                }
                              })()}
                            </>
                          )}
                        </small>
                        <p> {tweet.content}</p>
                        <small>
                          <i className="bi bi-heart-fill unliked"></i>
                          <small className="ms-1 unliked">
                            {tweet.likes.length}
                          </small>
                          <i className="bi bi-heart-fill liked"></i>
                          <small className="ms-1 liked">
                            {tweet.likes.length}
                          </small>
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Loading...</div>
          )}
          <RightPartial />
        </div>
      </div>
    </>
  );
}
