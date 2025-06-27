// app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const correctAnswer = 3;

  const [result, setResult] = useState('');
  const [showBonus, setShowBonus] = useState(false);

  const handleAnswer = (option: number) => {
    if (option === correctAnswer) {
      setResult(
        'Parabéns, você acertou! A Venezuela é um dos países vizinhos do Brasil!'
      );
      setShowBonus(true);
    } else {
      setResult('Infelizmente, você errou! Tente novamente!');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-500 to-slate-800 text-center text-gray-800">
      <header className="bg-slate-800 text-white p-5 shadow-md">
        <h1 className="text-3xl font-bold">
          Neste sábado, dia 28, acontece o maior Feirão de Imóveis de Teresina!
          Na Esparta Imobiliária.
        </h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-3">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl mb-4">Formulário de Financiamento</h2>
          <div className="flex flex-col gap-4">
          
          <input
            type="text"
            className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 text-silver-600 px-3"
          />
          
          <input
            type="text"
            className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 text-silver-600 px-3"
          />
          
          <input
          type="text"
          className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 text-silver-600 px-3"
          />
          
          <input
          type="text"
          className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 text-silver-600 px-3"
          />
          </div>
          {result && <div className="mt-6 text-lg font-semibold">{result}</div>}
        </div>
      </main>

      <footer className="bg-slate-800 text-white text-sm p-3">
        © 2025 Atividade de Respostas sobre Conhecimentos Gerais e Ganhe
        Dinheiro
      </footer>

      {showBonus && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full" />
            <h2 className="text-2xl font-bold mb-2 text-blue-700">
              Parabéns! Resposta correta!
            </h2>
            <p className="mb-4">Você ganhou 100 reais de bônus!</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() =>
                (window.location.href = 'https://pt.wikipedia.org/wiki/Brasil')
              }
            >
              Usar agora
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
