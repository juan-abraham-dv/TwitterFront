import React from "react";
import LeftPartial from "./LeftPartial";
import RightPartial from "./RightPartial";
//import axios from "axios";

function Home() {
  /* //const [allTweets, setAllTweets] = React.useState([]);
  React.useEffect(() => {
    const getTweets = async () => {
      const response = await axios.get(`http://localhost:8000/tweets`);
      console.log(response.data.tweets);
      // setAllTweets(response.data.tweets);
    };
    getTweets();
  }, []);*/

  return (
    <div className="container">
      <div className="row gx-5">
        <LeftPartial />
        <div className="col-5"></div>
        <RightPartial />
      </div>
    </div>
  );
}

export default Home;

/*<div>
      {allTweets.map((tweet) => (
        <div className="col">{tweet.content}</div>
      ))}
    </div>*/
