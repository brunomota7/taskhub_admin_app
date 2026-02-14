import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3423A6] via-[#1f1b4d] to-[#0f1025]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="relative z-10 px-10 py-10">
        <div className="mx-auto max-w-7xl flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="TaskHub Logo"
              width={48}
              height={48}
              className="rounded-md"
            />
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                TaskHub
              </h2>
              <p className="text-sm text-blue-200">
                Plataforma de gestão colaborativa
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-blue-100">
            <a href="#" className="hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Suporte
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Documentação
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contato
            </a>
          </nav>
        </div>

        <div className="my-8 border-t border-white/10" />

        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-200">
          <span>
            © {new Date().getFullYear()} TaskHub. Todos os direitos reservados.
          </span>

          <span className="text-xs text-blue-300">
            Desenvolvido para ambientes corporativos
          </span>
        </div>
      </div>
    </footer>
  );
}
