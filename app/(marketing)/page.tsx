import Link from "next/link";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { WrenchScrewdriverIcon } from "@heroicons/react/16/solid";
import { ClockIcon } from "@heroicons/react/16/solid";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#102222cc] backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a className="text-2xl font-extrabold text-white" href="#">
                quemvai.app
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                className="text-sm font-bold text-white hover:text-primary transition-colors"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="px-4 py-2 text-sm font-bold bg-[#0df2f2] text-[#102222] rounded-full hover:bg-primary/80 transition-colors"
                href="/sign-up"
              >
                Começar Grátis
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#102222cc]">
          <div className="container mx-auto grid lg:grid-cols-1 gap-12 items-center">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Crie sua Lista de Convidados em Minutos
              </h1>
              <p className="mt-6 text-2xl text-white/70 mx-auto lg:mx-0">
                quemvai.app é a plataforma ideal para criar convites digitais
                personalizados e gerenciar a lista de convidados de forma
                simples e eficiente.
              </p>
              <div className="mt-8">
                <a
                  className="inline-block px-8 py-4 text-lg font-bold bg-[#0df2f2] text-[#102222] rounded-full hover:bg-primary/80 transition-transform transform hover:scale-105"
                  href="#"
                >
                  Crie seu Link Grátis Agora
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              {/* <div className="w-full max-w-sm h-auto aspect-[9/16] bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl"></div> */}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 bg-[#1a2e2e] px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Como Funciona?
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Em três passos simples, seu evento está pronto para decolar.
              </p>
            </div>
            <div className="mt-12 relative">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-primary/20 hidden md:block"
              ></div>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="relative text-center">
                  <div className="flex items-center justify-center size-12 mx-auto rounded-full bg-[#0df2f2] text-black">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">
                    Crie sua lista de convidados
                  </h3>
                  <p className="mt-2 text-white/70">
                    Adicione as informações do seu evento e crie sua lista de
                    convidados.
                  </p>
                </div>
                <div className="relative text-center">
                  <div className="flex items-center justify-center size-12 mx-auto rounded-full bg-[#0df2f2] text-black">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">
                    Compartilhe o link
                  </h3>
                  <p className="mt-2 text-white/70">
                    Envie o link do convite para seus amigos e familiares.
                  </p>
                </div>
                <div className="relative text-center">
                  <div className="flex items-center justify-center size-12 mx-auto rounded-full bg-[#0df2f2] text-black">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">
                    Gerencie os convidados
                  </h3>
                  <p className="mt-2 text-white/70">
                    Acompanhe as confirmações e gerencie a lista de convidados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Simples e Eficiente
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Com quemvai.app, organizar seu evento nunca foi tão fácil. Nossa
                plataforma oferece ferramentas intuitivas para gerenciar
                convidados, acompanhar confirmações e personalizar seus
                convites.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-[#1a2e2e] rounded-xl border border-[#0df2f21a]">
                <div className="icon-placeholder text-primary">
                  <WrenchScrewdriverIcon className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Gerenciamento de Convidados
                </h3>
                <p className="mt-2 text-white/70">
                  Acompanhe a lista de convidados e gerencie as confirmações de
                  forma organizada.
                </p>
              </div>
              <div className="p-8 bg-[#1a2e2e] rounded-xl border border-[#0df2f21a]">
                <div className="flex items-center justify-between">
                  <div className="icon-placeholder text-primary">
                    <ClockIcon className="w-8 h-8" />
                  </div>
                  <span className="bg-[#0df2f233] text-[#0df2f2] text-xs font-bold px-2 py-1 rounded-full">
                    Em breve
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Confirmações em Tempo Real
                </h3>
                <p className="mt-2 text-white/70">
                  Receba notificações em tempo real sobre as confirmações dos
                  seus convidados.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background-dark-lighter">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Pronto para começar?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Crie seu convite digital agora mesmo e surpreenda seus convidados.
              É rápido, fácil e gratuito.
            </p>
            <div className="mt-8">
              <Link
                className="inline-block px-8 py-4 text-lg font-bold bg-[#0df2f2] text-[#102222] rounded-full hover:bg-primary/80 transition-transform transform hover:scale-105"
                href="/login"
              >
                Gerar meu Link Grátis
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background-dark border-t border-primary/10">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="text-white/70 text-sm">
              © 2025 quemvai.app. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <a
                className="text-white/70 hover:text-primary transition-colors"
                href="#"
              >
                Termos
              </a>
              <a
                className="text-white/70 hover:text-primary transition-colors"
                href="#"
              >
                Privacidade
              </a>
              <a
                className="text-white/70 hover:text-primary transition-colors"
                href="#"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
