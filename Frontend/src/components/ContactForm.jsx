const ContactForm = ({ isVisible, onClose }) => {

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-[90%] max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 font-bold text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl text-blue-700 text-center font-semibold mb-4">
          Let's Start a Conversation
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              className="mt-1 block w-full text-[15px] border px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 text-gray-900"
              required
              placeholder="John Smith"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              className="mt-1 block w-full text-[15px] border px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 text-gray-900"
              required
              placeholder="Please enter a valid email id"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
            How can we assist you?*
            </label>
            <label className="text-black text-[15px] font-semibold flex gap-2 items-center">
              <input type="radio" name="select" value="Website" required />
              Build a Website
            </label>
            <label className="text-black text-[15px] font-semibold flex gap-2 items-center">
              <input type="radio" name="select" value="App" required />
              Build an Application
            </label>
            <label className="text-black text-[15px] font-semibold flex gap-2 items-center">
              <input type="radio" name="select" value="Website & App" required />
              Build both an App and Website
            </label>
            <label className="text-black text-[15px] font-semibold flex gap-2 items-center">
              <input type="radio" name="select" value="Crank" required />
              Not sure, I am here to learn!
            </label>
          </div> */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message(optional)?
            </label>
            <textarea placeholder="Tell us what you have on mind?"
              className="mt-1 block px-2 text-[15px] w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 text-gray-900"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
