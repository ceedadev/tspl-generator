/**
 * Measurement system options
 */
export enum MeasurementSystem {
  ENGLISH = "ENGLISH",
  METRIC = "METRIC",
}

/**
 * Font options for TSPL
 */
export enum Font {
  FONT_1 = "1",
  FONT_2 = "2",
  FONT_3 = "3",
  // Add more fonts as needed
}

/**
 * Rotation options
 */
export enum Rotation {
  NO_ROTATION = 0,
  ROTATE_90 = 90,
  ROTATE_180 = 180,
  ROTATE_270 = 270,
}

/**
 * Barcode types supported by TSPL
 */
export enum BarcodeType {
  CODE39 = "39",
  CODE128 = "128",
  EAN8 = "8",
  EAN13 = "13",
  QRCODE = "QRCODE",
  // Add more as needed
}

/**
 * Label configuration options
 */
export interface LabelConfig {
  width: number;
  height: number;
  speed?: number;
  density?: number;
  gap?: number;
  gapOffset?: number;
  measurementSystem?: MeasurementSystem;
}

/**
 * Text options
 */
export interface TextOptions {
  x: number;
  y: number;
  font: Font | string;
  rotation?: Rotation;
  xMultiplier?: number;
  yMultiplier?: number;
  text: string;
}
