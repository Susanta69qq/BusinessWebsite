import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const textSectionRef = useRef([]);
  const imageSectionRef = useRef([]);
  const headingRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        transition: "all ease 0.5s",
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesSectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        transition: "all ease 0.5s",
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: servicesSectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    textSectionRef.current.forEach((section, index) => {
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

    imageSectionRef.current.forEach((image, index) => {
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
          className="heading text-4xl font-bold text-center text-white mb-6"
        >
          Our Services
        </h1>
        <p
          ref={paragraphRef}
          className="text-center text-lg text-gray-400 mb-16"
        >
          Harness the power of cutting-edge technology to craft robust and scalable digital solutions. From dynamic web applications to intuitive user interfaces, we deliver exceptional results that drive business growth and enhance user experiences. Transform your vision into reality with our expert web and app development services.
        </p>

        <div className="sections space-y-10 overflow-hidden">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-stretch gap-6"
            >
              <section
                className="p-6 rounded-xl text-white flex-1 bg-gray-800"
                ref={el => (textSectionRef.current[index] = el)}
              >
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
              <div
                className="imageSection flex-1 rounded-xl overflow-hidden"
                ref={el => (imageSectionRef.current[index] = el)}
              >
                <img
                  className="w-full h-full object-cover rounded-xl border-4 border-spacing-4 border-[#495e7a]"
                  src={images[index]}
                  alt={`Service ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
