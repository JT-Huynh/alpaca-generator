import Lottie from "lottie-react";
import confettiAnimation from "../../static/confetti.json";

export default function Confetti() {
  return (
    <Lottie
      className="absolute z-10 min-h-screen w-max transition-all"
      animationData={confettiAnimation}
    />
  );
}
