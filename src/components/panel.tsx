import AccessorizePanel from "./accessorizePanel";
import StylePanel from "./stylePanel";
import { type ACCESSORIZE_PART } from "~/constants/controlPanel";

export default function Panel({
  accessorizeStyle,
  part,
  attributeChange,
  styleChange,
}: {
  accessorizeStyle: Record<ACCESSORIZE_PART, string>;
  part: ACCESSORIZE_PART;
  attributeChange: React.MouseEventHandler<HTMLButtonElement>;
  styleChange: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="flex flex-1 flex-col justify-start gap-10">
      <AccessorizePanel selectedPart={part} onClick={attributeChange} />
      <StylePanel
        accessorizePart={part}
        accessorizeStyle={accessorizeStyle}
        styleChange={styleChange}
      />
    </div>
  );
}
