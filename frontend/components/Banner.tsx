import { Disclosure } from "@headlessui/react";
import dynamic from "next/dynamic";

const ErrorBoundary = dynamic(() => import("./Error_Boundary"));

const Banner: React.FunctionComponent<{}> = () => {
  const renderMobileView = () => {
    return (
      <>
        <div className="px-2 pt-2 pb-3 space-y-1 mble-navbar-bg-color">
          <div className="flex flex-col text-white font-bold">
            <div className="flex justify-center">
              <img
                alt="Stand For Trees"
                src="https://standfortrees.org/wp-content/uploads/2020/03/SFT-Logo-Long-White.png"
                width={170}
                height={49}
              />
            </div>
            <div>OUR FORESTS</div>
            <div>OUR IMPACTS </div>
            <div> HOW IT WORKS</div>
            <div>WHY FORESTS </div>
            <div>MEDIA & BLOG </div>
            <div> ABOUT</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <ErrorBoundary>
      <div className="h-full w-full">
        <div
          className="top-0 left-0 right-0"
          style={{
            backgroundImage: `url("https://standfortrees.org/wp-content/uploads/2020/03/pfc-boy-web-scaled.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "100% 100%",
            minWidth: "100%",
            height: "calc(0.664 * 100vw)",
          }}
        >
          <div className="sticky top-0">
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="mx-auto px-2 sm:px-6 lg:px-8 ">
                    <div className="flex sm:justify-between justify-end">
                      <div className="sm:block hidden">
                        <img
                          alt="Stand For Trees"
                          src="https://standfortrees.org/wp-content/uploads/2020/03/SFT-Logo-Long-White.png"
                          width={170}
                          height={49}
                        />
                      </div>

                      <div className="flex justify-around text-gray-100 font-bold text-md space-x-4">
                        <div className="sm:block hidden">
                          <div className="flex space-x-4 pt-3">
                            <div>OUR FORESTS</div>
                            <div>OUR IMPACTS </div>
                            <div> HOW IT WORKS</div>
                            <div>WHY FORESTS </div>
                            <div>MEDIA & BLOG </div>
                            <div> ABOUT</div>
                          </div>
                        </div>
                        <div className="flex space-x-4 pt-3">
                          <div className="">USD </div>
                          <i aria-hidden className="fas fa-search text-xl"></i>
                          <i aria-hidden className="fas fa-user text-xl"></i>
                          <i
                            aria-hidden
                            className="fas fa-briefcase text-xl"
                          ></i>
                          <Disclosure.Button className="inline-flex items-center justify-center px-2 rounded-md text-gray-400 hover:text-white sm:hidden">
                            {open ? (
                              <i
                                aria-hidden
                                className="far fa-times-circle block text-xl text-white"
                              ></i>
                            ) : (
                              <i
                                aria-hidden
                                className="fas fa-bars block text-xl text-white"
                              ></i>
                            )}
                          </Disclosure.Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Disclosure.Panel className="sm:hidden">
                    {renderMobileView()}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Banner;
