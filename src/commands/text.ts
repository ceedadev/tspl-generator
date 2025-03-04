import { Font, Rotation } from "../types";

/**
 * Generate TEXT command for printing text
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param font - Font name or number
 * @param rotation - Rotation angle (0, 90, 180, 270)
 * @param xMultiplier - Horizontal multiplier (1-10)
 * @param yMultiplier - Vertical multiplier (1-10)
 * @param text - Text content
 * @returns TEXT command string
 */
export function text(
  x: number,
  y: number,
  font: Font | string,
  rotation: Rotation = Rotation.NO_ROTATION,
  xMultiplier: number = 1,
  yMultiplier: number = 1,
  text: string
): string {
  return `TEXT ${x},${y},"${font}",${rotation},${xMultiplier},${yMultiplier},"${text}"\n`;
}

/**
 * Generate BLOCK command for printing text blocks
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param width - Width of the block
 * @param height - Height of the block
 * @param font - Font name or number
 * @param rotation - Rotation angle (0, 90, 180, 270)
 * @param xMultiplier - Horizontal multiplier (1-10)
 * @param yMultiplier - Vertical multiplier (1-10)
 * @param lineSpacing - Line spacing
 * @param alignment - Alignment (L: left, C: center, R: right, J: justified)
 * @param text - Text content
 * @returns BLOCK command string
 */
export function block(
  x: number,
  y: number,
  width: number,
  height: number,
  font: Font | string,
  rotation: Rotation = Rotation.NO_ROTATION,
  xMultiplier: number = 1,
  yMultiplier: number = 1,
  lineSpacing: number = 0,
  alignment: "L" | "C" | "R" | "J" = "L",
  text: string
): string {
  return `BLOCK ${x},${y},${width},${height},"${font}",${rotation},${xMultiplier},${yMultiplier},${lineSpacing},${alignment},"${text}"\n`;
}
