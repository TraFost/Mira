"use client";

import { useEffect, useRef } from "react";

import { useRouter } from "next/navigation";

export function FocusableModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[
      focusableElements.length - 1
    ] as HTMLElement;

    // Trap focus within the modal
    function handleTab(e: KeyboardEvent) {
      if (!focusableElements || focusableElements.length === 0) return;

      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    }

    // Set initial focus to the first interactive element
    firstElement?.focus();

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, []);

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-80 backdrop-blur-sm"
    >
      <div className="bg-transparent rounded-lg shadow-lg w-full p-6 relative">
        <button
          onClick={() => router.back()}
          aria-label="Close"
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}
