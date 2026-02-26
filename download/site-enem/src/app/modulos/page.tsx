import Link from 'next/link';
import { modulos } from '@/data/curso';

export default function ModulosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            📚 Módulos do Curso
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Escolha um módulo para começar. Cada módulo contém aulas completas 
            com conteúdo didático e questões do ENEM comentadas.
          </p>
        </div>
        
        {/* Distribuição */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
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
        
        {/* Módulos */}
        <div className="space-y-6">
          {modulos.map((modulo, index) => (
            <Link
              key={modulo.id}
              href={`/modulos/${modulo.slug}/`}
              className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                  style={{ backgroundColor: `${modulo.cor}30` }}
                >
                  {modulo.icone}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-white/40 text-sm">Módulo {index + 1}</span>
                    <span className="px-2 py-0.5 bg-white/10 rounded text-xs text-white/60">
                      {modulo.aulas.length} aulas
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {modulo.titulo}
                  </h2>
                  <p className="text-white/60 text-sm mt-1">
                    {modulo.descricao}
                  </p>
                </div>
                
                <div className="text-white/30 group-hover:text-yellow-400 group-hover:translate-x-2 transition-all text-2xl">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}
