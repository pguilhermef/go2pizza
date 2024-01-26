'use client'
// @ts-nocheck
import React from "react";

const { useState } = React;

const Form = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [investimento, setInvestimento] = useState('80000-100000');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [mensagem, setMensagem] = useState('');

  const messageContent = 
  `
  Nome: ${nome}
  Email: ${email}
  Celular: ${celular}
  Disponibilidade de Investimento: ${investimento}
  Estado: ${estado}
  Cidade: ${cidade}
  `;

  return (
    <div className="flex justify-center items-center mx-4 w-full">
      <form
        className="flex-col justify-center items-center w-full max-w-full mb-8 mt-2 mx-4 text-black"
        method="POST"
        action="https://formsubmit.co/pguilhermesanttos@gmail.com"
      >
        <label htmlFor="nome" className="block mb-2 text-sm font-bold text-red-600">
          Nome*:
        </label>
        <input
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
        />

        <label htmlFor="email" className="block mb-2 text-sm font-bold text-red-600">
          Email*:
        </label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
        />

        <label htmlFor="mensagem" className="mb-2 text-sm font-bold text-red-600 hidden">
          Mensagem:
        </label>
        <textarea
          name="Dados da Proposta"
          id="mensagem"
          value={messageContent}
          className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300 hidden"
        />

        <label className="block mb-2 text-sm font-bold text-red-600">
          Celular*:
        </label>
        <input
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          type="tel"
          className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
        />

        <label className="block mb-2 text-sm font-bold text-red-600">
          Disponibilidade de Investimento*:
        </label>
        <select
          value={investimento}
          onChange={(e) => setInvestimento(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
        >
          <option value="80000-100000">R$80.000 - R$100.000</option>
          <option value="100000-120000">R$100.000 - R$120.000</option>
          <option value="120000-140000">R$120.000 - R$140.000</option>
        </select>

        <label className="block mb-2 text-sm font-bold text-red-600">
          Estado*:
        </label>
        <input
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          type="text"
          className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
        />

        <label className="block mb-2 text-sm font-bold text-red-600">
          Cidade*:
        </label>
        <input
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          type="text"
          className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
        />

        <button type="submit" className="w-full mt-5 bg-red-600 px-5 py-3 rounded-full text-center text-white font-extrabold text-lg">
          QUERO SER UM FRANQUEADO
        </button>
      </form>
    </div>
  );
};

export default Form;
