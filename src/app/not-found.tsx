import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),_transparent_30%),linear-gradient(135deg,_#0f172a,_#1e1b4b,_#020617)] px-4 pt-16">
      <div className="max-w-lg text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
          Erro 404
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Esta página não está no nosso mapa histórico.
        </h1>
        <p className="mt-5 leading-7 text-slate-300">
          Talvez a aula tenha mudado de endereço ou o link esteja incompleto.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            className="rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 px-5 py-3 font-bold text-slate-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-100"
            href="/"
          >
            Ir para o início
          </Link>
          <Link
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            href="/modulos/"
          >
            Ver módulos
          </Link>
        </div>
      </div>
    </div>
  );
}
