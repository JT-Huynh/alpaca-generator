import Head from "next/head";
import { useState } from "react";
import FunctionButton from "~/components/functionButton";
import Panel from "~/components/panel";
import PreviewPanel from "~/components/previewPanel";
import {
  type ACCESSORIZE_PART,
  PART_DEFAULT_STYLE,
} from "~/constants/controlPanel";

export default function Home() {
  const [style, setStyle] = useState(PART_DEFAULT_STYLE);

  function selectAttributeStyle(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget, style);
  }

  return (
    <>
      <Head>
        <title>Alpaca Image Generator</title>
        <meta name="description" content="Generate alpaca image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-w-screen flex min-h-screen justify-center bg-zinc-100">
        <div className="flex w-10/12 flex-col justify-start gap-12 py-20">
          <h1 className="ml-3 text-5xl font-extrabold uppercase tracking-widest text-slate-900">
            alpaca generator
          </h1>
          <div className="h-128 flex gap-48">
            <PreviewPanel accessorizeStyle={style} />
            <Panel
              accessorizeStyle={style}
              styleChange={selectAttributeStyle}
            />
          </div>

          <div className="flex max-w-xl justify-between">
            <FunctionButton
              name="random"
              icon={{ name: "random", alt: "random button" }}
            />
            <FunctionButton
              name="download"
              icon={{ name: "download", alt: "download button" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
