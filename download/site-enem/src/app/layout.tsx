import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Curso de História para ENEM",
  description: "Curso completo e gratuito de História para o ENEM. Estude todos os temas cobrados na prova.",
  keywords: ["ENEM", "História", "Curso gratuito", "Vestibular", "Estudos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-14">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl">📚</span>
                <span className="font-bold text-white text-sm">História ENEM</span>
              </Link>
              
              <div className="flex items-center gap-4">
                <Link 
                  href="/modulos/" 
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Módulos
                </Link>
                <Link 
                  href="/modulos/" 
                  className="px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-lg text-sm hover:scale-105 transition-transform"
                >
                  Estudar
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main */}
        <main className="pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}
