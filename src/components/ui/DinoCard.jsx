import React from "react";
import { Link } from "react-router-dom";

export const DinoCard = ({ id, namedino, tipo, era }) => {
  const dinoImage = `/assets/img/${id}.jpg`;

  return (
    <article className="bg-white rounded-2xl transition-all duration-300 hover:shadow-gray-400 hover:shadow-lg hover:relative hover:-translate-y-2">
      <Link
        to={`/dino/${id}`}
        className=" grid h-full justify-between py-3 md:py-10 px-4 transition-all duration-300 rounded-2xl hover:shadow-inner hover:shadow-zinc-300 "
      >
        <div className="overflow-hidden h-32 flex">
          <img
            src={dinoImage}
            alt={id}
            className="sm:text-sm md:text-lg w-full mx-auto mb-5"
          />
        </div>

        <div className="lg:h-24 flex flex-col justify-between border-t border-gray-300">
          <div className=" flex place-items-center justify-center h-full ">
            <h5 className=" w-3/4 flex justify-center text-center font-bold text-slate-500 text-lg lg-text-xl">
              {namedino}
            </h5>
          </div>

          <div className="md:grid md:grid-cols-2 justify-center mt-1">
            <p
              className={`mt-2 text-center flex justify-center items-center text-xs lg:text-sm mr-1 ${
                tipo === "Carnívoro" ? "bg-red-400 text-white" : "bg-green-300"
              } py-1 px-2 rounded-lg`}
            >
              {tipo}
            </p>
            <p className="mt-2 text-center flex justify-center items-center text-xs lg:text-sm bg-cyan-600 text-white py-1 px-2 rounded-lg">
              {era}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};
