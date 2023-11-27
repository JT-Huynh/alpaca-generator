import {
  type ACCESSORIZE_PART,
  ACCESSORIZE_PART_ATTRIBUTES,
  STYLE_TITLE,
} from "~/constants/controlPanel";
import Button from "./button";

export default function StylePanel({
  accessorizePart,
  accessorizeStyle,
  styleChange,
}: {
  accessorizePart: ACCESSORIZE_PART;
  accessorizeStyle: Record<ACCESSORIZE_PART, string>;
  styleChange: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const attributes = ACCESSORIZE_PART_ATTRIBUTES[accessorizePart];
  const selectStyle = accessorizeStyle[accessorizePart];

  return (
    <div>
      <h2 className="pb-5 text-base font-bold text-black">{STYLE_TITLE}</h2>
      <div className="grid grid-cols-3 gap-2 transition-all">
        {attributes.map((style: string) => {
          return (
            <Button
              key={style}
              name={style}
              value={style}
              isActive={style === selectStyle}
              onClick={styleChange}
            />
          );
        })}
      </div>
    </div>
  );
}
