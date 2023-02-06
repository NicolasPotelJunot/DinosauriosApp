import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getDinoById } from "../selectors/getDinoById";
import { CardCaracterist } from "./ui/dinoScreen/CardCaracterist";
import { CardTaxonomy } from "./ui/dinoScreen/CardTaxonomy";
import { Title } from "./ui/dinoScreen/Title";
import { Footer } from "./ui/footer/Footer";

export const DinoScreen = () => {
  const { dinoId } = useParams();

  const navigate = useNavigate();

  const dino = useMemo(() => getDinoById(dinoId), [dinoId]);

  if (!dino) {
    return <Navigate to="/" />;
  }

  const {
    id,
    namedino,
    info,
    descubrimiento,
    paleobiologia,
    paleoecologia,
    taxonomia,
  } = dino;

  // const handleReturn = () => {
  //   navigate(-1);
  // };

  const dinoImage = `/assets/img/${id}.jpg`;

  return (
    <section className="h-screen overflow-y-auto py-20 px-6 lg:px-52 animate__animated animate__fadeIn">
      {/* <button
        onClick={handleReturn}
        className="bg-blue-500 hover:bg-blue-700 px-3 py-2 shadow-inner shadow-sky-400 text-white rounded-xl transition fixed top-8 right-16"
      >
        Ir a la lista
      </button> */}

      <div className="pb-5 border-b-2 border-slate-200">
        <h1 className="text-3xl text-center lg:text-5xl text-slate-600">
          {namedino}
        </h1>
      </div>

      <img
        src={dinoImage}
        alt={id}
        className="lg:h-72 mx-auto mt-10 mb-5 cursor-zoom-in hover:relative active:scale-150"
      />

      <div className="grid grid-cols-2 gap-4 md:w-3/4 xl:w-1/2 m-auto my-10">
        <CardCaracterist dino={dino} />
        <CardTaxonomy taxonomia={taxonomia} />
      </div>

      <section className="grid">
        <div className="mb-5">
          <Title text="Descripción" />
          <p className="inline">
            {info.map((desc, index) => (
              <p key={index} className="my-2">
                {desc.p}
              </p>
            ))}
          </p>
        </div>
        <div className="mb-5">
          <Title text="Descubrimiento" />
          {descubrimiento.map((desc, index) => (
            <p key={index} className="my-2">
              {desc.p}
            </p>
          ))}
        </div>
        {paleobiologia && (
          <div className="mb-5">
            <Title text="Paleobiología" />
            {paleobiologia.map((desc, index) => (
              <p key={index} className="my-2">
                {desc.p}
              </p>
            ))}
          </div>
        )}

        {paleoecologia && (
          <div className="mb-5">
            <Title text="Paleoecología" />
            {paleoecologia.map((desc, index) => (
              <p key={index} className="my-2">
                {desc.p}
              </p>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </section>
  );
};
