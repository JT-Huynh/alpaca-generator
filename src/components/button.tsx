export default function Button({ name }: { name: string }) {
  return (
    <button
      type="button"
      className="test-base min-w-fit rounded-3xl border border-blue-400 px-8 py-2.5 text-center font-bold capitalize tracking-widest text-blue-400 hover:border-blue-800 hover:text-blue-800 focus:bg-blue-800 focus:text-zinc-100"
    >
      {name}
    </button>
  );
}
