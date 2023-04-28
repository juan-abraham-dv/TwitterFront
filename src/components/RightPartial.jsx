import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFollowing } from "../redux/userReducer";
import { Link } from "react-router-dom";

function RightPartial() {
  const [users, setUsers] = useState([]);
  const loggedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getWhoToFollow = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/users/who-to-follow`,
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });
      setUsers(response.data);
    };
    getWhoToFollow();
  }, [loggedUser.token]);

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
    <div className="col-lg-4 col-2 right-partial responsive-sd d-flex justify-content-start">
      <div className="row responsive-sd">
        <div className="col-12 d">
          <div className="col-8 news-box ms-auto mt-3 px-3">
            <h3 className="news-box-title ms-2 mt-3">Trends for you</h3>
            <div className="flex-column">
              <small className="d-block ms-2 mt-3 news-box-p1">
                Programming • Trending
              </small>
              <small className="d-block ms-2 news-box-p2 fw-bold">OpenIA</small>
              <small className="d-block ms-2 news-box-p1">97.5K Tweets</small>
            </div>
            <div>
              <small className="d-block ms-2 mt-3 news-box-p1">
                Entertainment • Trending
              </small>
              <small className="d-block ms-2 news-box-p2 fw-bold">
                StarWars
              </small>
              <small className="d-block ms-2 news-box-p1">97.5K Tweets</small>
            </div>
            <div className="mb-3">
              <small className="d-block ms-2 mt-3 news-box-p1">
                News • Trending
              </small>
              <small className="d-block ms-2 news-box-p2 fw-bold">
                LifeInMars
              </small>
              <small className="d-block ms-2 news-box-p1">97.5K Tweets</small>
            </div>
          </div>

          <div className="col-8 follow-box ms-auto mt-3 px-4">
            <h3 className="news-box-title mt-3 mb-3 ms-2">Who to follow</h3>

            {users.map((user) => {
              return (
                <div key={user._id} className="row mt-2">
                  <div className="col-2">
                    <Link to={`/profile/${user._id}`}>
                      <img
                        src={`${user.image}`}
                        alt="user profile picture"
                        className="image-hardcore-aside rounded-circle ms-2"
                      />
                    </Link>
                  </div>
                  <div className="col-6 ms-2">
                    <Link
                      to={`/profile/${user._id}`}
                      className="text-decoration-none"
                    >
                      <h4 className="follow-content follow-title mb-0 mt-1">
                        {user.firstname} {user.lastname}
                      </h4>
                      <h4 className="follow-subtitle fw-light text-secondary">
                        {user.username}
                      </h4>
                    </Link>
                  </div>
                  <div className="col-3">
                    {loggedUser.following.includes(user._id) ? (
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPartial;
