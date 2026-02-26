import Link from 'next/link';
import { modulos, getModuloBySlug } from '@/data/curso';
import { QuestaoComponent, ExercicioComponent } from './components';

interface Props {
  params: Promise<{ modulo: string; aula: string }>;
}

export async function generateStaticParams() {
  const params: { modulo: string; aula: string }[] = [];
  
  modulos.forEach((modulo) => {
    modulo.aulas.forEach((aula) => {
      params.push({
        modulo: modulo.slug,
        aula: aula.slug,
      });
    });
  });
  
  return params;
}

export default async function AulaPage({ params }: Props) {
  const { modulo: moduloSlug, aula: aulaSlug } = await params;
  const modulo = getModuloBySlug(moduloSlug);
  const aula = modulo?.aulas.find(a => a.slug === aulaSlug);
  
  if (!modulo || !aula) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Aula não encontrada</h1>
          <Link href="/modulos/" className="text-yellow-400 hover:underline">
            Voltar para módulos
          </Link>
        </div>
      </div>
    );
  }
  
  const aulaIndex = modulo.aulas.findIndex(a => a.id === aula.id);
  const prevAula = aulaIndex > 0 ? modulo.aulas[aulaIndex - 1] : null;
  const nextAula = aulaIndex < modulo.aulas.length - 1 ? modulo.aulas[aulaIndex + 1] : null;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-white/60 flex-wrap">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Início
              </Link>
            </li>
            <li>→</li>
            <li>
              <Link href="/modulos/" className="hover:text-white transition-colors">
                Módulos
              </Link>
            </li>
            <li>→</li>
            <li>
              <Link href={`/modulos/${modulo.slug}/`} className="hover:text-white transition-colors">
                {modulo.titulo}
              </Link>
            </li>
            <li>→</li>
            <li className="text-white">{aula.titulo}</li>
          </ol>
        </nav>
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ backgroundColor: `${modulo.cor}30` }}
            >
              {modulo.icone}
            </div>
            <span className="text-white/60 text-sm">{modulo.titulo} • Aula {aulaIndex + 1}</span>
          </div>
          
          <h1 className="text-3xl font-bold text-white">
            {aula.titulo}
          </h1>
        </div>
        
        {/* Conteúdo */}
        <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
          <div className="prose prose-invert max-w-none">
            {aula.conteudo.split('\n').map((linha, index) => {
              if (linha.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 first:mt-0">
                    {linha.replace('## ', '')}
                  </h2>
                );
              }
              if (linha.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">
                    {linha.replace('### ', '')}
                  </h3>
                );
              }
              if (linha.startsWith('**') && linha.endsWith('**')) {
                return (
                  <p key={index} className="text-white font-semibold mt-4 mb-2">
                    {linha.replace(/\*\*/g, '')}
                  </p>
                );
              }
              if (linha.startsWith('- ')) {
                return (
                  <li key={index} className="text-white/80 ml-4 mb-1">
                    {linha.replace('- ', '')}
                  </li>
                );
              }
              if (linha.trim() === '') {
                return <div key={index} className="h-3" />;
              }
              return (
                <p key={index} className="text-white/80 mb-3 leading-relaxed">
                  {linha}
                </p>
              );
            })}
          </div>
        </article>
        
        {/* Dica do ENEM */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-3xl">💡</span>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Dica do ENEM</h3>
              <p className="text-white/80">{aula.dicaEnem}</p>
            </div>
          </div>
        </div>
        
        {/* Questões */}
        {aula.questoes.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>📝</span> Questão do ENEM Comentada
            </h2>
            
            {aula.questoes.map((questao, qIndex) => (
              <QuestaoComponent key={qIndex} questao={questao} />
            ))}
          </div>
        )}
        
        {/* Exercícios */}
        {aula.exercicios.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>📚</span> Exercícios de Fixação
            </h2>
            
            {aula.exercicios.map((exercicio, eIndex) => (
              <ExercicioComponent key={eIndex} exercicio={exercicio} index={eIndex} />
            ))}
          </div>
        )}
        
        {/* Navigation */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-8 border-t border-white/10">
          {prevAula ? (
            <Link 
              href={`/modulos/${modulo.slug}/${prevAula.slug}/`}
              className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors w-full md:w-auto"
            >
              <span className="text-xl">←</span>
              <div className="text-left">
                <div className="text-xs text-white/50">Aula anterior</div>
                <div className="text-white font-medium text-sm">{prevAula.titulo}</div>
              </div>
            </Link>
          ) : (
            <Link 
              href={`/modulos/${modulo.slug}/`}
              className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              ← Voltar para {modulo.titulo}
            </Link>
          )}
          
          {nextAula ? (
            <Link 
              href={`/modulos/${modulo.slug}/${nextAula.slug}/`}
              className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-xl hover:scale-105 transition-transform w-full md:w-auto justify-end"
            >
              <div className="text-right">
                <div className="text-xs text-gray-700">Próxima aula</div>
                <div className="font-bold text-sm">{nextAula.titulo}</div>
              </div>
              <span className="text-xl">→</span>
            </Link>
          ) : (
            <Link 
              href="/modulos/"
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-400 to-green-600 text-gray-900 font-semibold rounded-xl hover:scale-105 transition-transform text-sm"
            >
              ✅ Concluir módulo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
