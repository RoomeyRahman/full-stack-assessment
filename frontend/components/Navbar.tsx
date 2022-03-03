import React from "react";

const Navbar: React.FunctionComponent<{}> = () => {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8 py-2 navbar-bg-color sm:block hidden">
      <div className="flex justify-between">
        <ul className="flex text-white space-x-4 text-md">
          <li>
            <a target="_blank" href="http://twitter.com/StandForTrees">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/standfortrees">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/c/StandForTreesNow/featured"
            >
              <i className="fa fa-youtube-play"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://instagram.com/standfortrees">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:info@standfortrees.org">
              <i className="far fa-envelope"></i>
            </a>
          </li>
        </ul>
        <div className="flex space-x-4 text-gray-100 text-sm">
          <div className="">For Business </div>
          <div>Donations </div>
          <div>Footprint Calculator</div>
          <div>Affiliate Program </div>
          <div>Español </div>
          <div>Português</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;