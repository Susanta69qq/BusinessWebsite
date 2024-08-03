import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IoIosGitNetwork } from "react-icons/io";

function LandingPage() {
  const texts = useRef([]);
  const workWithUs = useRef(null);
  const workWithUsBg = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    texts.current.forEach((text, index) => {
      tl.fromTo(
        text,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.5,
          ease: "power3.out",
        },
        index * 0.2
      );
    });

    tl.fromTo(
      workWithUs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap
      .timeline()
      .to(workWithUsBg.current, {
        height: "100%",
        duration: 0.5,
        ease: "power3.out",
      })
      .to(
        workWithUs.current,
        { color: "#000000", duration: 0.5, ease: "power3.out" },
        "-=0.5"
      );
  };

  const handleMouseLeave = () => {
    gsap
      .timeline()
      .to(workWithUsBg.current, {
        height: "0%",
        duration: 0.5,
        ease: "power3.out",
      })
      .to(
        workWithUs.current,
        { color: "#ffffff", duration: 0.5, ease: "power3.out" },
        "-=0.5"
      );
  };

  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 flex flex-col justify-between">
      <div className="textStructure mt-[30vh] sm:mt-[30vh] md:mt-[15vw] px-5 md:px-20">
        {["Your Vision,", "Our Expertise,", "Web Solutions Made Easy"].map(
          (item, index) => {
            return (
              <div key={index} className="masker">
                <h1
                  ref={(el) => (texts.current[index] = el)}
                  className="uppercase text-[11vw] sm:text-[10vw] md:text-[6vw] opacity-80 leading-[14vw] sm:leading-[12vw] md:leading-[7vw] tracking-tighter font-semibold"
                >
                  {item}
                </h1>
              </div>
            );
          }
        )}
      </div>
      <div className="divider px-5 md:px-20 mb-10 md:mb-0">
        <hr className="opacity-75" />
        <div className="flex justify-end items-center gap-5 mt-3">
          <div
            ref={workWithUs}
            className="relative px-5 py-2 border-[1px] border-zinc-400 font-light rounded-full flex items-center gap-2 capitalize overflow-hidden"
            style={{ color: "#ffffff" }} // Initial text color for smooth animation
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={workWithUsBg}
              className="absolute inset-0 bg-white"
              style={{
                height: "0%",
                width: "100%",
                zIndex: -1,
                transformOrigin: "top",
              }}
            ></div>
            <a href="" className="relative z-10 font-semibold">
              Work with us
            </a>
            <div className="w-3 h-3 rounded-full relative z-10">
              <IoIosGitNetwork />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
