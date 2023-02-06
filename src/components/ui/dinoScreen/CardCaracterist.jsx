import React from "react";

export const CardCaracterist = ({ dino }) => {
  const { caracteristicas, tipo, era } = dino;
  const { longitud, altura, peso, autor } = caracteristicas;

  return (
    <article className="bg-white px-3 pt-5 pb-10 rounded-2xl transition-all duration-300 shadow-gray-400 shadow-md">
      <h4 className="text-lg lg:text-2xl text-center mb-6 border-b-2 border-slate-200 py-2">
        Caracteristicas
      </h4>
      <div className="grid">
        <p className="text-sm mt-1 md:text-lg">Longitud: {longitud}</p>
        <p className="text-sm mt-1 md:text-lg">Altura: {altura}</p>
        <p className="text-sm mt-1 md:text-lg">Peso: {peso}</p>
        <p className="text-sm mt-1 md:text-lg">Período: {era}</p>
        <p className="text-sm mt-1 md:text-lg">Dieta: {tipo}</p>
        <p className="text-sm mt-1 md:text-lg">Descrito por: {autor}</p>
      </div>
    </article>
  );
};
