export default function Button({
  name,
  value,
  isActive = false,
  onClick,
}: {
  name: string;
  value: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      value={value}
      type="button"
      onClick={onClick}
      className={`min-w-fit rounded-3xl border border-blue-400 px-8 py-2.5 text-center text-sm font-bold capitalize tracking-widest shadow transition-all focus:shadow-blue-600 focus:outline-none ${
        isActive
          ? "bg-blue-600 text-zinc-100"
          : "text-blue-400 hover:border-blue-600 hover:text-blue-600 active:bg-blue-600 active:text-zinc-100 "
      }`}
    >
      {name}
    </button>
  );
}
