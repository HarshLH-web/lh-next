import Image from 'next/image';
import React, { useState } from 'react';

const ImageModal = ({ imageSrc, imageAlt, width, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={openModal}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className={`cursor-pointer pointer-events-none pt-8 pb-6 lg:py-10 ${className}`}
        width={1000}
        height={1000}
      />
      </div>

      {isModalOpen && (
        <div
          id="modal"
          className="fixed inset-0 top-0 flex items-center justify-center z-99 bg-black/80 backdrop-blur-sm"
        >
          <div className={`bg-white rounded-lg shadow-md w-[90%] ${width} p-1 z-99 pointer-events-none`}>
            <Image src={imageSrc} alt={imageAlt} className="w-full h-auto" width={1000} height={1000} />
          </div>
            <button
              onClick={closeModal}
              className="closeModal mt-4 bg-white rounded-full px-4 py-[6px] cursor-pointer text-2xl absolute top-2 right-4"
            >
              x
            </button>
        </div>
      )}
    </>
  );
};

export default ImageModal;
