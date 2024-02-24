import React from "react";

const Experience = () => {
  return (
    <section className="relative w-full " id="experience">
      <div className="bg-gradient-to-l py-10  pt-2 from-primary/30 border-t-primary/20 border-t-2  -p-20  -z-10 w-full h-full">
        <div className="text-center container relative">
          <div className="flex justify-center items-center">
            <div className="bg-gradient-to-r mt-40 -ml-32  from-primary/60 to-slate-100/40 rounded-sm w-96 h-10 absolute -z-10 -rotate-[5deg]"></div>
          </div>
          <h1 className="text-2xl md:text-7xl text-slate-700 font-bold mt-10">
            👜Experiences
          </h1>
          <h1 className="">
            This is my work experience that has started since I was in
            vocational high school until now.
          </h1>
        </div>

        {/* Start baru */}

        <div className="mt-10 space-y-10">
          <div className="bg-gradient-to-t relative text-white from-[#5794f8] to-blue-300  w-[340px] md:w-[1000px] mx-auto  h-full border-4 border-blue-500 rounded-xl">
            <div className="md:rounded-xl rounded-lg">
              <div className="p-6">
                <div className="flex xl:flex-row xl:gap-0 gap-5 flex-col items-start">
                  <div className="basis-[20%] text-7xl flex xl:justify-center">
                    <img
                      src="/images/logo.webp"
                      decoding="async"
                      loading="lazy"
                      alt="company logo"
                      className="mt-1 md:w-60 w-40 -ml-2"
                    />{" "}
                  </div>
                  <div className="flex flex-col gap-5 xl:ml-7 basis-[80%]">
                    <div className="flex flex-col xl:gap-1 items-start">
                      <h3 className="xl:text-[40px] md:text-3xl text-2xl font-semibold">
                        AboutMalang.com
                      </h3>
                      <h1 className="xl:mt-0 mt-2 hover:underline duration-150">
                        Malang, Indonesia
                      </h1>
                      <p className="text-lg font-medium mt-2.5">
                        Jun 2022 - Now · 1 Year 5 Months
                      </p>
                    </div>
                    <div className="md:hidden flex justify-start">
                      <p className="md:px-7 bg-blue-500  shadow-white/30 shadow-sm px-5 md:py-4 py-3 text-center text-sm rounded-lg">
                        Freelance Content Creator
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="md:text-2xl text-xl">
                        My Responsibilities:
                      </h3>
                      <ul className="flex flex-col gap-3 ml-4">
                        <li className="md:text-base text-sm list-disc">
                          Meet Expecation Award (586 articles during 3 months of
                          training)
                        </li>
                        <li className="md:text-base text-sm list-disc">
                          Able and willing to produce 10 articles per day
                        </li>
                        <li className="md:text-base text-sm list-disc">
                          Make an article worth reading without plagiarism
                        </li>
                        <li className="md:text-base text-sm list-disc">
                          Working with SEO concept to interact reader
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:absolute hidden right-0 md:flex hover:scale-110 duration-150 justify-end mt-10 mr-10">
                    <p className="md:px-7 bg-blue-500  shadow-sm px-5 md:py-4 py-3 text-center text-sm rounded-lg">
                      Freelance Content Creator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-t relative text-white from-orange-300 to-[#f5bd3a]  w-[340px] md:w-[1000px] mx-auto  h-full border-4 border-orange-400 rounded-xl">
            <div className="md:rounded-xl rounded-lg">
              <div className="p-6">
                <div className="flex xl:flex-row xl:gap-0 gap-5 flex-col items-start">
                  <div className="basis-[20%] text-7xl flex xl:justify-center">
                    <h1>💼</h1>
                  </div>
                  <div className="flex flex-col gap-5 xl:ml-7 basis-[80%]">
                    <div className="flex flex-col xl:gap-1 items-start">
                      <h3 className="xl:text-[40px] md:text-3xl text-2xl font-semibold">
                        Indonesia Multimedia
                      </h3>
                      <h1 className="xl:mt-0 mt-2 hover:underline duration-150">
                        Malang, Indonesia
                      </h1>
                      <p className="text-lg font-medium mt-2.5">
                        Jan 2022 - Jun 2022 · 6 Months
                      </p>
                    </div>
                    <div className="md:hidden flex justify-start">
                      <p className="md:px-7 bg-orange-400  shadow-white/30 shadow-sm px-5 md:py-4 py-3 text-center text-sm rounded-lg">
                        Creative Internship
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="md:text-2xl text-xl">
                        My Responsibilities:
                      </h3>
                      <ul className="flex flex-col gap-3 ml-4">
                        <li className="md:text-base text-sm list-disc">
                          Learn everything related to social media and the world
                          of online industry{" "}
                        </li>
                        <li className="md:text-base text-sm list-disc">
                          Developing skills in making posts that are worth
                          sharing on social media{" "}
                        </li>
                        <li className="md:text-base text-sm list-disc">
                          Learning about wordpress and website development to
                          UI/UX Design
                        </li>
                        <li className="md:text-base text-sm list-disc">
                          Creating simple websites with PHP programming language
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:absolute hidden right-0 md:flex hover:scale-110 duration-150 justify-end mt-10 mr-10">
                    <p className="md:px-7 bg-orange-400  shadow-sm px-5 md:py-4 py-3 text-center text-sm rounded-lg">
                      Creative Internship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-t relative text-white from-green-600 to-green-300  w-[340px] md:w-[1000px] mx-auto  h-full border-4 border-green-300 rounded-xl">
            <div className="md:rounded-xl rounded-lg">
              <div className="p-6">
                <div className="flex xl:flex-row xl:gap-0 gap-5 flex-col items-start">
                  <div className="basis-[20%] flex xl:justify-center">
                    <img
                      src="/images/bd.png"
                      decoding="async"
                      loading="lazy"
                      alt="company logo"
                      className="mt-1 md:w-60 w-40 -ml-2"
                    />
                  </div>
                  <div className="flex flex-col gap-5 xl:ml-7 basis-[80%]">
                    <div className="flex flex-col xl:gap-1 items-start">
                      <h3 className="xl:text-[40px] md:text-3xl text-2xl font-semibold">
                        Birudeun Creative
                      </h3>
                      <a
                        href="https://instagram.com/birudeun.creative"
                        target="_blank"
                        rel="noreferrer"
                        className="xl:mt-0 mt-2 hover:underline duration-150"
                      >
                        Malang, Indonesia{" "}
                      </a>
                      <p className="text-lg font-medium mt-2.5">
                        <h1>Nov 2021 - Mei 2022 · 7 Months</h1>
                      </p>
                    </div>
                    <div className="md:hidden flex justify-start">
                      <p className="md:px-7 bg-green-500 w-60 shadow-white/30 shadow-sm px-5 md:py-4 py-3 text-center text-sm rounded-lg">
                        Visual Creative Department Staff
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="md:text-2xl text-xl">
                        My Responsibilities:
                      </h3>
                      <ul className="flex flex-col gap-3 ml-4">
                        <li className="md:text-base text-sm list-disc">
                          Create designs for client&apos;s Instagram posts
                        </li>
                        <li className="md:text-base text-sm list-disc">
                          Adjust performance with KPIs that must be achieved
                        </li>
                        <li className="md:text-base text-sm list-disc">
                          Responsible for the correctness of the post and the
                          information included
                        </li>
                        <li className="md:text-base text-sm list-disc">
                          Posting uploads on Instagram with copywriting
                          techniques as an attraction{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:absolute hidden right-0 md:flex hover:scale-110 duration-150 justify-end mt-10 mr-10">
                    <p className="md:px-7 bg-green-500 w-60 shadow-sm px-5 md:py-4 py-3 text-center text-sm rounded-lg">
                      Visual Creative Department Staff
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
