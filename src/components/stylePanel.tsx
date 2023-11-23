import { ACCESSORIZE_PART, STYLE_TITLE } from "~/constants/controlPanel";
import Button from "./button";

export default function StylePanel() {
  return (
    <div>
      <h2 className="pb-5 text-base font-bold tracking-widest text-black">
        {STYLE_TITLE}
      </h2>
      <div className="flex flex-wrap gap-2">
        {Object.values(ACCESSORIZE_PART).map((part: string) => (
          <Button key={part} name={part} />
        ))}
      </div>
    </div>
  );
}
