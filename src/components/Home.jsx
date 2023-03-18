import { useEffect, useState } from "react";
import LeftPartial from "./LeftPartial";
import RightPartial from "./RightPartial";
import axios from "axios";
import "./Home.css";
import { useSelector } from "react-redux";
import noProfileiImage from "./img/fakeprofile.jpg";
import { Link } from "react-router-dom";

function Home() {
  const [tweets, setTweets] = useState([]);
  const [content, setContent] = useState("");
  const loggedUser = useSelector((state) => state.user);

  const handleCreateTweet = async (event) => {
    event.preventDefault();

    const formData = { content, loggedUser };

    const { data: newTweet } = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/tweets`,
      data: formData,
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });

    setTweets((prev) => [newTweet, ...prev]);
    newTweet.author = loggedUser;
    setContent("");
  };

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/tweets`,
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });
      setTweets(response.data);
    };
    getTweets();
  }, []);

  return (
    <div className="home-main-container">
      <div className="row gx-5">
        <LeftPartial />
        <div className="col-5 p-0">
          <div className="home-central-navbar">
            <h1 className="title-tweet-box fw-bold">Home</h1>
          </div>
          <div className="send-tweet-box p-3 ">
            <form onSubmit={(event) => handleCreateTweet(event)}>
              <div className="col-2 d-inline-block mt-2 mb-2">
                <Link
                  to={`/profile/${loggedUser.id}`}
                  className="text-decoration-none text-black"
                >
                  <img
                    alt={loggedUser.username}
                    src={
                      loggedUser.image ? loggedUser.image : `${noProfileiImage}`
                    }
                    className="img-profile"
                  />
                </Link>
              </div>

              <div className="col-8 d-inline-block">
                <input
                  type="text"
                  placeholder="What's happening?"
                  className="new-tweet-input fs-5"
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="d-block ms-auto btn btn-home text-white rounded-pill px-3 fw-bold"
                >
                  Tweet
                </button>
              </div>
            </form>
          </div>
          <div>
            {tweets.map((tweet) => {
              const timeDiffInMinutes = Math.round(
                (Date.now() - new Date(tweet.createdAt).getTime()) / (1000 * 60)
              );
              return (
                <div key={tweet._id} className="m-3">
                  <div className="row all-tweets-box">
                    <div className="col-2 text-center">
                      <Link
                        to={`/profile/${tweet.author._id}`}
                        className="text-decoration-none text-black"
                      >
                        <img
                          alt="User profile"
                          src={tweet.author.image}
                          className="img-profile-tweet"
                        />
                      </Link>
                    </div>
                    <div className="col-10 mb-3">
                      <small className="fs-6 fw-bold">
                        <Link
                          to={`/profile/${tweet.author._id}`}
                          className="text-decoration-none text-black"
                        >
                          {tweet.author.firstname} {tweet.author.lastname}
                        </Link>
                      </small>
                      <small className=" text-secondary fw-light">
                        {" "}
                        @{tweet.author.username}
                      </small>
                      <small className="text-secondary fw-light">
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
                      <p className="content-tweet"> {tweet.content}</p>
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
        </div>
        <RightPartial />
      </div>
    </div>
  );
}

export default Home;
