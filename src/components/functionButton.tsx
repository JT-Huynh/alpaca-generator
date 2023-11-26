import Image from "next/image";

export default function FunctionButton({
  name,
  icon,
}: {
  name: string;
  icon: { name: string; alt: string };
}) {
  return (
    <button
      className="flex items-center justify-center gap-2.5 rounded-lg bg-white px-20 py-2.5 shadow-md transition-all hover:-translate-y-2 hover:border hover:border-blue-400 focus:shadow-blue-400 focus:outline-none"
      type="button"
    >
      <Image
        src={`/icons/${icon.name}.png`}
        width={30}
        height={30}
        alt={icon.alt}
      />
      {name}
    </button>
  );
}
