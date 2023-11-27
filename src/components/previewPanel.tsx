import Image from "next/image";

export default function PreviewPanel() {
  return (
    <div className="relative h-96 w-96">
      <Image
        className="absolute left-0 top-0 h-96 w-96"
        src="/alpaca/backgrounds/darkblue50.png"
        width={570}
        height={570}
        alt="preview image"
      />
      <Image
        className="absolute"
        src="/alpaca/neck/default.png"
        width={570}
        height={570}
        alt="preview image"
      />
    </div>
  );
}
