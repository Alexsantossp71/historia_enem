'use client';

import { useState } from 'react';

interface Questao {
  enunciado: string;
  alternativas: string[];
  correta: number;
  comentario: string;
}

interface Exercicio {
  enunciado: string;
  alternativas: string[];
  correta: number;
}

export function QuestaoComponent({ questao }: { questao: Questao }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  return (
    <div className="space-y-4">
      <p className="text-white/90">{questao.enunciado}</p>
      
      <div className="space-y-2">
        {questao.alternativas.map((alt, aIndex) => (
          <button
            key={aIndex}
            onClick={() => setSelectedAnswer(aIndex)}
            className={`w-full text-left p-4 rounded-xl transition-all text-sm ${
              selectedAnswer === aIndex
                ? aIndex === questao.correta
                  ? 'bg-green-500/20 border-2 border-green-500'
                  : 'bg-red-500/20 border-2 border-red-500'
                : 'bg-white/5 border border-white/10 hover:bg-white/10'
            }`}
          >
            <span className="text-white/60 mr-2">
              {String.fromCharCode(97 + aIndex)})
            </span>
            <span className="text-white/90">{alt}</span>
          </button>
        ))}
      </div>
      
      {selectedAnswer !== null && (
        <div className={`p-4 rounded-xl ${
          selectedAnswer === questao.correta
            ? 'bg-green-500/20 border border-green-500/30'
            : 'bg-red-500/20 border border-red-500/30'
        }`}>
          <p className="text-white font-medium mb-2">
            {selectedAnswer === questao.correta ? '✅ Correto!' : '❌ Incorreto'}
          </p>
          <p className="text-white/80 text-sm">{questao.comentario}</p>
        </div>
      )}
    </div>
  );
}

export function ExercicioComponent({ exercicio, index }: { exercicio: Exercicio; index: number }) {
  const [showAnswer, setShowAnswer] = useState(false);
  
  return (
    <div className="mb-6 last:mb-0">
      <p className="text-white/90 mb-4">{index + 1}. {exercicio.enunciado}</p>
      
      <div className="space-y-2">
        {exercicio.alternativas.map((alt, aIndex) => (
          <button
            key={aIndex}
            onClick={() => setShowAnswer(true)}
            className="w-full text-left p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
          >
            <span className="text-white/60 mr-2">
              {String.fromCharCode(97 + aIndex)})
            </span>
            <span className="text-white/80">{alt}</span>
          </button>
        ))}
      </div>
      
      {showAnswer && (
        <p className="mt-3 text-sm text-green-400">
          Resposta correta: {String.fromCharCode(97 + exercicio.correta)})
        </p>
      )}
    </div>
  );
}
