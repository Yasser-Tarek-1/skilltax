import { RiWifiOffLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

const OffLineAlert = ({ showOffLineAlert, onSetShowOffLineAlert }) => {
  return (
    <div
      className={`${
        showOffLineAlert ? "opacity-100" : "opacity-0"
      } transition-all duration-300 z-[9997] ease-in fixed px-4 bottom-5 left-[50%] translate-x-[-50%] w-72 sm:bottom-7 sm:left-7 sm:translate-x-0 bg-white shadow-lg h-12 rounded-lg pointer-events-auto flex items-center justify-between`}
    >
      <div className="flex items-center gap-2">
        <RiWifiOffLine color="#00000099" size={26} />
        <p className="text-sm sm:text-base mb-[2px]">
          أنت غير متصل بالانترنت حاليا
        </p>
      </div>
      <button
        aria-label="Close Offline Alert"
        onClick={() => onSetShowOffLineAlert(false)}
      >
        <IoCloseOutline color="#00000099" size={26} />
      </button>
    </div>
  );
};

export default OffLineAlert;
