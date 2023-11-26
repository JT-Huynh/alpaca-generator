export default function Button({ name }: { name: string }) {
  return (
    <button
      type="button"
      className="min-w-fit rounded-3xl border border-blue-400 px-8 py-2.5 text-center text-base font-bold capitalize tracking-widest text-blue-400 transition-all hover:border-blue-600 hover:text-blue-600 focus:bg-blue-600 focus:text-zinc-100"
    >
      {name}
    </button>
  );
}
