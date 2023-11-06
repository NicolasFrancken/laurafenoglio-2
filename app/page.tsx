import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <main className="min-h-[80vh] background1 px-20 flex items-center relative">
        <div className="flex flex-col">
          <h1 className="text-7xl ">
            Emprendimientos <br /> Inmobiliarios
          </h1>
          <h3 className="text-4xl ">En la Patagonia Argentina</h3>
        </div>
        <Link
          href={"#contacto"}
          className="absolute bottom-0 right-0 m-8 px-8 py-2 bg-background text-foreground text-lg w-fit rounded-md "
        >
          Quiero saber más
        </Link>
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
      <section
        id="nosotros"
        className=" p-20 pt-24 pr-0 flex items-center justify-center"
      >
        <div className="background2 w-[700px] h-[500px]"></div>
        <div className="flex flex-col w-[450px] p-10 bg-foreground text-background gap-5 relative right-20 shadow-2xl">
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
      <section
        id="servicios"
        className="flex flex-col justify-center items-center bg-[#F6F8F7] py-20 pt-24 px-56 gap-10"
      >
        <h3 className="text-4xl">SERVICIOS</h3>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center gap-20">
            <div className="bg-white w-[276px] py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
              <Image
                src={"/logos/1.jpeg"}
                alt="Edificio"
                width={70}
                height={70}
                className="mb-1"
              />
              <div className="bg-black w-[70px] h-[2px]"></div>
              <h5 className="text-xl text-center">Contrucciones</h5>
            </div>
            <div className="bg-black w-[276px] py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
              <Image
                src={"/logos/2.png"}
                alt="Edificio"
                width={70}
                height={70}
                className="mb-1"
              />
              <div className="bg-white w-[70px] h-[2px]"></div>
              <h5 className="text-xl text-white text-center">
                Desarrollos Inmobiliarios
              </h5>
            </div>
            <div className="bg-white w-[276px] py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
              <Image
                src={"/logos/3.svg"}
                alt="Edificio"
                width={70}
                height={70}
                className="mb-1"
              />
              <div className="bg-black w-[70px] h-[2px]"></div>
              <h5 className="text-xl text-center">Consultoría</h5>
            </div>
          </div>
          <div className="flex justify-between items-center gap-20">
            <div className="bg-black w-[276px] py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
              <Image
                src={"/logos/4.svg"}
                alt="Edificio"
                width={70}
                height={70}
                className="mb-0"
              />
              <div className="bg-white w-[70px] h-[2px]"></div>
              <h5 className="text-xl text-white text-center">
                Comercialización
              </h5>
            </div>
            <div className="bg-white w-[276px] py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
              <Image
                src={"/logos/5.png"}
                alt="Edificio"
                width={70}
                height={70}
                className="mb-1"
              />
              <div className="bg-black w-[70px] h-[2px]"></div>
              <h5 className="text-xl text-center">Arquitectura</h5>
            </div>
            <div className="bg-black w-[276px] py-7 flex flex-col justify-between items-center gap-3 rounded-md shadow-sm">
              <Image
                src={"/logos/6.png"}
                alt="Edificio"
                width={70}
                height={70}
                className="mb-0"
              />
              <div className="bg-white w-[70px] h-[2px]"></div>
              <h5 className="text-xl text-white text-center">
                Loteos y Urbanizaciones
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className="background3 p-28 flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl text-background">
            Hacé tu consulta gratis con nosotros
          </h3>
          <p className="text-background text-xl">
            Solo una llamada +54 (294) 4421993
          </p>
        </div>
        <Link
          href={"#contacto"}
          className="px-8 py-2 bg-transparent text-background border-2 border-background text-xl w-fit rounded-md h-fit"
        >
          Consultá aquí
        </Link>
      </section>
      <section
        id="proyectos"
        className="min-h-screen px-28 py-20 flex flex-col gap-10"
      >
        <h3 className="text-4xl">PROYECTOS</h3>
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-start gap-3">
            <button className="text-foreground medium text-xl border-l-[3px] border-[#8a2e67] pl-2">
              Departamentos
            </button>
            <button className="text-[#999DA9] text-xl pl-[11px]">Loteos</button>
            <button className="text-[#999DA9] text-xl pl-[11px]">
              Oficinas
            </button>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-10">
            <div className="flex project1 w-[350px] h-[250px] shadow-2xl">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px]">
                <h6 className="text-xl">La Aguada</h6>
                <p>Departamentos - 2 unidades disponibles</p>
              </div>
            </div>
            <div className="flex project2 w-[350px] h-[250px] shadow-2xl">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px]">
                <h6 className="text-xl">Bustillo Uno</h6>
                <p>Departamentos - 5 unidades disponibles</p>
              </div>
            </div>
            <div className="flex project3 w-[350px] h-[250px] shadow-2xl">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px]">
                <h6 className="text-xl">Bella Vista</h6>
                <p>Departamentos - 1 unidades disponibles</p>
              </div>
            </div>
            <div className="flex project4 w-[350px] h-[250px] shadow-2xl">
              <div className="w-full bg-foreground self-end text-background px-5 p-[10px]">
                <h6 className="text-xl">Bariloche Center</h6>
                <p>Departamentos - 2 unidades disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contacto"
        className="bg-[#F6F8F7] py-10 pt-[107px]  flex justify-center items-center"
      >
        <div className="w-[500px] flex flex-col justify-center items-center gap-5">
          <h3 className="text-4xl text-center">¿En qué podemos ayudarte?</h3>
          <p className="text-xl text-center">
            Estamos preparados para trabajar en un proyecto de cualquier
            complejidad, ya sea comercial o residencial.
          </p>
          <div className="flex gap-3 w-full">
            <input
              className="w-full px-4 py-2 border-[1px] border-[#E0E3EB] rounded-md"
              placeholder="Nombre*"
            />
            <input
              className="w-full px-4 py-2 border-[1px] border-[#E0E3EB] rounded-md"
              placeholder="Mail*"
            />
          </div>
          <div className="w-full flex flex-col">
            <textarea
              className="w-full h-[200px] px-4 py-2 border-[1px] border-[#E0E3EB] rounded-md noresize"
              placeholder="Escribe tu consulta*"
            />
            <p className="text-red-700">* indica un campo obligatorio</p>
          </div>
          <button className="bg-foreground text-background text-lg px-20 py-2 rounded-md">
            Enviar
          </button>
        </div>
      </section>
      <footer className=" pt-5">
        <div className="px-20 pb-5 flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-lg">Dirección: Palacios 156 - 3° piso</p>
            <p className="text-lg">Teléfono: +54 (294) 4421993</p>
            <p className="text-lg">Email: laurafenoglio@gmail.com</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="text-lg">Redes Sociales</p>
            <div className="flex w-full justify-start">
              <BiLogoInstagramAlt className="w-7 h-7 mr-3" />
              <BiLogoFacebookCircle className="w-7 h-7 mr-3" />
              <BiLogoLinkedinSquare className="w-7 h-7" />
            </div>
          </div>
        </div>
        <div className="px-20 py-4 bg-[#230018] flex justify-center items-center">
          <p className="text-background">
            ©2023 Laura Fenoglio. Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
