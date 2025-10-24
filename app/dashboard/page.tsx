import Link from "next/link";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CardUser from "@/components/CardUser";

export default function DashboardPage() {
  return (
    <main>
      <div className="max-w-4xl mx-auto p-4">
        <header className="flex flex-wrap gap-3 items-center justify-end sm:mt-8 mb-8">
          <Link href="/">
            <ArrowLeftIcon className="h-6 w-6 text-white hover:opacity-80" />
          </Link>
          <h2 className="text-2xl font-bold flex-auto text-right">
            Tech Inovators Meetup
          </h2>
          <span className="text-sm bg-green-700 text-green-200 px-4 py-1 rounded-full">
            3 participantes
          </span>
        </header>

        <section className="search-form">
          <form
            action=""
            className="flex relative items-center rounded-md h-12 border-gray-800 bg-[#1a3636]"
          >
            <button
              type="submit"
              className="absolute top-0 left-3 m-auto bottom-0"
            >
              <MagnifyingGlassIcon className="h-5 w-5 text-[#a8d6d6]" />
            </button>
            <input
              id="search"
              type="search"
              placeholder="Search by name"
              className="w-full pl-10 rounded h-full focus:outline-1 focus:outline-[#a8d6d6] bg-transparent text-white placeholder-[#a8d6d6]"
            />
          </form>
        </section>

        <section className="mt-4 flex gap-4">
          <button className="flex gap-2 text-white text-sm bg-[#1a3636] px-4 py-2 rounded-lg cursor-pointer hover:opacity-75 font-medium leading-normal">
            <ListBulletIcon className="h-5 w-5" />
            Ordenar por nome
          </button>
          <button className="flex gap-2 text-white text-sm bg-[#1a3636] px-4 py-2 rounded-lg cursor-pointer hover:opacity-75 font-medium leading-normal">
            <ArrowDownTrayIcon className="h-5 w-5" />
            Exportar lista
          </button>
        </section>

        <section className="mt-6">
          <header className="flex items-center gap-2 mb-4">
            <h3 className="text-2xl font-bold">Lista de presença</h3>
          </header>
          <CardUser
            avatarUrl="https://i.pravatar.cc/150?img=3"
            name="Jane Doe"
            status={1}
          />
          <CardUser
            avatarUrl="https://i.pravatar.cc/150?img=2"
            name="John Smith"
            status={1}
          />
          <CardUser
            avatarUrl="https://i.pravatar.cc/150?img=8"
            name="Daniel Wilson"
            status={1}
          />
        </section>
      </div>
    </main>
  );
}
