import {
  ACCESSORIZE_PART,
  ACCESSORIZE_PART_ATTRIBUTES,
  STYLE_TITLE,
} from "~/constants/controlPanel";
import Button from "./button";

export default function StylePanel() {
  const attributes = ACCESSORIZE_PART_ATTRIBUTES[ACCESSORIZE_PART.HAIR];

  return (
    <div>
      <h2 className="pb-5 text-base font-bold text-black">{STYLE_TITLE}</h2>
      <div className="flex flex-wrap gap-2">
        {attributes.map((style: string) => (
          <Button key={style} name={style} />
        ))}
      </div>
    </div>
  );
}
