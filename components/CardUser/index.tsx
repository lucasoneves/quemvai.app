import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

export enum UserStatus {
  Rejeitado = 0,
  Confirmado = 1,
}

export default function CardUser({
  avatarUrl,
  name,
  status,
}: {
  avatarUrl?: string;
  name?: string;
  status?: UserStatus | number;
}) {
  return (
    <div
      className={`flex items-center gap-4 min-h-14 justify-between border-b border-white/10`}
    >
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10"
          data-alt={`avatar of ${name}`}
          style={{
            backgroundImage: `url('${avatarUrl}')`,
          }}
        ></div>
        <p className="text-white text-base font-normal leading-normal flex-1 truncate">
          {name}
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <button className="text-sm hover:opacity-80" title="Delete user">
          <TrashIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}
