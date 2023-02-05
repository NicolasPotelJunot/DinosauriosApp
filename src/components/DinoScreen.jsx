import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getDinoById } from "../selectors/getDinoById";

export const DinoScreen = () => {
  const { dinoId } = useParams();

  const navigate = useNavigate();

  const dino = useMemo(() => getDinoById(dinoId), [dinoId]);

  if (!dino) {
    return <Navigate to="/" />;
  }

  const { id, namedino, tipo, era, etimologia, familia, info } = dino;

  const handleReturn = () => {
    navigate(-1);
  };

  const dinoImage = `/assets/img/${id}.jpg`;

  return (
    <section className="h-screen overflow-y-auto py-20 px-32 animate__animated animate__fadeIn">
      <button
        onClick={handleReturn}
        className="bg-blue-500 hover:bg-blue-700 px-3 py-2 shadow-inner shadow-sky-400 text-white rounded-xl transition fixed top-8 right-16"
      >
        Ir a la lista
      </button>

      <div className="pb-5 border-b-2 border-slate-200">
        <h1 className="text-5xl text-slate-600">{namedino}</h1>
      </div>

      <img
        src={dinoImage}
        alt={id}
        className="h-72 mx-auto mt-10 cursor-zoom-in hover:relative active:scale-150"
      />

      <article className="grid">
        <div>
          <p className="inline font-style-bold">Dieta: </p>
          <p className="inline">{tipo}</p>
        </div>

        <div>
          <p className="inline font-style-bold">Familia: </p>
          <p className="inline">{familia}</p>
        </div>

        <div>
          <p className="inline font-style-bold">Era: </p>
          <p className="inline">{era}</p>
        </div>

        <div>
          <p className="inline font-bold">EtimologÍa: </p>
          <p className="inline">{etimologia}</p>
        </div>

        <div>
          <p className="inline font-bold">Descripción: </p>
          <p className="inline">{info}</p>
        </div>
      </article>
    </section>
  );
};
