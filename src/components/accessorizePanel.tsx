import { ACCESSORIZE_TITLE, ACCESSORIZE_PART } from "~/constants/controlPanel";
import Button from "./button";

export default function AccessorizePanel({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div>
      <h2 className="pb-5 text-base font-bold text-black">
        {ACCESSORIZE_TITLE}
      </h2>
      <div className="flex flex-wrap gap-2">
        {Object.values(ACCESSORIZE_PART).map((part: string) => (
          <Button key={part} name={part} value={part} onClick={onClick} />
        ))}
      </div>
    </div>
  );
}
