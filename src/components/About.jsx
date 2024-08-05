import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutSectionRef = useRef(null);
  const aboutHeadRef = useRef(null);
  const aboutHeadTextRef = useRef(null);

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(
      aboutHeadRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        transition: "all ease 0.5s",
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    tl.fromTo(
      aboutHeadTextRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        transition: "all ease 0.5s",
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white py-12">
      <div
        ref={aboutSectionRef}
        className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <h1 ref={aboutHeadRef} className="text-4xl font-bold text-center mb-8">
          About Us
        </h1>

        <section className="mb-[14vw] text-center">
          <p ref={aboutHeadTextRef} className="text-lg mb-4"></p>
          <p ref={aboutHeadTextRef} className="text-xl leading-9">
            Welcome to [Brand Name]! We are a passionate team dedicated to
            delivering exceptional web and app development services tailored to
            your needs. <br /> Our mission is to help businesses thrive in the digital
            world with innovative and user-friendly solutions. Whether you're
            looking to build a new website or develop a mobile app, we've got
            you covered.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-semibold text-blue-600 mb-6">
            Meet the Team
          </h2>
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="team-member-1.jpg"
                alt=""
              />
              <h3 className="text-xl font-semibold">Name</h3>
              <p className="text-blue-400">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="team-member-2.jpg"
                alt=""
              />
              <h3 className="text-xl font-semibold">Name</h3>
              <p className="text-blue-400">Lead Developer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
