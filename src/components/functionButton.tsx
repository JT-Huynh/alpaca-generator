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
      className="flex items-center justify-center gap-2.5 rounded-lg bg-white p-2.5 px-10 shadow"
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
