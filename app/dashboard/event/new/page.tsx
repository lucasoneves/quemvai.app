import React from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NewEventPage() {
  return (
    <main>
      <div className="max-w-4xl mx-auto p-4 relative flex min-h-screen w-full flex-col dark pb-24">
        <div className="flex items-center bg-background-dark/80 backdrop-blur-sm sticky top-0 z-10 p-4 pb-2 justify-between">
          <div className="flex w-16 items-center">
            <p className="text-primary/80 text-base font-medium leading-normal shrink-0 cursor-pointer"></p>
            <Link href="/dashboard" className="text-primary">
              Cancelar
            </Link>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Novo Evento
          </h2>
        </div>
        <main className="flex-grow px-4">
          <div className="flex flex-col gap-6 pt-4 pb-8">
            <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-white/20 px-6 py-14 bg-white/5">
              <div className="flex flex-col items-center gap-2">
                <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center">
                  Adicionar imagem do evento
                </p>
                <p className="text-white/60 text-sm font-normal leading-normal max-w-xs text-center">
                  Toque para adicionar uma imagem para a capa do seu evento.
                </p>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <PhotoIcon className="h-5 w-5" />
                <span className="truncate">Adicionar Imagem</span>
              </button>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col w-full">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Nome do evento
                </p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white/10 h-14 placeholder:text-white/40 p-4 text-base font-normal leading-normal"
                  placeholder="Digite o nome do evento"
                  defaultValue=""
                />
              </label>
            </div>

            <div className="flex flex-col">
              <label className="flex flex-col w-full">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Descrição
                </p>
                <textarea
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white/10 min-h-36 placeholder:text-white/40 p-4 text-base font-normal leading-normal"
                  placeholder="Descreva os detalhes do seu evento"
                ></textarea>
              </label>
            </div>

            <div className="flex flex-col">
              <label className="flex flex-col w-full">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Local
                </p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white/10 h-14 placeholder:text-white/40 p-4 text-base font-normal leading-normal"
                  placeholder="Digite o local do evento"
                  defaultValue=""
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col w-full">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Data e Hora
                </p>
                <div className="relative flex w-full flex-1 items-stretch">
                  <input
                    className="form-input peer flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white/10 h-14 placeholder:text-white/40 p-4 text-base font-normal leading-normal"
                    placeholder="Selecione a data e a hora"
                    type="datetime-local"
                    defaultValue=""
                  />
                </div>
              </label>
            </div>
          </div>
        </main>
        <footer className="sticky bottom-0 bg-background-dark/80 backdrop-blur-sm p-4">
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
            <span className="truncate">Criar Evento</span>
          </button>
        </footer>
      </div>
    </main>
  );
}
