import Link from 'next/link';
import { modulos } from '@/data/curso';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="container mx-auto relative max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm mb-6">
              <span className="animate-pulse">🔥</span>
              <span>Conteúdo atualizado para ENEM 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Curso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">História</span> para ENEM
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Estude todos os temas que caem no ENEM. Aprenda no seu ritmo, com aulas didáticas, 
              questões comentadas e dicas para gabaritar a prova!
            </p>
            
            <Link href="/modulos/" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-orange-500/30 text-lg">
              Começar a Estudar 🚀
            </Link>
          </div>
        </div>
      </section>

      {/* Módulos Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Escolha um Módulo para Começar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modulos.map((modulo) => (
              <Link
                key={modulo.id}
                href={`/modulos/${modulo.slug}/`}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0"
                    style={{ backgroundColor: `${modulo.cor}30` }}
                  >
                    {modulo.icone}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-1">
                      {modulo.titulo}
                    </h3>
                    <p className="text-white/60 text-sm mb-3 line-clamp-2">
                      {modulo.descricao}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white/50">
                        {modulo.aulas.length} aulas
                      </span>
                      <span className="text-white/30 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-black/20">
        <div className="container mx-auto max-w-3xl">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">{modulos.length}</div>
              <div className="text-white/60 text-sm">Módulos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">{modulos.reduce((acc, m) => acc + m.aulas.length, 0)}+</div>
              <div className="text-white/60 text-sm">Aulas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
              <div className="text-white/60 text-sm">Gratuito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dica Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Dica de Estudo</h3>
                <p className="text-white/80 text-sm">
                  Comece pelo módulo de <strong>História do Brasil</strong> — ele representa cerca de 50% das questões de História no ENEM. 
                  Depois, siga para <strong>História Geral</strong> (30%). Estude no seu ritmo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">
            Curso de História para ENEM • Feito com 💜 para estudantes brasileiros
          </p>
        </div>
      </footer>
    </div>
  );
}
