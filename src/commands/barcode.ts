import { BarcodeType, Rotation } from "../types";

/**
 * Generate BARCODE command for printing barcodes
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param barcodeType - Type of barcode
 * @param height - Height of barcode
 * @param readable - Human readable text (0: not readable, 1: readable)
 * @param rotation - Rotation angle (0, 90, 180, 270)
 * @param narrow - Narrow bar width
 * @param wide - Wide bar width
 * @param content - Barcode content
 * @returns BARCODE command string
 */
export function barcode(
  x: number,
  y: number,
  barcodeType: BarcodeType | string,
  height: number,
  readable: 0 | 1 = 1,
  rotation: Rotation = Rotation.NO_ROTATION,
  narrow: number = 2,
  wide: number = 4,
  content: string
): string {
  return `BARCODE ${x},${y},"${barcodeType}",${height},${readable},${rotation},${narrow},${wide},"${content}"\n`;
}

/**
 * Generate QRCODE command for printing QR codes
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param eccLevel - Error correction level (L, M, Q, H)
 * @param cellWidth - Cell width (1-10)
 * @param mode - Mode (A: Auto, M: Manual)
 * @param rotation - Rotation angle (0, 90, 180, 270)
 * @param content - QR code content
 * @returns QRCODE command string
 */
export function qrcode(
  x: number,
  y: number,
  eccLevel: "L" | "M" | "Q" | "H" = "M",
  cellWidth: number = 6,
  mode: "A" | "M" = "A",
  rotation: Rotation = Rotation.NO_ROTATION,
  content: string
): string {
  return `QRCODE ${x},${y},${eccLevel},${cellWidth},${mode},${rotation},"${content}"\n`;
}
