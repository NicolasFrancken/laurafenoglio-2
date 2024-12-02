"use client";

import ProjectCarrousel from "@/src/client/components/project/ProjectCarrousel";
import Navbar from "@/src/client/components/shared/Navbar";
import { PROJECTS } from "@/src/constants/proyects.constants";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Project({ params }: { params: any }) {
  const project = PROJECTS.find(
    (project) => project.id === Number(params.projectId)
  );

  return (
    <div className="w-full max-w-[2000px]">
      <Navbar />
      <main className="min-h-[80vh] flex flex-col w-full items-center p-4 pt-28">
        <div className="flex flex-col gap-4 md:gap-8 max-w-5xl w-full">
          <div className="w-fit flex gap-2 justify-center items-center ">
            <Link href={"/#proyectos"}>
              <FaArrowLeft className="stroke-primary" />
            </Link>
            <label className="text-xs md:text-sm ">{project?.title}</label>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="w-full md:w-3/5  ">
              <ProjectCarrousel slides={project?.imageUrls!} />
            </div>
            <div className="w-full md:w-2/5 flex flex-col gap-4 md:gap-12">
              <h1 className="text-2xl md:text-3xl font-medium md:text-balance">
                {project?.title}
              </h1>
              <div className="flex flex-col gap-1 md:gap-4">
                <h2 className="text-lg md:text-xl font-medium">Descripción</h2>
                <p className="text-neutral-600">{project?.longDescription}</p>
              </div>

              <Link
                href={`https://wa.me/+5492944584052?text=¡Me%20gustaría%20recibir%20más%20info%20sobre%20${project?.title
                  .split(" ")
                  .join("%20")}!`}
                className="text-center w-full px-4 py-2 bg-[#8a2e67] text-background text-base md:text-lg rounded-md hover:bg-[#8a2e67]/75 hover:text-background transition-all duration-150 mt-4"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
