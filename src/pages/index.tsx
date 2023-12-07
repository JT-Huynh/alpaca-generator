import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Confetti from "~/components/confetti";
import FunctionButton from "~/components/functionButton";
import Panel from "~/components/panel";
import PreviewPanel from "~/components/previewPanel";
import {
  ACCESSORIZE_PART,
  ACCESSORIZE_PART_ATTRIBUTES,
  PART_DEFAULT_STYLE,
} from "~/constants/controlPanel";
import { env } from "~/env.mjs";

export default function Home() {
  const [style, setStyle] = useState(PART_DEFAULT_STYLE);
  const [part, setPart] = useState(ACCESSORIZE_PART.HAIR);
  const [showConfetti, setShowConfetti] = useState(false);

  function selectAtrributes(event: React.MouseEvent<HTMLButtonElement>) {
    const selectedPart = event.currentTarget.value;

    setPart(selectedPart as ACCESSORIZE_PART);
  }

  function selectAttributeStyle(event: React.MouseEvent<HTMLButtonElement>) {
    const selectedStyle = event.currentTarget.value;
    const newStyle = { ...style };
    newStyle[part] = selectedStyle;

    setStyle(newStyle);
  }

  function randomize() {
    const randomStyle: Record<string, string> = {};
    for (const [part, attributes] of Object.entries(
      ACCESSORIZE_PART_ATTRIBUTES,
    )) {
      const randomNumber = Math.floor(Math.random() * attributes.length);

      randomStyle[part] = attributes[randomNumber]!;
    }

    setStyle(randomStyle);
  }

  async function download() {
    try {
      const url = new URL(window.location.href);
      const result = await axios({
        method: "POST",
        url: `${url.toString()}/download`,
        data: {
          ...style,
        },
      });

      if (result.status === 200) {
        const link = document.createElement("a");
        link.download = "alpaca_avatar";
        link.href = "/alpaca/alpaca_avatar.png";
        link.click();
      }

      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      <Head>
        <title>Alpaca Image Generator</title>
        <meta name="description" content="Generate alpaca image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen min-w-full justify-center bg-zinc-100">
        <div className="flex w-10/12 flex-col justify-start gap-12 py-20">
          <h1 className="ml-3 text-5xl font-extrabold uppercase tracking-widest text-slate-900">
            alpaca generator
          </h1>
          <div className="flex h-128 gap-48">
            {showConfetti ? <Confetti /> : <></>}
            <PreviewPanel accessorizeStyle={style} />
            <Panel
              accessorizeStyle={style}
              part={part}
              attributeChange={selectAtrributes}
              styleChange={selectAttributeStyle}
            />
          </div>

          <div className="flex max-w-xl justify-between">
            <FunctionButton
              name="random"
              icon={{ name: "random", alt: "random button" }}
              handleClick={randomize}
            />
            <FunctionButton
              name="download"
              icon={{ name: "download", alt: "download button" }}
              handleClick={download}
            />
          </div>
        </div>
      </section>
    </>
  );
}
