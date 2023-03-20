import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import LeftPartial from "./LeftPartial";
import RightPartial from "./RightPartial";
import { addFollowing } from "../Redux/userReducer";

export default function Profile() {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState();
  const loggedUser = useSelector((state) => state.user);
  const params = useParams();
  const dispatch = useDispatch();
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

  const handleLikeTweet = async (tweetId) => {
    const { data: updatedLikesList } = await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BACKEND_URL}/tweets/${tweetId}/like`,
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });

    const updatedTweets = tweets.map((tweet) => {
      if (tweet._id === tweetId) {
        return { ...tweet, likes: updatedLikesList };
      }
      return tweet;
    });
    return setTweets(updatedTweets);
  };

  const handleFollowUser = async (userId) => {
    const { data: updatedFollowData } = await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BACKEND_URL}/users/${userId}/follow`,
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });

    const followingList = updatedFollowData.followingList;

    dispatch(addFollowing({ followingList }));
  };

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
                        <Link
                          className="btn following-btn-medium text-black fw-semibold rounded-pill"
                          to={"#"}
                          role="button"
                        >
                          Edit profile
                        </Link>
                      ) : loggedUser.following.includes(user._id) ? (
                        <div
                          className="btn following-btn-medium text-black rounded-pill"
                          role="button"
                          onClick={() => {
                            handleFollowUser(user._id);
                          }}
                        >
                          Following
                        </div>
                      ) : (
                        <div
                          className="btn follow-btn-medium text-white rounded-pill"
                          onClick={() => {
                            handleFollowUser(user._id);
                          }}
                          role="button"
                        >
                          Follow
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h2 className="fs-4-5 mb-0 bolder-text">
                      {user.firstname} {user.lastname}
                    </h2>
                    <h4 className="follow-subtitle fw-light text-secondary mt-1">
                      @{user.username}
                    </h4>
                  </div>

                  {/* <div className="mt-3 position-absolute bottom-0 active-section-border-tweet">
                    <span>Tweets</span>
                  </div> */}
                  <div className="mt-2">
                    <p className="small-text">{user.biography}</p>
                  </div>
                  <div>
                    <div className="mt-2 pb-5">
                      <Link
                        to={`/${user._id}/following`}
                        className="text-black text-decoration-none me-3 small-text"
                      >
                        <span className="bolder-text me-1">
                          {user.following.length}
                        </span>{" "}
                        <span className="text-secondary">Following</span>
                      </Link>
                      <Link
                        to={`/${user._id}/followers`}
                        className="text-black text-decoration-none me-3 small-text"
                      >
                        <span className="bolder-text me-1">
                          {user.followers.length}
                        </span>
                        <span className="text-secondary">Followers</span>
                      </Link>
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
                        <small className="text-secondary">
                          {tweet.likes.includes(loggedUser.id) ? (
                            <div
                              onClick={() => handleLikeTweet(tweet._id)}
                              className="cursor-pointer"
                            >
                              <i className="bi bi-heart-fill liked"></i>
                              <small className="ms-2 liked">
                                {tweet.likes.length}
                              </small>
                            </div>
                          ) : (
                            <div
                              onClick={() => handleLikeTweet(tweet._id)}
                              className="cursor-pointer"
                            >
                              <i className="bi bi-heart disliked"></i>
                              <small className="ms-2 disliked">
                                {tweet.likes.length}
                              </small>
                            </div>
                          )}
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
