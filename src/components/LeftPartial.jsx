import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function LeftPartial() {
  const loggedUser = useSelector((state) => state.user);

  console.log(loggedUser);
  return (
    <div className="col-3 left-partial">
      <div className="row">
        <div className="col-md-4 col-3"></div>
        <div className="col-md-6 col-8 d-flex flex-column">
          <div className="row mt-2 mb-1 responsive-md">
            <i className="bi bi-twitter twitterSymbol fs-4"></i>
          </div>
          <div className="row mt-2 mb-1 icon-responsive responsive-lg ">
            <i className="bi bi-twitter twitterSymbol fs-4"></i>
          </div>
          <div className="row mt-4">
            <a
              href="/"
              className="text-decoration-none text-black home-left-partial responsive-md"
            >
              <span>
                <i className="bi bi-house-door me-3"></i>Home
              </span>
            </a>
            <a
              href="/"
              className="icon-responsive ms-2 text-decoration-none text-black responsive-lg"
            >
              <span>
                <i className="bi bi-house-door me-3"></i>
              </span>
            </a>
          </div>
          <div className="row mt-4">
            <Link to={`profile/${loggedUser.id}`}>
              <span>
                <i className="bi bi-person me-3"></i>Profile
              </span>

              <span>
                <i className="bi bi-person me-3"></i>
              </span>
            </Link>
          </div>
          <div className="row mt-4">
            <div>
              <a
                className="btn btn-home text-white rounded-pill w-100 responsive-md"
                href="/"
                role="button"
              >
                Tweet
              </a>
            </div>
            <div className="icon-responsive">
              <a
                className=" btn btn-secondary btn-home-md responsive-lg"
                href="/"
                role="button"
              >
                <i className="fa-sharp fa-solid fa-feather-pointed"></i>
              </a>
            </div>
          </div>
          <div className="row mt-auto mb-4">
            <div className="col-12 mb-4">
              <a
                className="btn btn-secondary btn-logout mt-auto rounded-pill w-100 responsive-md"
                href="/logout"
                role="button"
              >
                Logout
              </a>
            </div>
            <div className="col-12 mb-4 icon-responsive">
              <a
                className="btn btn-secondary btn-logout-md mt-auto responsive-lg"
                href="/logout"
                role="button"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default LeftPartial;
