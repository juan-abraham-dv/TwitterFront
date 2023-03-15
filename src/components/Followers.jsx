import React from "react";

export default function Followers() {
  <div class="container-fluid">
    <div class="row subContainer gx-5">
      <div class="col-5 followlist-central-box">
        <div class="row new-tweet-box">
          <div class="col-1 mt-4">
            <a href={`/profile/${userFollowers.username}`} class="text-black">
              <i class="fa-sharp fa-solid fa-arrow-left"></i>
            </a>
          </div>
          <div class="col-11 mt-2">
            <h1 class="follower-name">
              {userFollowers.firstname} {userFollowers.lastname}
            </h1>
            <h2 class="follower-username fw-light text-secondary">
              @{userFollowers.username}
            </h2>
          </div>
          <div class="col-6 mt-3 text-center mb-3 position-relative">
            <a
              class="link-follow"
              href={`/profile/${userFollowers.username}/followers`}
            >
              Followers
            </a>
            <span class="active-section-border-follow"></span>
          </div>
          <div class="col-6 mt-3 text-center mb-3">
            <a
              class="link-follow"
              href={`/profile/${userFollowers.username}/following`}
            >
              Following
            </a>
          </div>
        </div>

        {userFollowers.followers.map((follower) => {
          <div class="row tweet-list mt-3">
            <div class="col-2 text-center">
              <a href={`/profile/${follower.username}`}>
                <img
                  src={follower.image}
                  alt=""
                  class="rounded-circle follow-tweet-profile-img"
                />
              </a>
            </div>
            <div class="col-6">
              <a
                href={`/profile/${follower.username}`}
                class="text-decoration-none"
              >
                <h4 class="follow-content follow-title">
                  {follower.firstname}
                </h4>
                <h4 class="follow-content follow-subtitle text-secondary fw-light">
                  @{follower.username}
                </h4>
              </a>
            </div>
            <div class="col-2">
              {user.following.includes(follower._id) ? (
                <a
                  href={`/${follower._id}/follow`}
                  class="text-decoration-none text-black btn following-btn-medium text-black rounded-pill mt-2 ms-3"
                >
                  Following
                </a>
              ) : (
                <a
                  href={`/${follower._id}/follow`}
                  class="text-decoration-none text-black btn follow-btn-medium text-white rounded-pill mt-2 ms-3"
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
