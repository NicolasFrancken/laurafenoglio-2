import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-5 lg:px-20 py-3 fixed top-0 left-0 right-0 bg-background z-50">
      <Image
        src={"/images/logo.png"}
        alt="Laura Fenoglio Logo"
        width={200}
        height={50}
        className="w-[150px] md:w-[200px] md:h-[50px]"
      />
      <nav className="hidden md:flex gap-10 text-lg">
        <Link
          href={"#home"}
          className="hover:text-[#8a2e67] hover:transition-colors duration-150"
        >
          Home
        </Link>
        <Link
          href={"#nosotros"}
          className="hover:text-[#8a2e67] hover:transition-colors duration-150"
        >
          Nosotros
        </Link>
        <Link
          href={"#servicios"}
          className="hover:text-[#8a2e67] hover:transition-colors duration-150"
        >
          Servicios
        </Link>
        <Link
          href={"#proyectos"}
          className="hover:text-[#8a2e67] hover:transition-colors duration-150"
        >
          Proyectos
        </Link>
        <Link
          href={"#contacto"}
          className="hover:text-[#8a2e67] hover:transition-colors duration-150"
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
}
