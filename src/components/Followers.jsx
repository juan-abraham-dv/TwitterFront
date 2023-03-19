import React from "react";
import LeftPartial from "./LeftPartial";
import RightPartial from "./RightPartial";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Followers() {
  const [user, setUser] = useState();
  const loggedUser = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/users/${params.id}/followers`,
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });
      setUser(response.data);
    };
    getUserData();
  }, []);
  return (
    <div className="container">
      <div className="row gx-5">
        <LeftPartial />
        {user ? (
          <div className="col-5 followlist-central-box">
            <div className="row new-tweet-box">
              <div className="col-2 mt-4">
                <i
                  className="bi bi-arrow-left fs-5 cursor-pointer"
                  onClick={() => navigate(-1)}
                ></i>
              </div>
              <div className="col-10 mt-2">
                <h1 className="follower-name fw-bold fs-5 mb-1">
                  {user.firstname} {user.lastname}
                </h1>
                <h2 className="fw-light text-secondary small-2-text">
                  @{user.username}
                </h2>
              </div>
              <div className="col-6 mt-3 text-center mb-3 position-relative">
                <Link
                  className="link-follow"
                  to={`/profile/${user._id}/followers`}
                >
                  Followers
                </Link>
                <span className="active-section-border-follow"></span>
              </div>
              <div className="col-6 mt-3 text-center mb-3">
                <Link
                  className="link-follow"
                  to={`/profile/${user._id}/following`}
                >
                  Following
                </Link>
              </div>
            </div>
            {user.followers.map((follower) => {
              return (
                <div className="row tweet-list mt-3">
                  <div className="col-2 text-center">
                    <Link
                      className="link-follow"
                      to={`/profile/${follower._id}`}
                    >
                      <img
                        src={follower.image}
                        alt=""
                        className="rounded-circle follow-tweet-profile-img"
                      />
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      className="link-follow"
                      to={`/profile/${follower._id}`}
                    >
                      <h4 className="follow-content follow-title mb-1">
                        {follower.firstname}
                      </h4>
                      <h4 className="follow-content follow-subtitle text-secondary fw-light">
                        @{follower.username}
                      </h4>
                    </Link>
                  </div>
                  <div className="col-2">
                    {user.following.includes(follower._id) ? (
                      <a
                        href={`/${follower._id}/follow`}
                        className="text-decoration-none text-black btn following-btn-medium text-black rounded-pill mt-2 ms-3"
                      >
                        Following
                      </a>
                    ) : (
                      <a
                        href={`/${follower._id}/follow`}
                        className="text-decoration-none text-black btn follow-btn-medium text-white rounded-pill mt-2 ms-3"
                      >
                        Follow
                      </a>
                    )}
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
  );
}

export default Followers;
