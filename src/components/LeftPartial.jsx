import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import homeIcon from "./img/twitter_home_icon.png";

function LeftPartial() {
  const loggedUser = useSelector((state) => state.user);
  return (
    <div className="col-3 left-partial">
      <div className="row">
        <div className="col-5"></div>
        <div className="col-6 d-flex flex-column icon-box">
          <div className="row mt-2 mb-1 responsive-md">
            <i className="bi bi-twitter twitterSymbol fs-4"></i>
          </div>
          <div className="row mt-2 mb-1 icon-responsive responsive-lg ">
            <i className="bi bi-twitter twitterSymbol fs-4"></i>
          </div>
          <div className="row mt-4">
            <Link
              to={`/`}
              className="text-decoration-none text-black responsive-md"
            >
              <div className="d-flex align-items-baseline fw-bold">
                <img
                  src={`${homeIcon}`}
                  alt="Home icon"
                  className="navbar-icon-size my-auto"
                />
                <span className="ms-3 navbar-label-size">Home</span>
              </div>
            </Link>
            <Link
              to={`/`}
              className="text-decoration-none text-black responsive-lg"
            >
              <div className="d-flex align-items-baseline fw-bold">
                <span className="navbar-label-size">
                  <img
                    src={`${homeIcon}`}
                    alt="Home icon"
                    className="navbar-icon-size my-auto"
                  />
                </span>
              </div>
            </Link>
          </div>

          <div className="row mt-4">
            <Link
              to={`profile/${loggedUser.id}`}
              className="text-decoration-none text-black home-left-partial responsive-md "
            >
              <div className="d-flex align-items-baseline fw-bold fs-5">
                <span>
                  <i className="bi bi-person fs-3"></i>
                </span>
                <span className="ms-3 navbar-label-size">Profile</span>
              </div>
            </Link>

            <Link
              to={`profile/${loggedUser.id}`}
              className="text-decoration-none text-black home-left-partial responsive-lg "
            >
              <div className="d-flex align-items-baseline fw-bold fs-5">
                <span className="navbar-label-size">
                  <i className="bi bi-person"></i>
                </span>
              </div>
            </Link>
          </div>
          <div className="row mt-4">
            <div>
              <a
                className="btn btn-home text-white rounded-pill w-100 responsive-md fw-bold"
                href="/"
                role="button"
              >
                Tweet
              </a>
            </div>
            <div className="icon-responsive ">
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
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default LeftPartial;
