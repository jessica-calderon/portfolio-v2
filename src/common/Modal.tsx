import React, { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, description, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white border-2 border-blue-500 rounded-lg min-w-[300px]">
        <div className="flex items-center justify-between px-4 pt-2 bg-gradient-to-t from-blue-500 via-blue-600 to-blue-700 justify-center">
          <p className="text-white font-tahoma text-lg my-1 pb-1">{description}</p>
          <button
            className="rounded-square w-7 h-7 flex items-center justify-center text-white bg-gradient-to-br from-red-500 to-red-700 rounded border-white border-2 mb-2"
            onClick={onClose}
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
        <div className="p-4 bg-gray-200">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
