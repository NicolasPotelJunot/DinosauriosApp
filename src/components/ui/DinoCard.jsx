import React from "react";
import { Link } from "react-router-dom";

export const DinoCard = ({ id, namedino, tipo, era }) => {
  const dinoImage = `/assets/img/${id}.jpg`;

  return (
    <article className="bg-white rounded-2xl transition-all duration-300 hover:shadow-gray-400 hover:shadow-lg hover:relative hover:-translate-y-2">
      <Link
        to={`/dino/${id}`}
        className=" grid h-full justify-between p-4 transition-all duration-300 rounded-2xl hover:shadow-inner hover:shadow-zinc-300"
      >
        <div className="overflow-hidden h-32 flex">
          <img src={dinoImage} alt={id} className="w-full mx-auto mb-5" />
        </div>

        <div className="h-24 flex flex-col justify-between border-t border-gray-300">
          <div className=" flex place-items-center h-full">
            <h5 className=" w-full text-center font-bold text-slate-500 text-lg lg-text-xl">
              {namedino}
            </h5>
          </div>

          <div className="flex justify-center mt-1">
            <p
              className={`text-center mr-1 ${
                tipo === "Carnívoro" ? "bg-red-400 text-white" : "bg-green-300"
              } text-sm py-1 px-2 rounded-lg`}
            >
              {tipo}
            </p>
            <p className="text-center bg-cyan-600 text-white text-sm py-1 px-2 rounded-lg">
              {era}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};
