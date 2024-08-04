import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const textSectionsRef = useRef([]);
  const imageSectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(textSectionsRef.current);
    const images = [
      "url('/static/images/image1.jpg')",
      "url('/static/images/image2.jpg')",
      "url('/static/images/image3.jpg')",
      "url('/static/images/image4.jpg')"
    ];

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${containerRef.current.scrollHeight - window.innerHeight}`,
        pin: true,
        scrub: 1,
      }
    });

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center+=100",
        end: "bottom center-=100",
        onEnter: () => {
          gsap.to(imageSectionRef.current, {
            backgroundImage: images[index],
            duration: 0.5,
            ease: "power3.out"
          });
        },
        onEnterBack: () => {
          gsap.to(imageSectionRef.current, {
            backgroundImage: images[index],
            duration: 0.5,
            ease: "power3.out"
          });
        }
      });

      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top center+=100",
          end: "bottom center-=100",
          toggleActions: "play none none reverse",
        }
      });
    });
  }, []);

  return (
    <div className="bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-center text-white mb-[15vw]">
          Our Services
        </h1>

        <div className="sections flex" ref={containerRef}>
          <div className="textSection">
            {[
              {
                title: "Custom Web Development",
                content: `At [Brand Name], we specialize in creating custom websites tailored to meet your business needs. Our web development services include:`,
                points: [
                  "Responsive Design: Ensure your website looks great on all devices, from desktops to mobile phones.",
                  "E-commerce Solutions: Build robust online stores with secure payment gateways, product catalogs, and easy-to-manage inventory.",
                  "SEO Optimization: Develop SEO-friendly websites that rank well on search engines, driving organic traffic to your business.",
                  "Performance Optimization: Enhance website speed and performance for better user experience and higher conversion rates.",
                  "Maintenance and Support: Provide ongoing support and maintenance to ensure your website runs smoothly and securely."
                ]
              },
              {
                title: "Mobile App Development",
                content: `Our mobile app development services are designed to bring your innovative ideas to life. We offer:`,
                points: [
                  "iOS and Android Development: Develop native apps for both iOS and Android platforms, ensuring a seamless user experience.",
                  "Cross-Platform Development: Utilize frameworks like React Native and Flutter to create apps that work flawlessly across multiple platforms.",
                  "Custom App Design: Design user-friendly interfaces and engaging user experiences that resonate with your target audience.",
                  "Backend Development: Build robust backend systems to support your app's functionality, including database management, API integration, and server-side logic.",
                  "App Store Deployment: Assist with the submission and approval process for the App Store and Google Play, ensuring your app meets all guidelines and requirements."
                ]
              },
              {
                title: "User Experience and Interface Design",
                content: `Our UX/UI design services focus on creating intuitive and visually appealing digital experiences. We offer:`,
                points: [
                  "User Research: Conduct comprehensive user research to understand your target audience and their needs.",
                  "Wireframing and Prototyping: Develop detailed wireframes and interactive prototypes to visualize the app or website layout.",
                  "Visual Design: Create stunning visual designs that align with your brand identity and captivate your users.",
                  "Usability Testing: Perform usability testing to gather feedback and make informed design improvements.",
                  "Interaction Design: Design smooth and engaging interactions that enhance user experience and drive engagement."
                ]
              },
              {
                title: "Consultation and Strategy Services",
                content: `Our consultation and strategy services help you navigate the digital landscape and make informed decisions.`,
                points: [
                  "Digital Strategy Development: Create comprehensive digital strategies that align with your business goals and objectives.",
                  "Technology Consulting: Provide expert advice on the best technologies and tools for your projects.",
                  "Project Management: Offer end-to-end project management to ensure timely and successful project delivery.",
                  "Training and Workshops: Conduct training sessions and workshops to empower your team with the knowledge and skills needed to manage your digital assets effectively."
                ]
              }
            ].map((service, index) => (
              <div className="flex mb-12 gap-10" key={index} ref={el => textSectionsRef.current[index] = el}>
                <section className="p-6 rounded-xl text-white w-[45vw]">
                  <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 inline-block">
                    {service.title}
                  </h2>
                  <p className="mb-6 text-[15px]">{service.content}</p>
                  <ul className="list-disc list-inside space-y-2 text-[14px]">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </section>
              </div>
            ))}
          </div>
          <div className="imageSection w-[45vw] h-[30vw] rounded-xl bg-zinc-800" ref={imageSectionRef}></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
