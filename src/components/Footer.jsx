import "remixicon/fonts/remixicon.css";

function Footer() {
  return (
    <div className="w-full h-screen bg-zinc-900 px-20">
      <div className="px-20 py-16 text-center">
        <h1 className="text-8xl font-semibold tracking-tighter">
          Ready To Try
        </h1>
        <h1 className="text-8xl font-semibold tracking-tighter">
          Our Services?
        </h1>
        <h1 className="text-center text-2xl mt-4">
          Join [Brand Name] to accelerate your Business online!
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="bg-[#2263EB] px-6 py-3 rounded-md">
          <a className="font-semibold" href="#">
            Get Started it's free
          </a>
        </div>
      </div>
      <hr className="mt-[6vw] opacity-30" />
      <footer className="mt-8 flex justify-between items-center">
        <p>© 2024 [Brand Name], Inc. All rights reserved</p>
        <div className="social flex gap-5 text-[18px] opacity-60">
          <a href="#"><i class="ri-twitter-x-line"></i></a>
          <a href="#"><i class="ri-linkedin-line"></i></a>
          <a href="#"><i class="ri-instagram-line"></i></a>
          <a href="#"><i class="ri-facebook-fill"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
