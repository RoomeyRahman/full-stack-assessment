const Faq: React.FunctionComponent<{}> = () => {
  return (
    <>
      <div className="bg-white py-8">
        <div className="max-w-xl mx-auto text-white p-6 bg-black -mt-20">
          <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-full mb-4 pt-10">
          <div>
            <div className="text-gray-700">
              <div className="container px-5 py-15 mx-auto">
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div className="w-full px-4 py-2">
                    <details className="mb-4 border-b-2 border-gray-200">
                      <summary className="rounded-md py-4 px-6 flex justify-between hover:text-emerald-300">
                        <div className="text-3xl font-bold">
                          What is a certificate?
                        </div>
                        <i className="fas fa-plus text-3xl"></i>
                      </summary>
                      <div className="font-base text-lg text-left rounded-md py-4 px-8">
                        Stand For Trees Certificates are measurable, verified,
                        high-quality carbon credits that prevent carbon dioxide
                        from entering the Earth’s atmosphere by protecting a
                        specific endangered forest. Because every one of these
                        forests also protects wildlife and ecosystems and
                        supports local livelihoods, each certificate represents
                        measurable impacts for climate, communities, and
                        biodiversity.
                      </div>
                    </details>
                    <p>
                      If you have any further questions, please contact us at{" "}
                      <a
                        className="text-emerald-300 text-xl"
                        href="mailto:info@standfortrees.org"
                      >
                        info@standfortrees.org
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
