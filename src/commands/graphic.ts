/**
 * Generate BOX command for drawing rectangles
 * @param x - X coordinate of top-left corner
 * @param y - Y coordinate of top-left corner
 * @param xEnd - X coordinate of bottom-right corner
 * @param yEnd - Y coordinate of bottom-right corner
 * @param thickness - Line thickness
 * @returns BOX command string
 */
export function box(
  x: number,
  y: number,
  xEnd: number,
  yEnd: number,
  thickness: number = 1
): string {
  return `BOX ${x},${y},${xEnd},${yEnd},${thickness}\n`;
}

/**
 * Generate LINE command for drawing lines
 * @param x - X coordinate of start point
 * @param y - Y coordinate of start point
 * @param xEnd - X coordinate of end point
 * @param yEnd - Y coordinate of end point
 * @param thickness - Line thickness
 * @returns LINE command string
 */
export function line(
  x: number,
  y: number,
  xEnd: number,
  yEnd: number,
  thickness: number = 1
): string {
  return `LINE ${x},${y},${xEnd},${yEnd},${thickness}\n`;
}

/**
 * Generate CIRCLE command for drawing circles
 * @param x - X coordinate of center
 * @param y - Y coordinate of center
 * @param diameter - Diameter of circle
 * @param thickness - Line thickness
 * @returns CIRCLE command string
 */
export function circle(
  x: number,
  y: number,
  diameter: number,
  thickness: number = 1
): string {
  return `CIRCLE ${x},${y},${diameter},${thickness}\n`;
}

/**
 * Generate ELLIPSE command for drawing ellipses
 * @param x - X coordinate of center
 * @param y - Y coordinate of center
 * @param width - Width of ellipse
 * @param height - Height of ellipse
 * @param thickness - Line thickness
 * @returns ELLIPSE command string
 */
export function ellipse(
  x: number,
  y: number,
  width: number,
  height: number,
  thickness: number = 1
): string {
  return `ELLIPSE ${x},${y},${width},${height},${thickness}\n`;
}
