import Head from "next/head";
import Image from "next/image";
import {
  ACCESSORIZE_PART,
  ACCESSORIZE_TITLE,
  STYLE_TITLE,
} from "~/constants/controlPanel";

function Button({ name }: { name: string }) {
  return (
    <button
      type="button"
      className="test-base min-w-fit rounded-3xl border border-slate-400 px-10 py-2.5 text-center capitalize tracking-widest text-slate-400 hover:border-blue-800 hover:bg-blue-800 hover:text-zinc-100"
    >
      {name}
    </button>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpaca Image Generator</title>
        <meta name="description" content="Generate alpaca image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex h-screen w-screen justify-center bg-zinc-100 ">
        <div className="flex w-7/12 flex-col justify-start gap-10 py-20">
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
            <div className="flex flex-col justify-start gap-20">
              {/* accessorize control panel  */}
              <div>
                <h2 className="pb-5 text-base font-bold tracking-widest text-black">
                  {ACCESSORIZE_TITLE}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {Object.values(ACCESSORIZE_PART).map((part: string) => (
                    <Button key={part} name={part} />
                  ))}
                </div>
              </div>

              {/* style control panel  */}
              <div>
                <h2 className="pb-5 text-base font-bold tracking-widest text-black">
                  {STYLE_TITLE}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {Object.values(ACCESSORIZE_PART).map((part: string) => (
                    <Button key={part} name={part} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
