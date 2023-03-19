import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import LeftPartial from "./LeftPartial";
import RightPartial from "./RightPartial";

export default function Profile() {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState();
  const loggedUser = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
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

  return (
    <>
      <div className="home-main-container">
        <div className="row gx-5">
          <LeftPartial />
          {user && tweets ? (
            <div className="col-5 p-0">
              <div className="d-flex align-items-center profile-central-navbar px-3">
                <div className="d-flex justify-content-center align-items-center h-100 me-4">
                  <i
                    className="bi bi-arrow-left fs-5 cursor-pointer"
                    onClick={() => navigate(-1)}
                  ></i>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start h-100 me-2">
                  <div className="my-auto">
                    <h1 className="title-tweet-box fw-bold mb-0">{`${user.firstname} ${user.lastname}`}</h1>{" "}
                    <p className="text-secondary small-2-text mb-0">
                      {tweets.length} Tweets
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column profile-main-section position-relative">
                <div className="w-100 background-color-twitter profile-banner"></div>
                <div className="d-flex flex-column w-100 px-3">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <img
                        src={user.image}
                        className="profile-photo rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="mt-2">
                      {user.username === loggedUser.username ? (
                        <a
                          className="btn following-btn-medium text-black fw-semibold rounded-pill"
                          href="#"
                          role="button"
                        >
                          Edit profile
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
                    </div>
                  </div>
                  <div className="mt-4">
                    <h2 className="fs-4-5 mb-0 bolder-text">
                      {user.firstname} {user.lastname}
                    </h2>
                    <h4 className="follow-subtitle fw-light text-secondary">
                      @{user.username}
                    </h4>
                  </div>
                  <div className="mt-2">
                    <p className="small-text">{user.biography}</p>
                  </div>
                  <div>
                    <div className="mt-2 pb-5">
                      <Link
                        to={`/${user._id}/followers`}
                        className="text-black text-decoration-none me-3 small-text"
                      >
                        <span className="bolder-text me-1">
                          {user.following.length}
                        </span>{" "}
                        <span className="text-secondary">Following</span>
                      </Link>
                      <a className="text-black text-decoration-none small-text">
                        <span className="bolder-text me-1">
                          {user.followers.length}
                        </span>
                        <span className="text-secondary">Followers</span>
                      </a>
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
                  <div key={tweet._id} className="m-3">
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
