"use client";

interface ModalProps {
  title: string;
  close: () => void;
  children?: React.ReactNode;
}

export default function Modal({ title, close, children }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children || <p>Form goes here</p>}
      </div>
    </div>
  );
}
