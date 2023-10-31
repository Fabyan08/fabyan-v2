import "./style.css";
const Experiences = () => {
  return (
    <>
      <div className="relative w-full " id="experience">
        <div className="bg-gradient-to-l py-10  pt-2 from-primary/30 border-t-primary/20 border-t-2  -p-20  -z-10 w-full h-full">
          <img loading="lazy"
            src="/images/pattern2.jpg"
            className="absolute -mt-40 md:-mt-0 h-full w-full -z-[400] opacity-[30%]"
            alt=""
          />
          <img loading="lazy" src="/images/man2.gif" className="hidden md:flex absolute left-0" alt="" />
          <img loading="lazy" src="/images/man3.gif" className="absolute hidden md:flex right-0  bottom-0" alt="" />

          <div className="text-right container">
            <h1 className="text-2xl md:text-7xl font-bold mt-10">
              My Experiences
            </h1>
            <h1 className="">
            This is my work experience that has started since I was in vocational high school until now.
            </h1>
          </div>

          <div className="mt-10 relative flex container  items-end justify-end">
            <div className="border-gradient4 hover:scale-105 duration-150 w-[600px] h-fit">
              <div className="flex justify-between p-2 items-center">
                <img loading="lazy" src="/images/bd.png" className="w-40 " alt="" />
                <h1 className="border-t-4 text-center border-green-500 border-l-4 border-r-4 rounded-lg p-2">
                  Visual Creative Department Staff
                </h1>
              </div>
              <div className="p-2">
                <h1 className="text-xl text-slate-500 font-semibold">
                  Nov 2021 - Mei 2022 · 7 Months
                </h1>
                <h1 className=" font-semibold">
                  Working from vocational high school in the field of social
                  media development and design to increase engagement
                </h1>
                <div className="mt-4">
                  <h1 className="text-green-500 w-fit font-bold text-3xl rounded-xl">
                    🧑‍💻Responsibility and things I did
                  </h1>
                  <ul className="text-md font-semibold">
                    <li>• Create designs for client&apos;s Instagram posts</li>
                    <li>
                      • Adjust performance with KPIs that must be achieved
                    </li>
                    <li>
                      • Responsible for the correctness of the post and the
                      information included
                    </li>
                    <li>
                      • Posting uploads on Instagram with copywriting techniques
                      as an attraction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <img loading="lazy"
              src="/images/arrow2.png"
              className="absolute bottom-0  -z-10 right-[450px] hidden md:flex"
              alt=""
            />
          </div>
          <div className="mt-10 relative flex container  items-center justify-center">
            <div className="border-gradient5 hover:scale-105 duration-150  w-[600px] h-fit">
              <div className="flex justify-between p-2 items-center">
                <h1 className="font-bold text-xl">💼Indonesia Multimedia</h1>{" "}
                <h1 className="border-t-4 text-center border-orange-300 border-l-4 border-r-4 rounded-lg p-2">
                  Internship
                </h1>
              </div>
              <div className="p-2">
                <h1 className="text-xl text-slate-500 font-semibold">
                  Jan 2022 - Jun 2022 · 6 Months{" "}
                </h1>
                <h1 className=" font-semibold">
                  Internship at a CV that aims to learn the needs of the world
                  of work and apply school knowledge to real work.
                </h1>
                <div className="mt-4">
                  <h1 className="text-orange-300 w-fit font-bold text-3xl rounded-xl">
                    👨🏻‍💻Responsibility and things I did
                  </h1>
                  <ul>
                    <li>
                      • Learn everything related to social media and the world
                      of online industry
                    </li>
                    <li>
                      • Developing skills in making posts that are worth sharing
                      on social media
                    </li>
                    <li>
                      • Learning about wordpress and website development to
                      UI/UX Design
                    </li>
                    <li>
                      • Creating simple websites with PHP programming language
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <img loading="lazy"
              src="/images/arrow2.png"
              className="absolute bottom-0  hidden md:flex -z-10 left-40"
              alt=""
            />
          </div>

          <div className="mt-10  flex container items-start justify-start">
            <div className="border-gradient3  hover:scale-105 duration-150 w-[600px] h-fit">
              <div className="flex justify-between space-x-4 p-2 items-center">
                <img loading="lazy" src="/images/logo.webp" className="w-40 " alt="" />
                <h1 className="border-t-4 text-center border-primary border-l-4 border-r-4 rounded-lg p-2">
                  Freelance Content Creator{" "}
                </h1>
              </div>
              <div className="p-2">
                <h1 className="text-xl text-slate-500 font-semibold">
                  Jun 2022 - Now · 1 Year 5 Months{" "}
                </h1>
                <h1 className=" font-semibold">
                  Working as a freelance content creator is writing articles
                  with SEO techniques to attract readers to generate profits.
                </h1>
                <div className="mt-4">
                  <h1 className="text-primary w-fit font-bold text-3xl rounded-xl">
                    🙇🏼‍♂️Responsibility and things I did
                  </h1>
                  <ul>
                    <li>
                      • Meet Expecation Award (586 articles during 3 months of
                      training)
                    </li>
                    <li>• Able and willing to produce 10 articles per day</li>
                    <li>• Make an article worth reading without plagiarism</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
