import { type NextApiRequest, type NextApiResponse } from "next";
import sharp from "sharp";
import { PART_PATH, type ACCESSORIZE_PART } from "~/constants/controlPanel";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const styles = req.body as Record<ACCESSORIZE_PART, string> 
  const partLayer = Object.keys(PART_PATH) as ACCESSORIZE_PART[];

  const alpacaPath = `${process.cwd()}/public/alpaca`;
  const layers = partLayer.map((part: ACCESSORIZE_PART) => {
    const partPath = PART_PATH[part]
    const styleName = styles.hasOwnProperty(part) ? styles[part] : ''

    const styleFile = partPath !== PART_PATH.NOSE ? `/${styleName}.png` : '';
    const filePath =  `${alpacaPath}/${partPath}${styleFile}`
    return {input: filePath}
  }) 

  await sharp(layers[0]?.input)
    .composite(layers)
    .toFile(`${alpacaPath}/alpaca_avatar.png`);

  res.status(200).json({compose: 'done'})
}
