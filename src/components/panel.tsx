import { useState } from "react";
import AccessorizePanel from "./accessorizePanel";
import StylePanel from "./stylePanel";
import { ACCESSORIZE_PART } from "~/constants/controlPanel";

export default function Panel() {
  const [part, setPart] = useState(ACCESSORIZE_PART.HAIR);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const clickValue = event.currentTarget.value;

    setPart(clickValue as ACCESSORIZE_PART);
  }

  return (
    <div className="flex flex-col justify-start gap-20">
      <AccessorizePanel selectedPart={part} onClick={handleClick} />
      <StylePanel accessorizePart={part} />
    </div>
  );
}
