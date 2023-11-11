import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpaca Image Generator</title>
        <meta name="description" content="Generate alpaca image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold uppercase tracking-wider text-blue-950">
          alpaca generator
        </h1>
        <div>
          <Image
            src="/assets/alpaca/backgrounds/blue50.png"
            width={500}
            height={500}
            alt="preview image"
          />
        </div>
      </main>
    </>
  );
}
