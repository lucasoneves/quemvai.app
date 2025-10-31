import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function NewEventButton() {
  return (
    <div className="fixed bottom-[100px] left-0 right-0 ml-auto mr-auto max-w-5xl z-20">
      <button className="max-w-[200px] ml-auto mr-auto flex h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-5 text-background-dark ">
        <PlusIcon className="h-5 w-5 text-black" />
        <span className="text-base text-black font-bold">Novo evento</span>
      </button>
    </div>
  );
}
