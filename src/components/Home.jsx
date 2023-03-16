import { useEffect, useState } from "react";
// import LeftPartial from "./LeftPartial";
import RightPartial from "./RightPartial";
import axios from "axios";
import "./Home.css";
import fakerprofile from "./img/fakeprofile.jpg";
import { useSelector } from "react-redux";

function Home() {
  const [tweets, setTweets] = useState([]);
  const loggedUser = useSelector((state) => state.user[0]);
  console.log(loggedUser);
  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/tweets`,
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });
      setTweets(response.data.tweets);
    };
    getTweets();
  }, []);
  console.log(tweets);
  return (
    <div className="container">
      <div className="row gx-5">
        {/* <LeftPartial /> */}
        <div className="col-5 p-0">
          <div className="send-tweet-box p-3">
            <h1 className="send-tweet-box-title">Home</h1>
            <div className="col-2 d-inline-block mt-2 mb-2">
              <img
                alt="Cualquier cosa"
                src={fakerprofile}
                className="img-profile"
              />
            </div>
            <div className="col-9 d-inline-block">
              <input
                type="text"
                placeholder="What's happening?"
                className="new-tweet-imput"
              />
            </div>
            <button className="d-block send-tweet-btn btn btn-home text-white rounded-pill w-22">
              Tweet
            </button>
          </div>
          <div>
            {tweets.map((tweet) => (
              <div key={tweet._id} className="m-3">
                <div className="row all-tweets-box">
                  <div className="col-1 all-tweets-img-box">
                    <img
                      alt="Cualquier cosa"
                      src={fakerprofile}
                      className="img-profile-tweet"
                    />
                  </div>
                  <div className="col-10 mb-3">
                    <small>
                      {tweet.author}
                      {tweet.createdAt}
                    </small>
                    <p> {tweet.content}</p>
                    <small>
                      <i className="bi bi-heart-fill unliked"></i>
                      <small className="ms-1 unliked">
                        {tweet.likes.length}
                      </small>
                      <i className="bi bi-heart-fill liked"></i>
                      <small className="ms-1 liked">{tweet.likes.length}</small>
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <RightPartial />
      </div>
    </div>
  );
}

export default Home;
