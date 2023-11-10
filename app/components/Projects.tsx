"use client";

import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

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
        <div className="grid grid-cols-2 grid-rows-2 gap-10 ">
          <div className="flex la-aguada w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
            <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
              <h6 className="text-xl">La Aguada</h6>
              <p>Departamentos - Unidades disponibles</p>
            </div>
          </div>
          <div className="flex san-martin-design w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
            <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
              <h6 className="text-xl">San Martín Design</h6>
              <p>Departamentos - No disponible</p>
            </div>
          </div>
          <div className="flex bustillo-uno w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
            <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
              <h6 className="text-xl">Bustillo Uno</h6>
              <p>Departamentos - Unidades disponibles</p>
            </div>
          </div>
          <div className="flex carantania w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
            <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
              <h6 className="text-xl">Carantania</h6>
              <p>Departamentos - No disponible</p>
            </div>
          </div>
        </div>
      );
      break;

    case "loteos":
      renderedView = (
        <>
          <div
            className={`${
              selectedPage === 1 ? "grid" : "hidden"
            } grid-cols-2 grid-rows-2 gap-10 `}
          >
            <div className="flex lomas-del-cauquen w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
                <h6 className="text-xl">Lomas del Cauquen</h6>
                <p>Barrio abierto - Últimos lotes disponibles</p>
              </div>
            </div>
            <div className="flex las-pitras w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
                <h6 className="text-xl">Las Pitras</h6>
                <p>Barrio abierto - Sin lotes disponibles</p>
              </div>
            </div>
            <div className="flex entre-cerros w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
                <h6 className="text-xl">Entre Cerros</h6>
                <p>Barrio abierto - Últimos lotes disponibles</p>
              </div>
            </div>
            <div className="flex altos-de-dina w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
                <h6 className="text-xl">Altos de Dina Huapi</h6>
                <p>Barrio abierto - Últimos lotes disponibles</p>
              </div>
            </div>
          </div>
          <div
            className={`${
              selectedPage === 1 ? "hidden" : "grid"
            } grid-cols-2 grid-rows-2 gap-10 `}
          >
            <div className="flex rincon-del-este w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
                <h6 className="text-xl">Rincón del Este</h6>
                <p>Barrio abierto - Lotes disponibles</p>
              </div>
            </div>
            <div className="flex pasaje-del-este w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
                <h6 className="text-xl">Pasaje del Este</h6>
                <p>Barrio abierto - Lotes disponibles</p>
              </div>
            </div>
            <div className="flex reina-mora w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
                <h6 className="text-xl">Reina Mora</h6>
                <p>Barrio abierto - Últimos lotes disponibles</p>
              </div>
            </div>
          </div>
        </>
      );
      break;

    case "oficinas":
      renderedView = (
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <div className="flex san-martin-design w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
            <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
              <h6 className="text-xl">San Martín Design</h6>
              <p>Oficinas - No disponibles</p>
            </div>
          </div>
          <div className="flex bariloche-center w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
            <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
              <h6 className="text-xl">Bariloche Center</h6>
              <p>Locales y Oficinas - Unidades disponibles</p>
            </div>
          </div>
          <div className="flex paseo-catedral w-[350px] h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md">
            <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
              <h6 className="text-xl">Paseo Catedral</h6>
              <p>Locales y Oficinas - No disponibles</p>
            </div>
          </div>
        </div>
      );
      break;
  }

  return (
    <section
      id="proyectos"
      className="min-h-screen px-28 py-20 flex flex-col gap-10"
    >
      <h3 className="text-4xl">PROYECTOS</h3>
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start gap-3">
          <button
            className={`text-[#999DA9] medium text-xl pl-2 ${
              view === "departamentos"
                ? "border-l-[3px] border-[#8a2e67] text-foreground"
                : ""
            }`}
            onClick={() => handleClick("departamentos")}
          >
            Departamentos
          </button>
          <button
            className={`text-[#999DA9] medium text-xl pl-2 ${
              view === "loteos"
                ? "border-l-[3px] border-[#8a2e67] text-foreground"
                : ""
            }`}
            onClick={() => handleClick("loteos")}
          >
            Loteos
          </button>
          <button
            className={`text-[#999DA9] medium text-xl pl-2 ${
              view === "oficinas"
                ? "border-l-[3px] border-[#8a2e67] text-foreground"
                : ""
            }`}
            onClick={() => handleClick("oficinas")}
          >
            Oficinas
          </button>
        </div>
        <div className="flex flex-col gap-10">
          {renderedView}
          <div className="flex justify-between items-center gap-20 w-full">
            <button
              className="flex justify-center items-center w-[200px] py-2 bg-foreground text-background text-lg rounded-md hover:bg-[#8a2e67] hover:text-background hover:scale-110 transition-all duration-150 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-foreground"
              onClick={handleVolverClick}
              disabled={
                view === "departamentos" || view === "oficinas" ? true : false
              }
            >
              <BiLeftArrowAlt className="mr-6 w-6 h-6" /> Volver
            </button>
            <div className="flex gap-3">
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
              className="flex justify-center items-center w-[200px] py-2 bg-foreground text-background text-lg rounded-md hover:bg-[#8a2e67] hover:text-background hover:scale-110 transition-all duration-150 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-foreground"
              onClick={handlePasarClick}
              disabled={
                view === "departamentos" || view === "oficinas" ? true : false
              }
            >
              Pasar
              <BiRightArrowAlt className="ml-6 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
