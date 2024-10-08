import { Project as ProjectTypes } from "@/src/types";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }: { project: ProjectTypes }) {
  const { id, title, description, background, imageUrls } = project;
  return (
    <Link
      href={`/${title.split(" ").join("-")}/${id}`}
      className={`flex w-full h-[300px] xl:w-[350px] xl:h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md relative`}
    >
      <Image
        src={imageUrls[0]}
        alt={`Imagen del producto - ${title}`}
        width={1000}
        height={2000}
        className="object-cover w-full h-full self-center rounded-lg"
      />
      <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md absolute bottom-0 right-0 left-0">
        <h6 className="text-base md:text-xl">{title}</h6>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </Link>
  );
}
