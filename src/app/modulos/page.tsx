import Link from 'next/link';
import { modulos } from '@/data/curso';

export default function ModulosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Todos os Módulos
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Escolha um módulo para começar seus estudos. Cada módulo contém aulas completas 
            com conteúdo, dicas do ENEM e questões comentadas.
          </p>
        </div>
        
        {/* Distribution Info */}
        <div className="max-w-4xl mx-auto mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            📊 Distribuição das Questões no ENEM
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">~50%</div>
              <div className="text-white/60 text-sm">História do Brasil</div>
            </div>
            <div className="bg-blue-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">~30%</div>
              <div className="text-white/60 text-sm">História Geral</div>
            </div>
            <div className="bg-orange-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">~4%</div>
              <div className="text-white/60 text-sm">História da América</div>
            </div>
            <div className="bg-purple-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">~1%</div>
              <div className="text-white/60 text-sm">História da África</div>
            </div>
          </div>
        </div>
        
        {/* Modules Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {modulos.map((modulo) => (
              <Link
                key={modulo.id}
                href={`/modulos/${modulo.slug}`}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0"
                    style={{ backgroundColor: `${modulo.cor}30` }}
                  >
                    {modulo.icone}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {modulo.titulo}
                      </h2>
                    </div>
                    
                    <p className="text-white/60 mb-4">
                      {modulo.descricao}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                        {modulo.aulas.length} aulas
                      </span>
                      <span className="text-white/40 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all flex items-center gap-1">
                        Ver aulas <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Aulas Preview */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-medium text-white/40 mb-3">Algumas aulas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {modulo.aulas.slice(0, 3).map((aula) => (
                      <span 
                        key={aula.id}
                        className="px-3 py-1 bg-white/5 rounded-lg text-xs text-white/60"
                      >
                        {aula.titulo.split(':')[0]}
                      </span>
                    ))}
                    {modulo.aulas.length > 3 && (
                      <span className="px-3 py-1 bg-white/5 rounded-lg text-xs text-white/40">
                        +{modulo.aulas.length - 3} mais
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Tip */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">💡</span>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Dica de Estudo</h3>
              <p className="text-white/70">
                Comece pelos módulos com maior peso no ENEM (História do Brasil e História Geral). 
                Estude no seu ritmo e faça as questões de fixação ao final de cada aula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
