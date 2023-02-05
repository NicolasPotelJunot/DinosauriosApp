import React from "react";

export const CardTaxonomy = ({ taxonomia }) => {
  const { filo, clase, orden, suborden, familia, genero, especies } = taxonomia;
  return (
    <article className="bg-white px-3 pt-5 pb-10 rounded-2xl transition-all duration-300 shadow-gray-400 shadow-md">
      <h4 className="text-2xl text-center mb-6 border-b-2 border-slate-200 py-2">
        Taxonomía
      </h4>
      <div className="grid">
        <p className="text-lg">Filo: {filo}</p>
        <p className="text-lg">Clase: {clase}</p>
        <p className="text-lg">Orden: {orden}</p>
        <p className="text-lg">Suborden: {suborden}</p>
        <p className="text-lg">Familia: {familia}</p>
        <p className="text-lg">Género: {genero}</p>
        <p className="text-lg">Especies: {especies}</p>
      </div>
    </article>
  );
};
