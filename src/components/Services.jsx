function Services() {
  return (
    <div className="bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-center text-white mb-[15vw]">
          Our Services
        </h1>

        <div className="sections flex">
          <div className="textSection">
            <div className="flex mb-12 gap-10">
              <section className=" p-6 rounded-xl text-white w-[45vw]">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 inline-block">
                  Custom Web Development
                </h2>
                <p className="mb-6 text-[15px]">
                  At [Brand Name], we specialize in creating custom websites
                  tailored to meet your business needs. Our web development
                  services include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[14px]">
                  <li>
                    <strong>Responsive Design:</strong> Ensure your website
                    looks great on all devices, from desktops to mobile phones.
                  </li>
                  <li>
                    <strong>E-commerce Solutions:</strong> Build robust online
                    stores with secure payment gateways, product catalogs, and
                    easy-to-manage inventory.
                  </li>
                  <li>
                    <strong>SEO Optimization:</strong> Develop SEO-friendly
                    websites that rank well on search engines, driving organic
                    traffic to your business.
                  </li>
                  <li>
                    <strong>Performance Optimization:</strong> Enhance website
                    speed and performance for better user experience and higher
                    conversion rates.
                  </li>
                  <li>
                    <strong>Maintenance and Support:</strong> Provide ongoing
                    support and maintenance to ensure your website runs smoothly
                    and securely.
                  </li>
                </ul>
              </section>
            </div>
            <div className="flex mb-12 gap-10">
              <section className="p-6 rounded-xl text-white w-[45vw]">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 text-center inline-block">
                  Mobile App Development
                </h2>
                <p className="mb-6 text-[15px]">
                  Our mobile app development services are designed to bring your
                  innovative ideas to life. We offer:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[14px]">
                  <li>
                    <strong>iOS and Android Development:</strong> Develop native
                    apps for both iOS and Android platforms, ensuring a seamless
                    user experience.
                  </li>
                  <li>
                    <strong>Cross-Platform Development:</strong> Utilize
                    frameworks like React Native and Flutter to create apps that
                    work flawlessly across multiple platforms.
                  </li>
                  <li>
                    <strong>Custom App Design:</strong> Design user-friendly
                    interfaces and engaging user experiences that resonate with
                    your target audience.
                  </li>
                  <li>
                    <strong>Backend Development:</strong> Build robust backend
                    systems to support your app's functionality, including
                    database management, API integration, and server-side logic.
                  </li>
                  <li>
                    <strong>App Store Deployment:</strong> Assist with the
                    submission and approval process for the App Store and Google
                    Play, ensuring your app meets all guidelines and
                    requirements.
                  </li>
                </ul>
              </section>
            </div>
            <div className="flex mb-12 gap-10">
              <section className="p-6 rounded-xl text-white w-[45vw]">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 text-center inline-block">
                  User Experience and Interface Design
                </h2>
                <p className="mb-6 text-[15px]">
                  Our UX/UI design services focus on creating intuitive and
                  visually appealing digital experiences. We offer:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[14px]">
                  <li>
                    <strong>User Research:</strong> Conduct comprehensive user
                    research to understand your target audience and their needs.
                  </li>
                  <li>
                    <strong>Wireframing and Prototyping:</strong> Develop
                    detailed wireframes and interactive prototypes to visualize
                    the app or website layout.
                  </li>
                  <li>
                    <strong>Visual Design:</strong> Create stunning visual
                    designs that align with your brand identity and captivate
                    your users.
                  </li>
                  <li>
                    <strong>Usability Testing:</strong> Perform usability
                    testing to gather feedback and make informed design
                    improvements.
                  </li>
                  <li>
                    <strong>Interaction Design:</strong> Design smooth and
                    engaging interactions that enhance user experience and drive
                    engagement.
                  </li>
                </ul>
              </section>
            </div>
            <div className="flex mb-12 gap-10">
              <section className="p-6 rounded-xl text-white w-[45vw]">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 text-center inline-block">
                  Consultation and Strategy Services
                </h2>
                <p className="mb-6 text-[15px]">
                  Our consultation and strategy services help you navigate the
                  digital landscape and make informed decisions.
                </p>
                <ul className="list-disc list-inside space-y-2 text-[14px]">
                  <li>
                    <strong>Digital Strategy Development:</strong> Create
                    comprehensive digital strategies that align with your
                    business goals and objectives.
                  </li>
                  <li>
                    <strong>Technology Consulting:</strong> Provide expert
                    advice on the best technologies and tools for your projects.
                  </li>
                  <li>
                    <strong>Project Management:</strong> Offer end-to-end
                    project management to ensure timely and successful project
                    delivery.
                  </li>
                  <li>
                    <strong>Training and Workshops:</strong> Conduct training
                    sessions and workshops to empower your team with the
                    knowledge and skills needed to manage your digital assets
                    effectively.
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div className="imageSection w-[45vw] h-[30vw] rounded-xl bg-zinc-800"></div>
        </div>
      </div>
    </div>
  );
}

export default Services;