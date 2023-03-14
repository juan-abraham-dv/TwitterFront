import React from "react";

export default function Profile() {
  const timeDiffInMinutes = Math.round(
    (Date.now() - tweet.createdAt.getTime()) / (1000 * 60)
  );
  const timeDiffInHours = Math.round(timeDiffInMinutes / 60);

  return (
    <div className="container-fluid">
      <div className="row subContainer gx-5">
        <div className="col-5 px-0">
          <div className="d-flex flex-column profile-main-section">
            <div className="w-100 background-color-twitter profile-banner"></div>
            <div className="row w-100 profile-info px-3">
              <div className="col-5 profile-info-subcontainer-left">
                <img
                  src={
                    userData.image.includes("http")
                      ? `${userData.image}`
                      : `/img/${userData.image}`
                  }
                  className="profile-photo rounded-circle"
                  alt="Profile photo"
                />
                <div className="position-absolute bottom-0 pb-5">
                  <h2 className="fs-4 mb-1">{`${userData.firstname} ${userData.lastname}`}</h2>
                  <h4 className="follow-subtitle fw-light text-secondary">
                    @{userData.username}
                  </h4>
                </div>
                <div className="mt-3 position-absolute bottom-0 active-section-border-tweet">
                  <span>Tweets</span>
                </div>
              </div>
              <div className="col-7 pt-3 profile-info-subcontainer-right">
                <div className="d-flex flex-column align-items-end h-100">
                  {user.email === userData.email ? (
                    <a
                      className="btn following-btn-medium text-black rounded-pill"
                      href="#"
                      role="button"
                    >
                      Edit
                    </a>
                  ) : user.following.includes(userData._id) ? (
                    <a
                      className="btn following-btn-medium text-black rounded-pill"
                      href={`/${userData._id}/follow`}
                      role="button"
                    >
                      Following
                    </a>
                  ) : (
                    <a
                      className="btn follow-btn-medium text-white rounded-pill"
                      href={`/${userData._id}/follow`}
                      role="button"
                    >
                      Follow
                    </a>
                  )}

                  <div className="mt-auto pb-5">
                    <a
                      className="text-black text-decoration-none me-3 small-text"
                      href={`/profile/${userData.username}/following`}
                    >
                      <span className="fw-bold me-2">
                        {userData.following.length}
                      </span>{" "}
                      <span className="text-secondary">Following</span>
                    </a>
                    <a
                      className="text-black text-decoration-none small-text"
                      href={`/profile/${userData.username}/followers`}
                    >
                      <span className="fw-bold me-2">
                        {userData.followers.length}
                      </span>
                      <span className="text-secondary">Followers</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {userData.tweetList.map((tweet) => {
            <div className="row tweet-list mt-3 gx-0">
              <div className="col-2 d-flex justify-content-center h-25">
                <img
                  src="<%= userData.image %>"
                  alt="Profile image"
                  className="rounded-circle home-tweet-profile-img"
                />
              </div>

              <div className="col-9">
                <h4 className="d-inline follow-content follow-title">
                  {userData.firstname} {userData.lastname}
                </h4>
                <h4 className="d-inline follow-subtitle text-secondary fw-light">
                  @{userData.username} •
                  {timeDiffInMinutes < 1
                    ? "Just Now"
                    : timeDiffInMinutes < 60
                    ? `${timeDiffInMinutes}m`
                    : timeDiffInHours >= 1 && timeDiffInHours <= 24
                    ? `${timeDiffInHours}h`
                    : tweet.createdAt.toLocaleString("default", {
                        month: "short",
                        day: "numeric",
                      })}
                </h4>
                <p className="tweet-content">{tweet.content}</p>

                <section className="mb-3 d-flex justify-content-between">
                  <div>
                    {tweet.likes.includes(user._id) ? (
                      <a
                        href={`/${tweet._id}/like`}
                        className="text-decoration-none text-black"
                      >
                        <i className="bi bi-heart-fill heart-likes"></i>
                        <small className="ms-2 number-likes">
                          {tweet.likes.length}
                        </small>
                      </a>
                    ) : (
                      <a
                        href={`/${tweet._id}/like`}
                        className="text-decoration-none text-black"
                      >
                        <i className="bi bi-heart"></i>
                        <small className="ms-2">{tweet.likes.length}</small>
                      </a>
                    )}
                  </div>
                  {user.email === userData.email ? (
                    <div>
                      <form
                        action={`/delete-tweet/${tweet._id}?_method=DELETE`}
                        method="POST"
                      >
                        <button type="submit" name="submitBtn" className="btn">
                          <i className="bi bi-trash3-fill text-danger"></i>
                        </button>
                      </form>
                    </div>
                  ) : (
                    <></>
                  )}
                </section>
              </div>
            </div>;
          })}

          {userData.tweetlist.length === 0 && (
            <div className="text-center rounded w-75 py-3 my-3 mx-auto tweetlist-error">
              <h3 className="fs-6  mb-0 text-white">
                Start writing tweets and find them here!
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
