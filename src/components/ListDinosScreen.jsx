import React, { useState } from "react";
import { dinosaurios } from "../data/dinosaurs";
import { DinoCard } from "./ui/DinoCard";

export const ListDinosScreen = () => {
  const [query, setquery] = useState("");

  const [dataDino, setdataDino] = useState(dinosaurios);

  dataDino.sort((a, b) => {
    const idDinoA = a.namedino.toLowerCase();
    const idDinoB = b.namedino.toLowerCase();
    if (idDinoA < idDinoB) {
      return -1;
    }
    if (idDinoA > idDinoB) {
      return 1;
    }
    return 0;
  });

  const filterDinoTipo = (dinoItem) => {
    const result = dinosaurios.filter((dino) => {
      return dino.tipo === dinoItem;
    });
    setdataDino(result);
  };

  const filterDinoEra = (dinoItem) => {
    const result = dinosaurios.filter((dino) => {
      return dino.idEra === dinoItem;
    });
    setdataDino(result);
  };

  return (
    <section className="bg-gray-100 p-3 h-screen overflow-y-scroll w-full animate__animated animate__fadeIn">
      <h1 className="text-center font-style-bold text-slate-500 text-4xl text-bold my-7">
        DINOSAURIOS ARGENTINOS
      </h1>

      <form className=" w-full mt-10 mb-5">
        <input
          className="mx-auto bg-gray-100 w-3/4 block shadow shadow-slate-300 rounded-xl p-3 border border-slate-300 focus:outline-none focus:border-blue-400 sm:text-sm transition"
          type="search"
          placeholder="Buscar dinosaurio"
          name="searchDino"
          onChange={(e) => setquery(e.target.value)}
        />
      </form>

      <div className="flex w-full justify-center my-8">
        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => setdataDino(dinosaurios)}
        >
          All
        </button>

        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => filterDinoTipo("Carnívoro")}
        >
          Carnívoros
        </button>

        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => filterDinoTipo("Herbívoro")}
        >
          Herbívoros
        </button>

        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => filterDinoEra("Triásico")}
        >
          Triásico
        </button>

        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => filterDinoEra("Jurásico")}
        >
          Jurásico
        </button>

        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => filterDinoEra("Cretácico")}
        >
          Cretácico
        </button>
      </div>

      <div className="py-3 grid gap-5 mx-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:w-full xl:grid-cols-5 2xl:grid-cols-6 2xl:px-20">
        {dataDino
          .filter((dino) => dino.namedino.toLowerCase().includes(query))
          .map((dino) => (
            <DinoCard key={dino.id} {...dino} />
          ))}
      </div>
    </section>
  );
};
