/**
 * Generate BITMAP command for printing bitmap images
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param width - Width of bitmap in bytes
 * @param height - Height of bitmap in dots
 * @param mode - Mode (0: normal, 1: XOR)
 * @param bitmap - Bitmap data in hexadecimal format
 * @returns BITMAP command string
 */
export function bitmap(
  x: number,
  y: number,
  width: number,
  height: number,
  mode: 0 | 1 = 0,
  bitmap: string
): string {
  return `BITMAP ${x},${y},${width},${height},${mode},${bitmap}\n`;
}

/**
 * Generate PUTBMP command for printing BMP files
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param filename - BMP filename
 * @returns PUTBMP command string
 */
export function putbmp(x: number, y: number, filename: string): string {
  return `PUTBMP ${x},${y},"${filename}"\n`;
}

/**
 * Generate PUTPCX command for printing PCX files
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param filename - PCX filename
 * @returns PUTPCX command string
 */
export function putpcx(x: number, y: number, filename: string): string {
  return `PUTPCX ${x},${y},"${filename}"\n`;
}

/**
 * Generate DOWNLOAD command for downloading PCX files to printer memory
 * @param filename - PCX filename
 * @param destination - Destination name in printer memory
 * @returns DOWNLOAD command string
 */
export function download(filename: string, destination: string): string {
  return `DOWNLOAD "${filename}","${destination}"\n`;
}
