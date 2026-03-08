// Modal.tsx
import React, { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-[#fbfbfbff] color-[#3d3d3d] rounded-sm shadow-sm w-11/12 max-w-md p-6 mx-4 sm:mx-0 transform transition-transform duration-300 ease-out scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div>{children}</div>
        <button
          className="cursor-pointer mt-6 w-full py-2 px-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
