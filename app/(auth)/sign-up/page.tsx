import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4 font-display group/design-root overflow-x-hidden">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Crie sua conta
          </h1>
          <p className="mt-3 text-md font-normal leading-normal text-zinc-500 dark:text-zinc-400">
            Cadastre-se no quemvai.app e comece a planejar seu evento
          </p>
        </div>
        <div className="mt-8">
          <form className="space-y-4">
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal pb-2 text-zinc-700 dark:text-zinc-300">
                Nome
              </p>
              <div className="relative flex w-full items-center">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-zinc-300 bg-white py-3 px-4 text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-zinc-700/50 dark:bg-[#1a3636] dark:text-[#a8d6d6] dark:placeholder:text-zinc-500"
                  placeholder="Digite seu nome"
                  type="text"
                  defaultValue=""
                />
              </div>
            </label>
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal pb-2 text-zinc-700 dark:text-zinc-300">
                Email
              </p>
              <div className="relative flex w-full items-center">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-zinc-300 bg-white py-3 px-4 text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-zinc-700/50 dark:bg-[#1a3636] dark:text-[#a8d6d6] dark:placeholder:text-zinc-500"
                  placeholder="seuemail@exemplo.com"
                  type="email"
                  defaultValue=""
                />
              </div>
            </label>
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal pb-2 text-zinc-700 dark:text-zinc-300">
                Senha
              </p>
              <div className="relative flex w-full items-center">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-zinc-300 bg-white py-3 pr-12 pl-4 text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-zinc-700/50 dark:bg-[#1a3636] dark:text-[#a8d6d6] dark:placeholder:text-zinc-500"
                  placeholder="Digite sua senha"
                  type="password"
                  defaultValue=""
                />
                <button
                  className="absolute right-4 text-zinc-400 dark:text-zinc-500 hover:text-primary"
                  type="button"
                >
                  <EyeIcon className="h-6 w-6 text-white hover:opacity-80" />
                </button>
              </div>
            </label>
            <div className="pt-4">
              <button className="flex h-12 w-full items-center justify-center cursor-pointer rounded-lg bg-primary px-6 text-base font-bold text-black shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                Criar conta
              </button>
            </div>
          </form>
        </div>
        <div className="relative my-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t border-zinc-300 dark:border-zinc-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background-light px-2 text-zinc-500 dark:bg-background-dark dark:text-zinc-400">
              OR
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-100/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800/50 dark:focus:ring-offset-background-dark">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5776 12.2718C22.5776 11.4163 22.5065 10.5891 22.3734 9.78906H12.2344V14.512H18.1569C17.8821 16.0354 17.1362 17.3195 15.9934 18.152L15.976 18.256L19.4544 20.9323L19.5707 20.945C21.4618 19.2602 22.5776 16.92 22.5776 14.1567V12.2718Z"
                fill="#4285F4"
              ></path>
              <path
                d="M12.2344 22.999C15.0134 22.999 17.336 22.0945 19.0435 20.488L15.5422 17.893C14.6547 18.452 13.541 18.821 12.2344 18.821C9.61015 18.821 7.42141 17.1362 6.64791 14.8329L6.54181 14.8453L2.91355 17.5454L2.86435 17.6591C4.57186 20.9167 8.08505 22.999 12.2344 22.999Z"
                fill="#34A853"
              ></path>
              <path
                d="M6.64795 14.8329C6.41375 14.1567 6.27186 13.4354 6.27186 12.6914C6.27186 11.9473 6.40495 11.226 6.63916 10.5587L6.64795 10.4354L3.00105 7.77955L2.8644 7.73182C2.15277 9.10909 1.73359 10.8255 1.73359 12.6914C1.73359 14.5573 2.15277 16.2736 2.8644 17.6509L6.64795 14.8329Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12.2344 6.56182C13.6844 6.52727 15.0827 7.04091 16.1344 7.99091L19.1118 5.07818C17.2652 3.31364 14.8844 2.38636 12.2344 2.38636C8.08505 2.38636 4.57186 4.46818 2.86435 7.72591L6.64791 10.5445C7.42141 8.24136 9.61015 6.56182 12.2344 6.56182Z"
                fill="#EA4335"
              ></path>
            </svg>
            Acessar com Google
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Já tem cadastro?{" "}
            <Link href="/login" className="underline hover:text-primary">
              Acesse sua conta
            </Link>
          </p>
          <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-500">
            Ao criar uma conta, você concorda com nossos <br />
            <a className="underline hover:text-primary" href="#">
              Termos de Serviço
            </a>{" "}
            e{" "}
            <a className="underline hover:text-primary" href="#">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
