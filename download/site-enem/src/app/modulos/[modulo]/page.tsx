import Link from 'next/link';
import { modulos, getModuloBySlug } from '@/data/curso';

interface Props {
  params: Promise<{ modulo: string }>;
}

export async function generateStaticParams() {
  return modulos.map((modulo) => ({
    modulo: modulo.slug,
  }));
}

export default async function ModuloPage({ params }: Props) {
  const { modulo: moduloSlug } = await params;
  const modulo = getModuloBySlug(moduloSlug);
  
  if (!modulo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Módulo não encontrado</h1>
          <Link href="/modulos/" className="text-yellow-400 hover:underline">
            Ver todos os módulos
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-white/60">
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
            <li className="text-white">{modulo.titulo}</li>
          </ol>
        </nav>
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl"
              style={{ backgroundColor: `${modulo.cor}30` }}
            >
              {modulo.icone}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {modulo.titulo}
              </h1>
              <p className="text-white/60">{modulo.aulas.length} aulas disponíveis</p>
            </div>
          </div>
          <p className="text-white/70">{modulo.descricao}</p>
        </div>
        
        {/* Aulas */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-white mb-4">
            📖 Escolha uma aula:
          </h2>
          
          {modulo.aulas.map((aula, index) => (
            <Link
              key={aula.id}
              href={`/modulos/${modulo.slug}/${aula.slug}/`}
              className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
                style={{ backgroundColor: `${modulo.cor}20`, color: modulo.cor }}
              >
                {index + 1}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium group-hover:text-yellow-400 transition-colors">
                  {aula.titulo}
                </h3>
              </div>
              
              <div className="text-white/30 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">
                →
              </div>
            </Link>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <Link 
            href="/modulos/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            ← Ver todos os módulos
          </Link>
        </div>
      </div>
    </div>
  );
}
