export default function Button({ name }: { name: string }) {
  return (
    <button
      type="button"
      className="test-base min-w-fit rounded-3xl border border-slate-400 px-10 py-2.5 text-center capitalize tracking-widest text-slate-400 hover:border-blue-800 hover:bg-blue-800 hover:text-zinc-100"
    >
      {name}
    </button>
  );
}
