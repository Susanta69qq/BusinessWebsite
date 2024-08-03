import { IoIosGitNetwork } from "react-icons/io";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 flex flex-col justify-between">
      <div className="textStructure mt-[30vh] sm:mt-[30vh] md:mt-[15vw] px-5 md:px-20">
        {["Your Vision,", "Our Expertise,", "Web Solutions Made Easy"].map(
          (item, index) => {
            return (
              <div key={index} className="masker">
                <h1 className="uppercase text-[11vw] sm:text-[10vw] md:text-[6vw] opacity-80 leading-[14vw] sm:leading-[12vw] md:leading-[7vw] tracking-tighter font-semibold">
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
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light rounded-full flex items-center gap-2 capitalize">
            <a href="">Work with us</a>
            <div className="w-3 h-3 rounded-full">
              <IoIosGitNetwork />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
