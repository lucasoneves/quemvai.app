"use client";
import { useState } from "react";
import Link from "next/link";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function EventDetailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(true);

  const handleConfirmAttendance = async () => {
    setIsLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsConfirmed(true);
    } catch (error) {
      console.error("Erro ao confirmar presença:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="max-w-4xl mx-auto p-4 relative flex min-h-screen w-full flex-col dark pb-24">
        <div className="sticky gap-2 top-0 z-10 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 pt-2 pb-2 backdrop-blur-sm">
          <div className="text-white flex shrink-0 items-center justify-center">
            <Link href="/dashboard">
              <ArrowLeftIcon className="h-5 w-5" />
            </Link>
          </div>
          <h2 className="flex-2 text-lg text-center font-bold leading-tight tracking-[-0.015em] text-zinc-900 dark:text-white">
            Lançamento Anual Festlab
          </h2>
        </div>
        <div className="@container">
          <div className="@[480px]:py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-gray-700 @[480px]:rounded-xl rounded-lg min-h-60"
              data-alt="Futuristic stage lighting at a tech conference."
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
              }}
            ></div>
          </div>
        </div>
        <h1 className="text-zinc-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-left pb-3 pt-4">
          Lançamento Anual Festlab
        </h1>
        <div className="pb-4">
          <p className="text-zinc-600 dark:text-gray-300 text-base font-normal leading-relaxed">
            Junte-se a nós para a revelação de nossas mais recentes inovações e
            celebração de mais um ano de sucesso. Uma noite de networking,
            insights e entretenimento.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 min-h-14">
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-10">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <p className="text-zinc-700 dark:text-gray-300 text-base font-normal leading-normal flex-1">
              15 de Outubro, 19:00 - 23:00
            </p>
          </div>
          <div className="flex items-center gap-4 min-h-14 justify-between">
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-10">
                <MapPinIcon className="h-5 w-5" />
              </div>
              <p className="text-zinc-700 dark:text-gray-300 text-base font-normal leading-normal flex-1">
                Espaço Inovação, São Paulo, SP
              </p>
            </div>
          </div>
        </div>
        <div className="py-6">
          <div className="flex items-center justify-center gap-3 rounded-lg border border-primary/30 bg-primary/20 p-4">
            <p className="text-base font-semibold text-primary">
              1284 confirmaram
            </p>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="sticky bottom-0 w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800">
          {isConfirmed ? (
            <p className="bg-green-700 text-white p-3 text-center h-[48px] flex items-center justify-center gap-2 w-full rounded-lg text-base font-bold transition-opacity hover:opacity-90">
              <CheckCircleIcon className="h-8 w-8 inline-block" />
              Presença confirmada
            </p>
          ) : (
            <button
              disabled={isLoading}
              className="w-full rounded-lg bg-primary h-[48px] p-3 text-center text-base font-bold text-background-dark transition-opacity hover:opacity-90"
              onClick={handleConfirmAttendance}
            >
              {isLoading ? "Aguarde..." : "Confirmar presença"}
            </button>
          )}
        </div>
        <div className="h-40"></div>
      </div>
    </main>
  );
}
