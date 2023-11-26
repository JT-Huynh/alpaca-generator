import {
  type ACCESSORIZE_PART,
  ACCESSORIZE_PART_ATTRIBUTES,
  STYLE_TITLE,
} from "~/constants/controlPanel";
import Button from "./button";

export default function StylePanel({
  accessorizePart,
}: {
  accessorizePart: ACCESSORIZE_PART;
}) {
  const attributes = ACCESSORIZE_PART_ATTRIBUTES[accessorizePart];

  return (
    <div>
      <h2 className="pb-5 text-base font-bold text-black">{STYLE_TITLE}</h2>
      <div className="grid grid-cols-3 gap-2 transition-all">
        {attributes.map((style: string) => (
          <Button key={style} name={style} value={style} />
        ))}
      </div>
    </div>
  );
}
