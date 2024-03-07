import { createPortal } from "react-dom";
import Overlay from "./Overlay";

const Modal = ({ close, open = true, children }) => {
  return (
    <div>
      {createPortal(
        <>
          <Overlay open={open} close={close} />
          <div
            className={`${
              open
                ? "translate-y-0 sm:opacity-100 sm:visible"
                : "translate-y-[100%] sm:opacity-0 sm:invisible"
            } p-2 w-full h-[300px] sm:w-[400px] sm:h-[400px] bg-white rounded-t-2xl sm:rounded-2xl fixed z-[999] bottom-0 sm:left-[50%] sm:top-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] transition-all duration-300`}
          >
            {children}
          </div>
        </>,
        document.getElementById("modal")
      )}
    </div>
  );
};

export default Modal;
