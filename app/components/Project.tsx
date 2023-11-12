interface ProyectProps {
  customClasses?: string;
  title: string;
  description: string;
  background: string;
}

export default function Project({
  customClasses,
  title,
  description,
  background,
}: ProyectProps) {
  return (
    <div
      className={`${background} flex w-full h-[300px] xl:w-[350px] xl:h-[250px] shadow-2xl hover:opacity-80 hover:-translate-y-1 transition-all duration-150 hover:cursor-pointer rounded-md`}
    >
      <div className="w-full bg-foreground self-end text-background px-5 p-[10px] rounded-b-md">
        <h6 className="text-base md:text-xl">{title}</h6>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}
