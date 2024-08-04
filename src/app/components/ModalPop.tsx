import React, { ReactNode } from "react";
import { CLOSE_ICON } from "../constants";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalPop: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300">
      <div className="relative h-3/4 md:h-2/3 w-5/6 scale-100 transform rounded-lg bg-white p-10 shadow-lg transition-transform duration-300">
        <div
          onClick={onClose}
          className="absolute right-3 top-3 cursor-pointer hover:text-gray-700"
        >
          <Image priority src={CLOSE_ICON} width={20} height={20} alt="close-button" />
        </div>
        <div className="h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default ModalPop;
