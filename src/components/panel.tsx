import AccessorizePanel from "./accessorizePanel";
import StylePanel from "./stylePanel";

export default function Panel() {
  return (
    <div className="flex flex-col justify-start gap-20">
      <AccessorizePanel />
      <StylePanel />
    </div>
  );
}
