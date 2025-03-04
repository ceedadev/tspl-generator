import { MeasurementSystem } from "../types";

/**
 * Generate SIZE command for setting label size
 * @param width - Width of the label
 * @param height - Height of the label
 * @param measurementSystem - Measurement system (ENGLISH for inches, METRIC for mm)
 * @returns SIZE command string
 */
export function size(
  width: number,
  height: number,
  measurementSystem: MeasurementSystem = MeasurementSystem.ENGLISH
): string {
  const unit = measurementSystem === MeasurementSystem.ENGLISH ? "in" : "mm";
  return `SIZE ${width} ${unit}, ${height} ${unit}\n`;
}
