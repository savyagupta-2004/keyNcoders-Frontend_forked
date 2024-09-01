import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0  z-50 bg-black bg-opacity-50">
      <div className=" rounded-lg shadow-lg relative max-w-3xl mx-4">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-black hover:text-gray-800"
        ></button>
      </div>
    </div>
  );
};

export default Modal;
