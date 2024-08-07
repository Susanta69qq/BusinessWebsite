import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

function Footer() {

  const footerHeadSection = useRef(null);
  const buttonSection = useRef(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      footerHeadSection.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: "power3.out",
        transition: "all ease 0.5s",
        scrollTrigger: {
          trigger: footerHeadSection.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    tl.fromTo(
      buttonSection.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: "power3.out",
        transition: "all ease 0.5s",
        scrollTrigger: {
          trigger: footerHeadSection.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setIsFormVisible(true);
  };

  return (
    <div className="w-full h-screen bg-zinc-900 px-4 sm:px-8 md:px-20 py-8">
      <div ref={footerHeadSection} className="py-16 text-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tighter">
            Ready To Try
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tighter">
            Our Services?
          </h1>
        </div>
        <h1 className="text-center text-lg sm:text-xl md:text-2xl mt-4">
          Join [Brand Name] to accelerate your Business online!
        </h1>
      </div>
      <div ref={buttonSection} className="w-full flex justify-center mb-8">
        <div
          onClick={handleGetStartedClick}
          className="bg-[#2263EB] px-6 py-3 rounded-md hover:bg-blue-800 hover:text-gray-200 transition-all cursor-pointer"
        >
          <a className="font-semibold" href="#">
            Get Started it's free
          </a>
        </div>
      </div>
      <hr className="opacity-30" />
      <footer className="mt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0">© 2024 [Brand Name], Inc. All rights reserved</p>
        <div className="social flex gap-5 text-[18px] opacity-60">
          <a className="hover:text-[#1DA1F2]" href="#">
            <i className="ri-twitter-x-line"></i>
          </a>
          <a className="hover:text-[#0073B2]" href="#">
            <i className="ri-linkedin-line"></i>
          </a>
          <a className="hover:text-[#FE4341]" href="#">
            <i className="ri-instagram-line"></i>
          </a>
          <a className="hover:text-[#0F8FF2]" href="#">
            <i className="ri-facebook-fill"></i>
          </a>
        </div>
      </footer>
      <ContactForm isVisible={isFormVisible} onClose={() => setIsFormVisible(false)} />
    </div>
  );
}

export default Footer;
