import { MeasurementSystem } from "../types";

/**
 * Generate SPEED command for setting print speed
 * @param speed - Print speed (1-12)
 * @returns SPEED command string
 */
export function speed(speed: number): string {
  return `SPEED ${speed}\n`;
}

/**
 * Generate DENSITY command for setting print density
 * @param density - Print density (0-15)
 * @returns DENSITY command string
 */
export function density(density: number): string {
  return `DENSITY ${density}\n`;
}

/**
 * Generate GAP command for setting gap between labels
 * @param gap - Gap distance
 * @param offset - Offset distance
 * @param measurementSystem - Measurement system (ENGLISH for inches, METRIC for mm)
 * @returns GAP command string
 */
export function gap(
  gap: number,
  offset: number = 0,
  measurementSystem: MeasurementSystem = MeasurementSystem.ENGLISH
): string {
  const unit = measurementSystem === MeasurementSystem.ENGLISH ? "in" : "mm";
  return `GAP ${gap} ${unit}, ${offset} ${unit}\n`;
}

/**
 * Generate CLS command to clear image buffer
 * @returns CLS command string
 */
export function cls(): string {
  return "CLS\n";
}

/**
 * Generate PRINT command to print labels
 * @param copies - Number of copies to print
 * @returns PRINT command string
 */
export function print(copies: number = 1): string {
  return `PRINT ${copies}\n`;
}
