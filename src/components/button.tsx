export default function Button({
  name,
  value,
  onClick,
}: {
  name: string;
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      value={value}
      type="button"
      onClick={onClick}
      className="min-w-fit rounded-3xl border border-blue-400 px-8 py-2.5 text-center text-base font-bold capitalize tracking-widest text-blue-400 transition-all hover:border-blue-600 hover:text-blue-600 active:bg-blue-600 active:text-zinc-100"
    >
      {name}
    </button>
  );
}
