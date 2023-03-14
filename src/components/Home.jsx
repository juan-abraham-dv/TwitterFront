import React from "react";
import axios from "axios";

function Home() {
  const [allTweets, setAllTweets] = React.useState([]);
  React.useEffect(() => {
    const getTweets = async () => {
      const response = await axios.get(`http://localhost:8000/tweets`);
      console.log(response.data.tweets);
      setAllTweets(response.data.tweets);
    };
    getTweets();
  }, []);

  return (
    <div>
      {allTweets.map((tweet) => (
        <div className="col">{tweet.content}</div>
      ))}
    </div>
  );
}

export default Home;
