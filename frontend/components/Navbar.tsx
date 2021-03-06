import React from "react";
import dynamic from "next/dynamic";

const ErrorBoundary = dynamic(() => import("./Error_Boundary"));

const Navbar: React.FunctionComponent<{}> = () => {
  return (
    <ErrorBoundary>
      <div className="mx-auto px-2 sm:px-6 lg:px-8 py-2 navbar-bg-color sm:block hidden">
        <div className="flex justify-between">
          <ul className="flex text-white space-x-4 text-md">
            <li>
              <a target="_blank" href="http://twitter.com/StandForTrees">
                <i aria-hidden className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/standfortrees">
                <i aria-hidden className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/c/StandForTreesNow/featured"
              >
                <i aria-hidden className="fa fa-youtube-play"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="http://instagram.com/standfortrees">
                <i aria-hidden className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:info@standfortrees.org">
                <i aria-hidden className="far fa-envelope"></i>
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
    </ErrorBoundary>
  );
};

export default Navbar;
