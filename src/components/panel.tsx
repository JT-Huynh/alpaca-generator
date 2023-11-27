import { useState } from "react";
import AccessorizePanel from "./accessorizePanel";
import StylePanel from "./stylePanel";
import { ACCESSORIZE_PART } from "~/constants/controlPanel";

export default function Panel({
  accessorizeStyle,
  styleChange,
}: {
  accessorizeStyle: Record<ACCESSORIZE_PART, string>;
  styleChange: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const [part, setPart] = useState(ACCESSORIZE_PART.HAIR);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const clickValue = event.currentTarget.value;

    setPart(clickValue as ACCESSORIZE_PART);
  }

  return (
    <div className="flex flex-1 flex-col justify-start gap-10">
      <AccessorizePanel selectedPart={part} onClick={handleClick} />
      <StylePanel
        accessorizePart={part}
        accessorizeStyle={accessorizeStyle}
        styleChange={styleChange}
      />
    </div>
  );
}
