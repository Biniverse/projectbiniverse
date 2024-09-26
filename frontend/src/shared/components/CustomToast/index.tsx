// ToastComponent.tsx

import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  visible: boolean;
  onDismiss: () => void;
}

const ToastComponent: React.FC<ToastProps> = ({
  message,
  type,
  visible,
  onDismiss,
}) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [visible, onDismiss]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`p-4 rounded shadow-lg ${type === "error" ? "bg-red-200" : "bg-green-200"}`}
      >
        <div className="flex">
          <div className="mr-3">
            <svg
              aria-hidden="true"
              className={`w-5 h-5 ${type === "error" ? "text-red-700" : "text-green-700"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {type === "error" ? (
                <path d="M10 0a10 10 0 100 20 10 10 0 000-20zM9 4a1 1 0 012 0v6a1 1 0 01-2 0V4zm1 10a1 1 0 100 2 1 1 0 000-2z" />
              ) : (
                <path d="M10 0a10 10 0 100 20 10 10 0 000-20zM6 8h8a1 1 0 010 2H6a1 1 0 010-2zm0 4h8a1 1 0 010 2H6a1 1 0 010-2z" />
              )}
            </svg>
          </div>
          <div>
            <span className="font-medium">
              {type === "error" ? "Error:" : "Success:"}
            </span>{" "}
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastComponent;
