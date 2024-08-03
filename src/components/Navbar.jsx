
function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-4 sm:px-8 md:px-20 py-4 sm:py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center'>
      <h3 className='text-lg sm:text-xl md:text-2xl mb-4 sm:mb-0'>Brand Name</h3>
      <div className="links flex gap-4 sm:gap-6 md:gap-8">
        {["Services", "About Us", "Contact Us"].map((link, index) => (
          <a key={index} className='text-sm sm:text-md md:text-lg font-regular capitalize' href="">{link}</a>
        ))}
      </div>
    </div>
  );
}


export default Navbar