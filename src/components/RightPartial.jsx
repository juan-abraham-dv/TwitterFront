import React from "react";
function RightPartial() {
  return (
    <div className="col-lg-4 col-2 right-partial responsive-sd">
      <div className="row">
        <div className="col-5">
          <div className="col-8 news-box ms-auto mt-3">
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

          <div className="col-8 follow-box ms-auto mt-3">
            <h3 className="news-box-title mt-3 mb-3 ms-2">Who to follow</h3>
            <div className="row mt-2">
              <div className="col-2">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                  className="image-hardcore-aside rounded-circle ms-2"
                />
              </div>
              <div className="col-6 ms-2">
                <h4 className="follow-content follow-title mb-0 mt-1">
                  Hack Academy
                </h4>
                <h4 className="follow-subtitle fw-light text-secondary">
                  @HackAcademyDev
                </h4>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-hardcode text-white rounded-pill"
                  href="/"
                >
                  Follow
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-2">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                  className="image-hardcore-aside rounded-circle ms-2"
                />
              </div>
              <div className="col-6 ms-2">
                <h4 className=" follow-title mb-0 mt-1">Java Script</h4>
                <h4 className="follow-subtitle fw-light text-secondary">
                  @JavaScript
                </h4>
              </div>
              <div className="col-3">
                <a
                  className="btn btn-hardcode text-white rounded-pill"
                  href="/"
                  role="button"
                >
                  Follow
                </a>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-2">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                  className="image-hardcore-aside rounded-circle ms-2"
                />
              </div>
              <div className="col-6 ms-2">
                <h4 className="follow-title mb-0 mt-1">MongoDB</h4>
                <h4 className="follow-subtitle fw-light text-secondary">
                  @MongoDB
                </h4>
              </div>
              <div className="col-3">
                <a
                  className="btn btn-hardcode text-white rounded-pill"
                  href="/"
                  role="button"
                >
                  Follow
                </a>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-2">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                  className="image-hardcore-aside rounded-circle ms-2"
                />
              </div>
              <div className="col-6 ms-2">
                <h4 className="follow-title mb-0 mt-1">NodeJs</h4>
                <h4 className="follow-subtitle fw-light text-secondary">
                  @NodeJs
                </h4>
              </div>
              <div className="col-3">
                <a
                  className="btn btn-hardcode text-white rounded-pill text-center"
                  href="/"
                  role="button"
                >
                  Follow
                </a>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-2">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                  className="image-hardcore-aside rounded-circle ms-2"
                />
              </div>
              <div className="col-6 ms-2 mb-3">
                <h4 className="follow-title mb-0 mt-1">MDN Web Docs</h4>
                <h4 className="follow-subtitle fw-light text-secondary">
                  @MDN Web Docs
                </h4>
              </div>
              <div className="col-3">
                <a
                  className="btn btn-hardcode text-white rounded-pill"
                  href="/"
                  role="button"
                >
                  Follow
                </a>
              </div>
            </div>

            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPartial;
