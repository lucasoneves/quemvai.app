import React from "react";
import styles from "./toast.module.scss";

export type Toast = {
  id: number;
  text: string;
  type?: "error" | "success";
  closing?: boolean;
};

export default function Toasts({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed top-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`${styles.toast} max-w-sm rounded-md px-4 py-2 text-sm ${
            t.type === "error"
              ? "bg-red-800 text-white"
              : "bg-green-800 text-white"
          } ${t.closing ? "toast-exit" : ""}`}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}
