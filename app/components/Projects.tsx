"use client";

import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Project from "./Project";

export default function Projects() {
  const [view, setView] = useState("departamentos");
  const [selectedPage, setSelectedPage] = useState(1);

  const handleClick = (buttonView: string) => {
    setView(buttonView);
    setSelectedPage(1);
  };

  const handleVolverClick = () => {
    setSelectedPage(1);
  };

  const handlePasarClick = () => {
    setSelectedPage(2);
  };

  let renderedView;

  switch (view) {
    case "departamentos":
      renderedView = (
        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-5 md:gap-10 w-full">
          <Project
            title="La Aguada"
            description="Departamentos - Disponibles"
            background="la-aguada"
          />
          <Project
            title="San Martín Design"
            description="Departamentos - No disponible"
            background="san-martin-design"
          />
          <Project
            title="Bustillo Uno"
            description="Departamentos - Disponibles"
            background="bustillo-uno"
          />
          <Project
            title="Carantania"
            description="Departamentos - No disponible"
            background="carantania"
          />
        </div>
      );
      break;

    case "loteos":
      renderedView = (
        <>
          <div
            className={`${
              selectedPage === 1 ? "grid" : "hidden"
            }  grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-5 md:gap-10 w-full`}
          >
            <Project
              title="Lomas del Cauquen"
              description="Barrio abierto - Lotes disponibles"
              background="lomas-del-cauquen"
            />
            <Project
              title="Las Pitras"
              description="Barrio abierto - Sin lotes disponibles"
              background="las-pitras"
            />
            <Project
              title="Entre Cerros"
              description="Barrio abierto - Lotes disponibles"
              background="entre-cerros"
            />
            <Project
              title="Altos de Dina Huapi"
              description="Barrio abierto - Lotes disponibles"
              background="altos-de-dina"
            />
          </div>
          <div
            className={`${
              selectedPage === 1 ? "hidden" : "grid"
            }  grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-5 md:gap-10 w-full`}
          >
            <Project
              title="Rincón del Este"
              description="Barrio abierto - Lotes disponibles"
              background="rincon-del-este"
            />
            <Project
              title="Pasaje del Este"
              description="Barrio abierto - Lotes disponibles"
              background="pasaje-del-este"
            />
            <Project
              title="Reina Mora"
              description="Barrio abierto - Lotes disponibles"
              background="reina-mora"
            />
          </div>
        </>
      );
      break;

    case "oficinas":
      renderedView = (
        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-5 md:gap-10 w-full">
          <Project
            title="San Martín Design"
            description="Oficinas - No disponibles"
            background="san-martin-design"
          />
          <Project
            title="Bariloche Center"
            description="Locales y Oficinas - Disponibles"
            background="bariloche-center"
          />
          <Project
            title="Paseo Catedral"
            description="Locales y Oficinas - No disponibles"
            background="paseo-catedral"
          />
        </div>
      );
      break;
  }

  return (
    <section
      id="proyectos"
      className="min-h-screen px-5 lg:px-20 xl:px-28 py-20 flex flex-col gap-10 "
    >
      <h3 className="text-2xl md:text-3xl lg:text-4xl">PROYECTOS</h3>
      <div className="flex projects justify-between items-start gap-10">
        <div className="flex flex-col projects-buttons items-start gap-3">
          <button
            className={`text-[#999DA9]  text-base md:text-xl pl-0 md:pl-2 ${
              view === "departamentos"
                ? "border-b-[3px] md:border-b-0 md:border-l-[3px] border-[#8a2e67] text-foreground"
                : ""
            }`}
            onClick={() => handleClick("departamentos")}
          >
            Departamentos
          </button>
          <button
            className={`text-[#999DA9]  text-base md:text-xl pl-0 md:pl-2 ${
              view === "loteos"
                ? "border-b-[3px] md:border-b-0 md:border-l-[3px] border-[#8a2e67] text-foreground"
                : ""
            }`}
            onClick={() => handleClick("loteos")}
          >
            Loteos
          </button>
          <button
            className={`text-[#999DA9] text-base md:text-xl pl-0 md:pl-2 ${
              view === "oficinas"
                ? "border-b-[3px] md:border-b-0 md:border-l-[3px] border-[#8a2e67] text-foreground"
                : ""
            }`}
            onClick={() => handleClick("oficinas")}
          >
            Oficinas
          </button>
        </div>
        <div className="flex flex-col justify-center items-center  gap-10 w-full xl:w-fit">
          {renderedView}
          <div className="flex justify-between items-center gap-5 md:gap-20 w-full">
            <button
              className="flex justify-center items-center w-[120px] md:w-[200px] px-4 py-2 bg-foreground text-background text-lg rounded-md hover:bg-[#8a2e67] hover:text-background hover:scale-110 transition-all duration-150 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-foreground"
              onClick={handleVolverClick}
              disabled={
                view === "departamentos" || view === "oficinas" ? true : false
              }
            >
              <BiLeftArrowAlt className="mr-6 md:w-6 md:h-6" /> Volver
            </button>
            <div className="hidden sm:flex gap-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  selectedPage === 1 ? "bg-foreground" : "bg-foreground/50"
                }`}
              ></div>
              <div
                className={`w-2 h-2 rounded-full ${
                  selectedPage === 1 ? "bg-foreground/50" : "bg-foreground"
                } `}
              ></div>
            </div>
            <button
              className="flex justify-center items-center w-[120px] md:w-[200px] px-4 py-2 bg-foreground text-background text-lg rounded-md hover:bg-[#8a2e67] hover:text-background hover:scale-110 transition-all duration-150 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-foreground"
              onClick={handlePasarClick}
              disabled={
                view === "departamentos" || view === "oficinas" ? true : false
              }
            >
              Pasar
              <BiRightArrowAlt className="ml-6 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
