export const ACCESSORIZE_TITLE = "ACCESSORIZE THE ALPACA'S";
export const STYLE_TITLE = "STYLE";
export enum ACCESSORIZE_PART {
  HAIR = "Hair",
  EARS = "Ears",
  EYES = "Eyes",
  MOUTH = "Mouth",
  NECK = "Neck",
  LEG = "Leg",
  ASSESSORIES = "Assessories",
  BACKGROUND = "Background",
}

const ACCESSORIES = ["earings", "flower", "glasses", "headphone"];
const EARS = ["default", "tilt-backward", "tilt-forward"];
const EYES = ["default", "angry", "naughty", "panda", "smart", "star"];
const HAIR = ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"];
const LEG = [
  "default",
  "bubble-tea",
  "cookie",
  "game-console",
  "tilt-backward",
  "tilt-forward",
];
const MOUTH = ["default", "astonished", "eating", "laugh", "tongue"];
const NECK = ["default", "bend-backward", "bend-forward", "thick"];
const BACKGROUND = [
  "blue50",
  "blue60",
  "blue70",

  "darkblue30",
  "darkblue50",
  "darkblue70",

  "green50",
  "green60",
  "green70",

  "grey40",
  "grey70",
  "grey80",

  "red50",
  "red60",
  "red70",

  "yellow50",
  "yellow60",
  "yellow70",
];

export const ACCESSORIZE_PART_ATTRIBUTES = {
  [ACCESSORIZE_PART.HAIR]: HAIR,
  [ACCESSORIZE_PART.EARS]: EARS,
  [ACCESSORIZE_PART.EYES]: EYES,
  [ACCESSORIZE_PART.MOUTH]: MOUTH,
  [ACCESSORIZE_PART.NECK]: NECK,
  [ACCESSORIZE_PART.LEG]: LEG,
  [ACCESSORIZE_PART.ASSESSORIES]: ACCESSORIES,
  [ACCESSORIZE_PART.BACKGROUND]: BACKGROUND,
};

export const PART_DEFAULT_STYLE: Record<ACCESSORIZE_PART, string> = {
  [ACCESSORIZE_PART.BACKGROUND]: "blue50",
  [ACCESSORIZE_PART.NECK]: "default",
  [ACCESSORIZE_PART.EARS]: "default",
  [ACCESSORIZE_PART.EYES]: "default",
  [ACCESSORIZE_PART.MOUTH]: "default",
  [ACCESSORIZE_PART.HAIR]: "default",
  [ACCESSORIZE_PART.LEG]: "default",
  [ACCESSORIZE_PART.ASSESSORIES]: "headphone",
};
