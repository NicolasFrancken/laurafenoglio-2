import Image from "next/image";
import Navbar from "../client/components/shared/Navbar";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import Projects from "../client/components/main/Projects";

export default function Home() {
  return (
    <div id="home" className="flex justify-center">
      <div className="w-full max-w-[2000px]">
        <Navbar />
        <main className="min-h-[80vh] background1 px-5 lg:px-20 flex items-center justify-center md:justify-start relative">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center md:text-start">
              Emprendimientos <br /> Inmobiliarios
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center md:text-start">
              En la Patagonia Argentina
            </h3>
          </div>
          <Link
            href={"#contacto"}
            className="absolute bottom-0 w-max right-[50%] md:right-0 translate-x-1/2 md:translate-x-0 md:m-20 mb-8 px-8 py-2 bg-background text-foreground text-base md:text-lg rounded-md hover:bg-[#8a2e67] hover:text-background hover:scale-110 transition-all duration-150"
          >
            Quiero saber más
          </Link>
          <Link
            className="fixed w-fit h-fit bg-transparent min-w-fit gap-unit-0 m-2 lg:m-5 p-1 lg:p-1 bottom-0 right-0 z-50 hover:scale-105 transition-all duration-150"
            href="https://wa.me/+5492944584052?text=Hola,%20¡tengo%20una%20consulta!"
          >
            <Image
              src={"/images/WhatsApp.webp"}
              alt="WhatsApp"
              width={70}
              height={70}
              className="flex w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
            />
          </Link>
        </main>
        <section className="w-full flex flex-col justify-center items-center px-5 py-14 gap-5 md:gap-10 ">
          <h3 className="text-2xl md:text-3xl lg:text-4xl">
            Acerca de Nosotros
          </h3>
          <div className="flex flex-col sm:flex-row justify-center lg:max-w-[1050px] gap-5 lg:gap-10">
            <div className="flex flex-col border-[#6B6D74] border-2 sm:w-[200px] lg:w-[300px] p-5 pb-10 h-fit gap-5">
              <h4 className="text-lg md:text-xl">Visión</h4>
              <p className="text-sm md:text-base">
                Nuestra marca es reconocida en la región por nuestra calidad de
                diseño, construcción y constante innovación.
              </p>
            </div>
            <div className="flex flex-col border-[#6B6D74] border-2 sm:w-[200px] lg:w-[300px] p-5 pb-10 h-fit gap-5">
              <h4 className=" text-lg md:text-xl">Objetivo</h4>
              <p className="text-sm md:text-base">
                Nuestro principal objetivo es mejorar la calidad de vida de las
                comunidades en las que trabajamos mediante valores que guían
                todas nuestras acciones.
              </p>
            </div>
            <div className="flex flex-col border-[#6B6D74] border-2 sm:w-[200px] lg:w-[300px]  p-5 pb-10 h-fit gap-5">
              <h4 className=" text-lg md:text-xl">Valores</h4>
              <p className="text-sm md:text-base">
                Innovación, colaboración, responsabilidad social, excelencia.
              </p>
            </div>
          </div>
        </section>
        <section
          id="nosotros"
          className="w-full px-5 lg:px-40 py-20 pt-24 flex items-center justify-center"
        >
          <div className="relative lg:mr-[176px]">
            <img
              src="/images/bustillo-uno.webp"
              alt="Bustillo"
              className="flex background2 w-full lg:w-[700px] h-[500px] object-cover"
            />
            <div className="flex flex-col min-w-[250px] max-w-[250px] sm:min-w-[450px] sm:max-w-[450px] p-5 sm:p-10 bg-foreground text-background gap-5 absolute top-[50%] right-[50%] translate-x-[50%] lg:translate-x-0 lg:-translate-y-0 -translate-y-[50%] lg:-right-44 lg:top-[78px] shadow-2xl ">
              <h3 className="text-xl md:text-2xl lg:text-3xl">
                ¿POR QUÉ NOSOTROS?
              </h3>
              <p className="text-sm md:text-base">
                Nos esforzamos por alcanzar una visión de negocios que equilibre
                sustentabilidad y competitividad desarrollando loteos y
                urbanizaciones, proyectos residenciales, locales comerciales y
                oficinas. Para ello, integramos de manera armónica el desarrollo
                económico respetando las personas, los valores, la comunidad y
                el medio ambiente.
              </p>
              <Link
                href={"#contacto"}
                className="px-8 py-2 bg-background text-foreground text-base md:text-lg w-fit rounded-md hover:bg-[#8a2e67] hover:text-background hover:scale-110 transition-all duration-150"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </section>
        <section
          id="servicios"
          className="flex flex-col justify-center items-center bg-[#F6F8F7] py-20 pt-24 px-5 gap-5 md:gap-10"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl">SERVICIOS</h3>
          <div className="flex flex-col gap-5 lg:gap-10 w-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-20">
              <div className="bg-white w-full md:w-[276px] py-2 md:py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
                <Image
                  src={"/logos/1.jpeg"}
                  alt="Edificio"
                  width={70}
                  height={70}
                  className="mb-1 w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                />
                <div className="bg-black w-[70px] h-[2px]"></div>
                <h5 className="text-base md:text-xl text-center">
                  Contrucciones
                </h5>
              </div>
              <div className="bg-black w-full md:w-[276px] py-2 md:py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
                <Image
                  src={"/logos/2.png"}
                  alt="Edificio"
                  width={70}
                  height={70}
                  className="mb-1 w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                />
                <div className="bg-white w-[70px] h-[2px]"></div>
                <h5 className="text-base md:text-xl text-white text-center">
                  Desarrollos Inmobiliarios
                </h5>
              </div>
              <div className="bg-white w-full md:w-[276px] py-2 md:py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
                <Image
                  src={"/logos/3.svg"}
                  alt="Edificio"
                  width={70}
                  height={70}
                  className="mb-1 w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                />
                <div className="bg-black w-[70px] h-[2px]"></div>
                <h5 className="text-base md:text-xl text-center">
                  Consultoría
                </h5>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-20 w-full">
              <div className="bg-black w-full md:w-[276px] py-2 md:py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
                <Image
                  src={"/logos/4.svg"}
                  alt="Edificio"
                  width={70}
                  height={70}
                  className="mb-0 w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                />
                <div className="bg-white w-[70px] h-[2px]"></div>
                <h5 className="text-base md:text-xl text-white text-center">
                  Comercialización
                </h5>
              </div>
              <div className="bg-white w-full md:w-[276px] py-2 md:py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
                <Image
                  src={"/logos/5.png"}
                  alt="Edificio"
                  width={70}
                  height={70}
                  className="mb-1 w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                />
                <div className="bg-black w-[70px] h-[2px]"></div>
                <h5 className="text-base md:text-xl text-center">
                  Arquitectura
                </h5>
              </div>
              <div className="bg-black w-full md:w-[276px] py-2  md:py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
                <Image
                  src={"/logos/6.png"}
                  alt="Edificio"
                  width={70}
                  height={70}
                  className="mb-0 w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                />
                <div className="bg-white w-[70px] h-[2px]"></div>
                <h5 className="text-base md:text-xl text-white text-center">
                  Loteos y Urbanizaciones
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="background3  p-5 md:p-10 lg:p-28 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
          <div className="flex flex-col gap-1  md:gap-3">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-background text-center md:text-start leading-none">
              Hacé tu consulta gratis <br className="inline sm:hidden" />
              con nosotros
            </h3>
            <p className="text-background text-sm md:text-base lg:text-lg text-center md:text-start">
              Solo una llamada +54 (294) 4421993
            </p>
          </div>
          <Link
            href={"#contacto"}
            className="px-[30px] py-[6px] bg-transparent text-background border-2 border-background text-base md:text-lg rounded-md h-fit hover:bg-background hover:text-foreground hover:scale-110 transition-all duration-150 w-max"
          >
            Consultá aquí
          </Link>
        </section>
        <Projects />
        <section
          id="contacto"
          className="bg-[#F6F8F7] py-10 px-5 pt-[107px] flex justify-center items-center "
        >
          <div className="w-[500px] flex flex-col justify-center items-center gap-3 md:gap-5">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-center">
              ¿En qué podemos ayudarte?
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-center">
              Estamos preparados para trabajar en un proyecto de cualquier
              complejidad, ya sea comercial o residencial.
            </p>
            <div className="flex gap-1 md:gap-3 w-full">
              <input
                className="w-full px-4 py-2 border-[1px] border-[#E0E3EB] rounded-md outline-[#8a2e67] text-sm md:text-base"
                placeholder="Nombre *"
              />
              <input
                className="w-full px-4 py-2 border-[1px] border-[#E0E3EB] rounded-md outline-[#8a2e67] text-sm md:text-base"
                placeholder="Mail *"
              />
            </div>
            <div className="w-full flex flex-col">
              <textarea
                className="w-full h-[150px] md:h-[200px] px-4 py-2 border-[1px] border-[#E0E3EB] rounded-md noresize outline-[#8a2e67] text-sm md:text-base"
                placeholder="Escribe tu consulta *"
              />
              <p className="text-red-700 text-xs md:text-sm">
                * indica un campo obligatorio
              </p>
            </div>
            <button className="bg-foreground text-background text-base md:text-lg px-8 py-2 rounded-md hover:bg-[#8a2e67] hover:scale-110 transition-all duration-150">
              Enviar
            </button>
          </div>
        </section>
        <footer className="pt-5">
          <div className="px-5 lg:px-20 pb-5 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-col gap-0 sm:gap-2 text-center sm:text-start">
              <p className="text-xs md:text-lg">
                Dirección:{" "}
                <a
                  className="hover:opacity-80 transition-opacity duration-150"
                  href="https://maps.app.goo.gl/m8wMoKZNjqVhXtsK8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Palacios 156 - 3° A
                </a>
              </p>
              <p className="text-xs md:text-lg">
                Teléfono:{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+542944421993"
                  className="hover:opacity-80 transition-opacity duration-150"
                >
                  +54 (294) 4421993
                </a>
              </p>
              <p className="text-xs md:text-lg">
                Email:{" "}
                <a
                  className="hover:opacity-80 transition-opacity duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:secretaria@laurafenoglio.com"
                >
                  secretaria@laurafenoglio.com
                </a>
              </p>
            </div>
            <div className="flex flex-col justify-center  items-center sm:items-start gap-0 sm:gap-2 ">
              <p className="text-xs md:text-lg text-center sm:text-start">
                Redes Sociales
              </p>
              <div className="flex w-full justify-start">
                <a
                  className="hover:opacity-80 transition-opacity duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.instagram.com/laura_fenoglio_emprendimientos"
                  }
                >
                  <BiLogoInstagramAlt className="w-5 h-5 md:w-7 md:h-7 mr-3 " />
                </a>
                <a
                  className="hover:opacity-80 transition-opacity duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.facebook.com/laurafenoglioemprendimientos/"
                  }
                >
                  <BiLogoFacebookCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" />
                </a>
                <a
                  className="hover:opacity-80 transition-opacity duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.linkedin.com/in/laura-fenoglio-7974a264/"}
                >
                  <BiLogoLinkedinSquare className="w-5 h-5 md:w-7 md:h-7" />
                </a>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-20 py-4 bg-[#230018] flex justify-center items-center">
            <p className="text-background text-xs md:text-sm text-center">
              ©2023 Laura Fenoglio. Todos los derechos reservados
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
