import Image from "next/image";

export type ShowcaseCardProps = {
  img: { src: string; height: number; width: number };
  background: { src: string; height: number; width: number };
  text: string | React.ReactNode;
};

export default function ShowcaseCard({
  img,
  text,
  background,
}: ShowcaseCardProps) {
  return (
    <div className="group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-neutral-900/85 px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-light-primary/55 hover:shadow-[0_18px_44px_-30px_rgba(227,81,81,0.9)]">
      {background.src && (
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Image
            src={background.src}
            width={background.width}
            height={background.height}
            alt={"Background"}
            className="object-cover h-full w-full"
          />
        </div>
      )}
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        alt={"Showcase card"}
        className="relative z-20 h-16 w-auto"
      />
      <p className="relative z-20 text-sm font-semibold text-white">{text}</p>
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-white/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
