import Link from 'next/link';
import { notFound } from 'next/navigation';
import { modulos, getModuloBySlug } from '@/data/curso';

interface Props {
  params: Promise<{ modulo: string }>;
}

export async function generateStaticParams() {
  return modulos.map((modulo) => ({
    modulo: modulo.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { modulo: moduloSlug } = await params;
  const modulo = getModuloBySlug(moduloSlug);
  
  if (!modulo) return { title: 'Módulo não encontrado' };
  
  return {
    title: `${modulo.titulo} - Curso de História ENEM`,
    description: modulo.descricao,
  };
}

export default async function ModuloPage({ params }: Props) {
  const { modulo: moduloSlug } = await params;
  const modulo = getModuloBySlug(moduloSlug);
  
  if (!modulo) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12">
      <div className="container mx-auto px-4">
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
              <Link href="/modulos" className="hover:text-white transition-colors">
                Módulos
              </Link>
            </li>
            <li>→</li>
            <li className="text-white font-medium">{modulo.titulo}</li>
          </ol>
        </nav>
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${modulo.cor}30` }}
            >
              {modulo.icone}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {modulo.titulo}
              </h1>
              <p className="text-white/60 mt-1">{modulo.descricao}</p>
            </div>
          </div>
        </div>
        
        {/* Aulas Grid */}
        <div className="max-w-4xl">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span>📖</span> Aulas disponíveis
          </h2>
          
          <div className="space-y-4">
            {modulo.aulas.map((aula, index) => (
              <Link
                key={aula.id}
                href={`/modulos/${modulo.slug}/${aula.slug}`}
                className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all hover:scale-[1.01]"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                  style={{ backgroundColor: `${modulo.cor}20`, color: modulo.cor }}
                >
                  {index + 1}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors truncate">
                    {aula.titulo}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">
                    Clique para estudar
                  </p>
                </div>
                
                <div className="text-white/30 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center max-w-4xl">
          <Link 
            href="/modulos" 
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            ← Ver todos os módulos
          </Link>
          
          {modulos.indexOf(modulo) < modulos.length - 1 && (
            <Link 
              href={`/modulos/${modulos[modulos.indexOf(modulo) + 1].slug}`}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              Próximo módulo →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
