
function About() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white py-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        
        <section className="mb-12 text-center">
          <p className="text-lg mb-4">
            Welcome to [Brand Name]! We are a passionate team dedicated to delivering exceptional web and app development services tailored to your needs.
          </p>
          <p className="text-lg">
            Our mission is to help businesses thrive in the digital world with innovative and user-friendly solutions. Whether you're looking to build a new website or develop a mobile app, we've got you covered.
          </p>
        </section>

        
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">
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
