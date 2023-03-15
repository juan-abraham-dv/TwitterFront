import React from "react";

export default function Followers() {
  <div className="container-fluid">
    <div className="row subContainer gx-5">
      <div className="col-5 followlist-central-box">
        <div className="row new-tweet-box">
          <div className="col-1 mt-4">
            <a
              href={`/profile/${userFollowers.username}`}
              className="text-black"
            >
              <i className="fa-sharp fa-solid fa-arrow-left"></i>
            </a>
          </div>
          <div className="col-11 mt-2">
            <h1 className="follower-name">
              {userFollowers.firstname} {userFollowers.lastname}
            </h1>
            <h2 className="follower-username fw-light text-secondary">
              @{userFollowers.username}
            </h2>
          </div>
          <div className="col-6 mt-3 text-center mb-3 position-relative">
            <a
              className="link-follow"
              href={`/profile/${userFollowers.username}/followers`}
            >
              Followers
            </a>
            <span className="active-section-border-follow"></span>
          </div>
          <div className="col-6 mt-3 text-center mb-3">
            <a
              className="link-follow"
              href={`/profile/${userFollowers.username}/following`}
            >
              Following
            </a>
          </div>
        </div>

        {userFollowers.followers.map((follower) => {
          <div className="row tweet-list mt-3">
            <div className="col-2 text-center">
              <a href={`/profile/${follower.username}`}>
                <img
                  src={follower.image}
                  alt=""
                  className="rounded-circle follow-tweet-profile-img"
                />
              </a>
            </div>
            <div className="col-6">
              <a
                href={`/profile/${follower.username}`}
                className="text-decoration-none"
              >
                <h4 className="follow-content follow-title">
                  {follower.firstname}
                </h4>
                <h4 className="follow-content follow-subtitle text-secondary fw-light">
                  @{follower.username}
                </h4>
              </a>
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
          </div>;
        })}
      </div>
    </div>
  </div>;
}
