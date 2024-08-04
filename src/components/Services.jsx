import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const renderServiceSection = (title, description, items) => (
//   <div className="flex mb-12 gap-10" key={title}>
//     <section className="p-6 rounded-xl text-white w-[45vw]">
//       <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 text-center inline-block">
//         {title}
//       </h2>
//       <p className="mb-6 text-[15px]">{description}</p>
//       <ul className="list-disc list-inside space-y-2 text-[14px]">
//         {items.map((item, index) => (
//           <li key={index}>
//             <strong>{item.label}:</strong> {item.description}
//           </li>
//         ))}
//       </ul>
//     </section>
//   </div>
// );

// const renderImage = (src, index) => (
//   <img
//     key={index}
//     className="absolute top-0 left-0 w-full h-full object-cover"
//     src={src}
//     alt=""
//   />
// );

// Sections data
const sections = [
  {
    title: "Custom Web Development",
    description:
      "At [Brand Name], we specialize in creating custom websites tailored to meet your business needs. Our web development services include:",
    items: [
      {
        label: "Responsive Design",
        description:
          "Ensure your website looks great on all devices, from desktops to mobile phones.",
      },
      {
        label: "E-commerce Solutions",
        description:
          "Build robust online stores with secure payment gateways, product catalogs, and easy-to-manage inventory.",
      },
      {
        label: "SEO Optimization",
        description:
          "Develop SEO-friendly websites that rank well on search engines, driving organic traffic to your business.",
      },
      {
        label: "Performance Optimization",
        description:
          "Enhance website speed and performance for better user experience and higher conversion rates.",
      },
      {
        label: "Maintenance and Support",
        description:
          "Provide ongoing support and maintenance to ensure your website runs smoothly and securely.",
      },
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Our mobile app development services are designed to bring your innovative ideas to life. We offer:",
    items: [
      {
        label: "iOS and Android Development",
        description:
          "Develop native apps for both iOS and Android platforms, ensuring a seamless user experience.",
      },
      {
        label: "Cross-Platform Development",
        description:
          "Utilize frameworks like React Native and Flutter to create apps that work flawlessly across multiple platforms.",
      },
      {
        label: "Custom App Design",
        description:
          "Design user-friendly interfaces and engaging user experiences that resonate with your target audience.",
      },
      {
        label: "Backend Development",
        description:
          "Build robust backend systems to support your app's functionality, including database management, API integration, and server-side logic.",
      },
      {
        label: "App Store Deployment",
        description:
          "Assist with the submission and approval process for the App Store and Google Play, ensuring your app meets all guidelines and requirements.",
      },
    ],
  },
  {
    title: "User Experience and Interface Design",
    description:
      "Our UX/UI design services focus on creating intuitive and visually appealing digital experiences. We offer:",
    items: [
      {
        label: "User Research",
        description:
          "Conduct comprehensive user research to understand your target audience and their needs.",
      },
      {
        label: "Wireframing and Prototyping",
        description:
          "Develop detailed wireframes and interactive prototypes to visualize the app or website layout.",
      },
      {
        label: "Visual Design",
        description:
          "Create stunning visual designs that align with your brand identity and captivate your users.",
      },
      {
        label: "Usability Testing",
        description:
          "Perform usability testing to gather feedback and make informed design improvements.",
      },
      {
        label: "Interaction Design",
        description:
          "Design smooth and engaging interactions that enhance user experience and drive engagement.",
      },
    ],
  },
  {
    title: "Consultation and Strategy Services",
    description:
      "Our consultation and strategy services help you navigate the digital landscape and make informed decisions.",
    items: [
      {
        label: "Digital Strategy Development",
        description:
          "Create comprehensive digital strategies that align with your business goals and objectives.",
      },
      {
        label: "Technology Consulting",
        description:
          "Provide expert advice on the best technologies and tools for your projects.",
      },
      {
        label: "Project Management",
        description:
          "Offer end-to-end project management to ensure timely and successful project delivery.",
      },
      {
        label: "Training and Workshops",
        description:
          "Conduct training sessions and workshops to empower your team with the knowledge and skills needed to manage your digital assets effectively.",
      },
      {
        label: "Tailored Roadmaps",
        description:
          "Develop a customized web development roadmap that aligns with your business goals and technical requirements.",
      },
    ],
  },
];

const images = [
  "/static/images/image1.jpg",
  "/static/images/image2.jpg",
  "/static/images/image3.jpg",
  "/static/images/image4.jpg",
];

const Services = () => {
  const textSectionRef = useRef(null);
  const imageSectionRef = useRef(null);
  const headingRef = useRef(null);
  const servicesSectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        transition: "all ease 0.1s",
        ease: "power3.out",
        // Optionally, add scrollTrigger if you want it to animate on scroll
        scrollTrigger: {
          trigger: servicesSectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    const textSections = textSectionRef.current.children;
    gsap.utils.toArray(textSections).forEach((section, index) => {
      gsap.fromTo(
        section,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          transition: "all ease 0.5s",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    const imageSections = imageSectionRef.current.children;
    gsap.utils.toArray(imageSections).forEach((image, index) => {
      gsap.fromTo(
        image,
        { x: index % 2 === 0 ? 100 : -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          transition: "all ease 0.1s",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-zinc-900 py-12">
      <div
        ref={servicesSectionRef}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <h1
          ref={headingRef}
          className="heading text-4xl font-bold text-center text-white"
        >
          Our Services
        </h1>

        <div className="sections flex justify-center overflow-hidden gap-4 mt-[10vw]">
          <div className="textSection" ref={textSectionRef}>
            {sections.map((section, index) => (
              <div className="flex mb-12 gap-10" key={index}>
                <section className="p-6 rounded-xl text-white w-[45vw] bg-gray-800">
                  <h2 className="text-3xl md:text-3xl font-semibold text-blue-600 mb-4 text-center">
                    {section.title}
                  </h2>
                  <p className="mb-6 text-[15px]">{section.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-[14px]">
                    {section.items.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.label}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            ))}
          </div>
          <div
            className="imageSection w-[45vw] h-[30vw] rounded-xl"
            ref={imageSectionRef}
          >
            {images.map((src, index) => (
              <img
                key={index}
                className="w-full h-full object-cover mb-[3.7vw] rounded-xl"
                src={src}
                alt={`Service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
