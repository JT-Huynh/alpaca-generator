import Image from "next/image";

export default function PreviewPanel() {
  return (
    <div>
      <Image
        className="min-h-fit rounded"
        src="/alpaca/backgrounds/darkblue50.png"
        width={570}
        height={570}
        alt="preview image"
      />
    </div>
  );
}
