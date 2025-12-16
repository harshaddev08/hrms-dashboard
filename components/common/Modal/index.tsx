"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils/cn";

interface ModalContextProps {
  isOpen: boolean;
  onClose: () => void;
  size: "sm" | "md" | "lg" | "xl" | "full";
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal compound components must be used within a Modal");
  }
  return context;
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const ModalRoot = ({
  isOpen,
  onClose,
  children,
  className,
  size = "md",
}: ModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch and synchronous update warning
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Delay setting visibility to allow mount then animate
      const timer = requestAnimationFrame(() => {
        setIsVisible(true);
        document.body.style.overflow = "hidden";
      });
      return () => cancelAnimationFrame(timer);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "unset";
      }, 300); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || (!isOpen && !isVisible)) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-[calc(100vw-2rem)]",
  };

  return createPortal(
    <ModalContext.Provider value={{ isOpen, onClose, size }}>
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={onClose}
          aria-hidden="true"
        />
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 ease-out",
            sizeClasses[size],
            isOpen
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 translate-y-4",
            className
          )}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
};

interface ModalHeaderProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  showCloseButton?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ModalHeader = ({
  title,
  description,
  showCloseButton = true,
  className,
  children,
}: ModalHeaderProps) => {
  const { onClose } = useModalContext();

  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-gray-100 px-6 py-4",
        className
      )}
    >
      <div className="flex-1">
        {title && (
          <h2 className="text-lg font-semibold leading-6 text-gray-900">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
        {children}
      </div>
      {showCloseButton && (
        <button
          onClick={onClose}
          className="ml-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

const ModalBody = ({ children, className }: ModalBodyProps) => {
  return <div className={cn("p-7", className)}>{children}</div>;
};

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2 border-t border-gray-100 px-6 py-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
