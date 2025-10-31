import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import NewEventButton from "@/components/NewEventButton";
import Link from "next/link";

export default function EventDetailPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-4 relative flex min-h-screen w-full flex-col dark group/design-root overflow-x-hidden pb-24">
        <header className="sticky top-0 z-10 bg-background-light dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="flex items-center p-4 pb-2 justify-between">
            <div className="flex size-12 shrink-0 items-center justify-start text-primary">
              <span className="material-symbols-outlined text-2xl font-bold">
                quemvai.app
              </span>
            </div>
            <h1 className="text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
              Meus Eventos
            </h1>
            <div className="flex w-12 items-center justify-end">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-surface-dark text-text-primary-dark">
                <UserCircleIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>
        <main className="flex flex-col gap-6 py-4 h-max">
          <form>
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-text-secondary-dark flex border-none bg-input-dark items-center justify-center pl-4 rounded-l-xl border-r-0">
                  {/* <span className="material-symbols-outlined">search</span> */}
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-secondary-dark focus:outline-0 border-none bg-input-dark h-full placeholder:text-text-secondary-dark px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  placeholder="Buscar eventos..."
                  defaultValue=""
                />
              </div>
            </label>
          </form>
          <div className="flex flex-col gap-4">
            <Link
              href="/dashboard/event/1"
              className="flex flex-col gap-2 rounded-xl bg-surface-dark p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2 flex-1">
                  <div className="inline-block self-start rounded-full bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    Próximo
                  </div>
                  <p className="text-text-primary-dark text-lg font-bold leading-tight">
                    Aniversário da Maria
                  </p>
                  <p className="text-text-secondary-dark text-sm font-normal leading-normal">
                    25 de Dezembro, 20:00
                  </p>
                </div>
                <div
                  className="w-20 h-20 bg-center bg-no-repeat bg-cover rounded-lg"
                  data-alt="Abstract purple and blue gradient"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFnaVzxA-jG4te4OYSEY0pQYjm9VkUwR8rTzABw-bbBObob7BhVencsQfeOnHvpVSUS1s56VMZj-gYHqxO-VsekSfihxt3OO31ARpIAVAr2s4U4Qw3CzFSYgfUI82voBxncqVdNZU3A2n-mbHQGulFRQzpmP94sPU5GGHG79SVnUJ25PRWk1BEdZUXX4yLEt-TEItTIlyCzRdGEwoWboGc68mopl1LPQIiiWRZAJyF3qfSpSdkUGuW0Qj6frp7QwBATa0oUEOmJzY")',
                  }}
                ></div>
              </div>
              <div className="border-t border-white/10 mt-2 pt-3">
                <div className="flex justify-start gap-x-6">
                  <p className="text-text-secondary-dark text-sm font-normal leading-normal flex items-center gap-2">
                    <UserGroupIcon className="h-5 w-5" />
                    RSVPs
                  </p>
                  <p className="text-text-primary-dark text-sm font-bold leading-normal text-right">
                    85 confirmaram
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </main>
        <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-surface-dark/80 backdrop-blur-lg">
          <div className="mx-auto flex h-20 max-w-md items-center justify-around px-2">
            <a
              className="flex flex-col items-center justify-center gap-1 text-center text-text-secondary-dark w-24"
              href="#"
            >
              <Cog6ToothIcon className="h-5 w-5" />
              <span className="text-xs font-medium">Configurações</span>
            </a>
          </div>
        </nav>
      </div>
      <NewEventButton />
    </>
  );
}
