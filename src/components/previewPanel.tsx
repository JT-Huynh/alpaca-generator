import Image from "next/image";
import { ACCESSORIZE_PART } from "~/constants/controlPanel";

export default function PreviewPanel({
  accessorizeStyle,
}: {
  accessorizeStyle: Record<string, string>;
}) {
  return (
    <div className="relative w-4/12 flex-initial transition-all">
      <Image
        className="absolute left-0 top-0 h-full w-full"
        src={`/alpaca/backgrounds/${
          accessorizeStyle[ACCESSORIZE_PART.BACKGROUND]
        }.png`}
        width={570}
        height={570}
        alt="preview image"
      />
      <Image
        className="absolute bottom-0 left-0"
        src={`/alpaca/ears/${accessorizeStyle[ACCESSORIZE_PART.EARS]}.png`}
        width={570}
        height={570}
        alt="preview image"
      />
      <Image
        className="absolute bottom-0 left-0"
        src={`/alpaca/neck/${accessorizeStyle[ACCESSORIZE_PART.NECK]}.png`}
        width={570}
        height={570}
        alt="preview image"
      />
      <Image
        className="absolute bottom-0 left-0"
        src="/alpaca/nose.png"
        width={570}
        height={570}
        alt="preview image"
      />
      <Image
        className="absolute bottom-0 left-0"
        src={`/alpaca/mouth/${accessorizeStyle[ACCESSORIZE_PART.MOUTH]}.png`}
        width={570}
        height={570}
        alt="preview image"
      />
      <Image
        className="absolute bottom-0 left-0"
        src={`/alpaca/eyes/${accessorizeStyle[ACCESSORIZE_PART.EYES]}.png`}
        width={570}
        height={570}
        alt="preview image"
      />
      <Image
        className="absolute right-5 top-0"
        src={`/alpaca/hair/${accessorizeStyle[ACCESSORIZE_PART.HAIR]}.png`}
        width={570}
        height={570}
        alt="preview image"
      />
      <Image
        className="absolute right-5 top-3"
        src={`/alpaca/accessories/${
          accessorizeStyle[ACCESSORIZE_PART.ASSESSORIES]
        }.png`}
        width={500}
        height={500}
        alt="preview image"
      />
      <Image
        className="absolute bottom-0 left-0"
        src={`/alpaca/leg/${accessorizeStyle[ACCESSORIZE_PART.LEG]}.png`}
        width={570}
        height={570}
        alt="preview image"
      />
    </div>
  );
}
