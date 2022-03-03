import React from "react";
import dynamic from "next/dynamic";

const Img = dynamic(() => import("./Image_Loader"));
const ErrorBoundary = dynamic(() => import("./Error_Boundary"));

type IProps = {};

const Footer: React.FunctionComponent<IProps> = () => {
  return (
    <ErrorBoundary>
      <footer className="border-t border-gray-200 footer-bg-color">
        <div
          className="
          flex flex-col flex-wrap
          md:px-16
          md:py-16
          sm:px-4
          sm:py-4
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
        >
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <Img
              src={"/Code-REDD-Logo-White-Small.png"}
              alt="ilafe"
              width={160}
              height={160}
              quality={100}
              layout="intrinsic"
            />
          </div>
          <div className="justify-between w-full mt-4 text-center lg:flex text-gray-50">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <p className="flex items-center justify-center md:justify-start mb-4">
                242 Redwood Hwy, Mill Valley, CA 94941
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                info@standfortrees.org
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                + 01 234 567 88
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="print"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                  ></path>
                </svg>
                + 01 234 567 89
              </p>
              <p className="text-left">
                Registered 501(c)(3). EIN: 46-0888828
                <br />
                Supported by
              </p>
              <img
                loading="lazy"
                src="https://standfortrees.org/wp-content/uploads/usaid-logo-e1605656346974.png"
                alt=""
                width="200"
                height="78"
              ></img>
            </div>

            <div className="w-full px-4 lg:w-1/3 md:w-1/2 text-left ">
              <ul className="mb-8 space-y-2 text-md list-none">
                <li>
                  <a className="text-white font-bold hover:text-gray-800">
                    {" "}
                    Our Forests
                  </a>
                </li>
                <li>
                  <a className="text-white font-bold hover:text-gray-800">
                    Our Impacts
                  </a>
                </li>
                <li>
                  <a className="text-white font-bold hover:text-gray-800">
                    How It Works
                  </a>
                </li>
                <li>
                  <a className="text-white font-bold hover:text-gray-800">
                    Why Forests Matter
                  </a>
                </li>
                <li>
                  <a className="text-white font-bold hover:text-gray-800">
                    Videos
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <ul className="mb-8 space-y-2 text-md list-none text-left">
                <li>
                  <a className="text-white font-bold hover:text-gray-800">
                    News & Blog
                  </a>
                </li>
                <li>
                  <a className="text-white font-bold hover:text-gray-800">
                    Footprint Calculator
                  </a>
                </li>

                <li>
                  <a className="text-white font-bold hover:text-gray-800">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="text-white font-bold hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-white font-bold hover:text-gray-800">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-8 py-2">
          <p className="text-base text-white">© 2022 Stand For Trees.</p>
          <ul className="flex text-white space-x-4 text-xl">
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
            </li>{" "}
          </ul>
        </div>
        <div
          className="mx-auto px-2 sm:px-6 lg:px-8 navbar-bg-color h-8"
          style={{ background: "#799900" }}
        ></div>
      </footer>
    </ErrorBoundary>
  );
};

export default Footer;
