import React from "react";
import LeftPartial from "./LeftPartial";
import RightPartial from "./RightPartial";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { addFollowing } from "../redux/userReducer";
import noFollow from "./img/no_follow.png";

function Followings() {
  const [user, setUser] = useState();
  const loggedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/users/${params.id}/following`,
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });
      setUser(response.data);
    };
    getUserData();
  }, [loggedUser.token, params.id]);

  const handleFollowUser = async (followerId) => {
    const { data: updatedFollowData } = await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BACKEND_URL}/users/${followerId}/follow`,
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });

    const followingList = updatedFollowData.followingList;

    dispatch(addFollowing({ followingList }));
  };

  return (
    <div className="container">
      <div className="row gx-5">
        <LeftPartial />
        {user ? (
          <div className="col-5 followlist-central-box central-box-responsive">
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
                <Link className="link-follow" to={`/${user._id}/following`}>
                  Following
                </Link>
                <span className="active-section-border-follow"></span>
              </div>
              <div className="col-6 mt-3 text-center mb-3 ">
                <Link className="link-follow" to={`/${user._id}/followers`}>
                  Followers
                </Link>
              </div>
            </div>
            {user.following.length > 0 ? (
              user.following.map((follower) => {
                return (
                  <div key={follower._id} className="row tweet-list mt-3">
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
                      {loggedUser.following.includes(follower._id) ? (
                        <button
                          onClick={() => handleFollowUser(follower._id)}
                          className="text-decoration-none text-black btn following-btn-medium text-black rounded-pill mt-2 ms-3"
                        >
                          Following
                        </button>
                      ) : (
                        <button
                          onClick={() => handleFollowUser(follower._id)}
                          className="text-decoration-none text-black btn follow-btn-medium text-white rounded-pill mt-2 ms-3"
                        >
                          Follow
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <div className="w-75 mx-auto mt-5">
                  <img
                    src={`${noFollow}`}
                    alt="Birds in powerline"
                    width={"90%"}
                    className="mb-4"
                  />
                  <h2 className="bolder-text">
                    @{user.username} isn't following anyone
                  </h2>
                  <p className="text-secondary smaller-text">
                    Once they follow accounts, they'll show up here.
                  </p>
                </div>
              </>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <RightPartial />
      </div>
    </div>
  );
}

export default Followings;
