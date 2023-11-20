import Head from "next/head";
import Image from "next/image";
import { getAlpacaComponent } from "~/utils/fileHandler";

function Button({ btnTxt }: { btnTxt: string }) {
  return (
    <button
      type="button"
      className="h-11 w-28 rounded-3xl border border-slate-400 p-2.5 tracking-widest text-slate-400"
    >
      {btnTxt}
    </button>
  );
}

export default function Home() {
  getAlpacaComponent();
  return (
    <>
      <Head>
        <title>Alpaca Image Generator</title>
        <meta name="description" content="Generate alpaca image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex h-screen w-screen flex-col justify-start gap-10 bg-zinc-100 px-48 py-20">
        <h1 className="font-sans text-5xl font-bold uppercase tracking-widest text-slate-900">
          alpaca generator
        </h1>
        <div className="flex gap-48">
          <Image
            src="/assets/alpaca/backgrounds/darkblue50.png"
            width={500}
            height={500}
            alt="preview image"
          />
          <Button btnTxt="Hair" />
        </div>
      </section>
    </>
  );
}
