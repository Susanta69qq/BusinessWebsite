import { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import gsap from "gsap";

function Navbar() {
  const links = useRef([]);

  useEffect(() => {
    links.current.forEach((link) => {
      const underline = document.createElement("div");
      underline.style.position = "absolute";
      underline.style.left = "0";
      underline.style.bottom = "-18px";
      underline.style.height = "1px";
      underline.style.width = "100%";
      underline.style.backgroundColor = "#0092FF";
      underline.style.transform = "scaleX(0)";
      underline.style.transformOrigin = "right";
      link.style.position = "relative";
      link.appendChild(underline);

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          scaleX: 1,
          transformOrigin: "right",
          duration: 0.3,
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <div className="fixed z-[999] w-full px-4 sm:px-8 md:px-20 py-4 sm:py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center">
      <h3 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-0">
        Brand Name
      </h3>
      <div className="links flex gap-4 sm:gap-6 md:gap-8">
        <Link
          smooth
          to="#services"
          className="text-sm sm:text-md md:text-lg font-regular capitalize"
          ref={(el) => (links.current[0] = el)}
        >
          Services
        </Link>
        <Link
          smooth
          to="#about"
          className="text-sm sm:text-md md:text-lg font-regular capitalize"
          ref={(el) => (links.current[1] = el)}
        >
          About us
        </Link>
        <Link
          smooth
          to="#contact"
          className="text-sm sm:text-md md:text-lg font-regular capitalize"
          ref={(el) => (links.current[2] = el)}
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
