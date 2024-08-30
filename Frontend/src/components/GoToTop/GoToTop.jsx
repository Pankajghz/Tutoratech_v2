import { FaArrowUp } from "react-icons/fa"; // Import an icon from react-icons

const GoToTop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      className="top-btn fixed bottom-4 right-4 bg-purple-700 text-white p-2 rounded-full z-50 cursor-pointer"
      onClick={goToBtn}
    >
      <FaArrowUp className="text-white" /> {/* Use the icon here */}
    </div>
  );
};

export default GoToTop;
