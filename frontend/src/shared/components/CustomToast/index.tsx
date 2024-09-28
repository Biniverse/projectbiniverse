import React, { useEffect } from "react";
import { Toast } from "flowbite-react";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";

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
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
          {type === "error" ? (
            <HiXCircle className="text-red-500 w-5 h-5" />
          ) : (
            <HiCheckCircle className="text-green-500 w-5 h-5" />
          )}
        </div>
        <div className="ml-3 text-sm font-normal">
          <span className="font-medium">
            {type === "error" ? "Error:" : "Success:"}
          </span>{" "}
          {message}
        </div>
        <Toast.Toggle onClick={onDismiss} />
      </Toast>
    </div>
  );
};

export default ToastComponent;
