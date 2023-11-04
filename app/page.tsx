import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="min-h-[80vh] background1 px-20 flex items-center">
        <div className="flex flex-col">
          <h1 className="text-7xl ">
            Emprendimientos <br /> Inmobiliarios
          </h1>
          <h3 className="text-4xl ">En la Patagonia Argentina</h3>
        </div>
      </main>
      <section className="flex flex-col justify-center items-center px-48 py-14 gap-10">
        <h3 className="text-4xl">Acerca de Nosotros</h3>
        <div className="flex justify-between w-full">
          <div className="flex flex-col border-[#6B6D74] border-2 w-[300px] p-5 pb-10 h-fit gap-5">
            <h4 className=" text-xl">Visión</h4>
            <p className="text-base">
              Nuestra marca es reconocida en la región por nuestra calidad de
              diseño, construcción y constante innovación.
            </p>
          </div>
          <div className="flex flex-col border-[#6B6D74] border-2 w-[300px] p-5 pb-10 h-fit gap-5">
            <h4 className=" text-xl">Objetivo</h4>
            <p className="text-base">
              Nuestro principal objetivo es mejorar la calidad de vida de las
              comunidades en las que trabajamos mediante valores que guían todas
              nuestras acciones.
            </p>
          </div>
          <div className="flex flex-col border-[#6B6D74] border-2 w-[300px]  p-5 pb-10 h-fit gap-5">
            <h4 className=" text-xl">Valores</h4>
            <p className="text-base">
              Innovación, colaboración, responsabilidad social, excelencia.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen p-20 pr-0 flex items-center justify-center">
        <div className="background2 w-[700px] h-[500px]"></div>
        <div className="flex flex-col w-[450px] p-10 bg-foreground text-background gap-5 relative right-20">
          <h3 className="text-3xl">¿POR QUÉ NOSOTROS?</h3>
          <p>
            Nos esforzamos por alcanzar una visión de negocios que equilibre
            sustentabilidad y competitividad desarrollando loteos y
            urbanizaciones, proyectos residenciales, locales comerciales y
            oficinas. Para ello, integramos de manera armónica el desarrollo
            económico respetando las personas, los valores, la comunidad y el
            medio ambiente.
          </p>
          <Link
            href={"#contacto"}
            className="px-8 py-2 bg-background text-foreground text-lg w-fit rounded-md"
          >
            Contactanos
          </Link>
        </div>
      </section>
      <section className="flex flex-col bg-[#E0E3EB]">
        <h3>SERVICIOS</h3>
        <div></div>
      </section>
    </div>
  );
}
