import {
  TSPLPrinter,
  MeasurementSystem,
  Font,
  BarcodeType,
  Rotation,
} from "../src";

// Create a new printer instance with metric measurements
const printer = new TSPLPrinter(MeasurementSystem.METRIC);

// Initialize with label size and settings
printer.initialize({
  width: 100,
  height: 60,
  speed: 4,
  density: 8,
  gap: 3,
});

// Add a box border
printer.addBox(5, 5, 95, 55, 2);

// Add a title
printer.addText({
  x: 10,
  y: 10,
  font: Font.FONT_3,
  xMultiplier: 2,
  yMultiplier: 2,
  text: "Product Label",
});

// Add product information
printer.addTextBlock(
  10,
  25,
  80,
  20,
  Font.FONT_2,
  "Product: Widget XYZ\nSKU: 12345\nMade in Taiwan",
  Rotation.NO_ROTATION,
  1,
  1,
  2,
  "L"
);

// Add a barcode
printer.addBarcode(25, 45, BarcodeType.CODE128, 10, "12345678", 1);

// Print 1 copy
printer.print(1);

// Get the generated TSPL code
const tsplCode = printer.getBuffer();
console.log(tsplCode);

// Expected output:
/*
SIZE 100 mm, 60 mm
SPEED 4
DENSITY 8
GAP 3 mm, 0 mm
CLS
BOX 5,5,95,55,2
TEXT 10,10,"3",0,2,2,"Product Label"
BLOCK 10,25,80,20,"2",0,1,1,2,L,"Product: Widget XYZ
SKU: 12345
Made in Taiwan"
BARCODE 25,45,"128",10,1,0,2,4,"12345678"
PRINT 1
*/
