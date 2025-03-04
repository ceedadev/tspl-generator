import { TSPLPrinter, MeasurementSystem, Font, Rotation } from "../src";

// Create a new printer instance with English measurements
const printer = new TSPLPrinter(MeasurementSystem.ENGLISH);

// Initialize with label size and settings
printer.initialize({
  width: 4,
  height: 3,
  speed: 5,
  density: 10,
  gap: 0.125,
});

// Add a box border
printer.addBox(0.2, 0.2, 3.8, 2.8, 2);

// Add company logo placeholder
printer.addBox(0.3, 0.3, 1.3, 0.8, 1);
printer.addText({
  x: 0.5,
  y: 0.5,
  font: Font.FONT_2,
  text: "COMPANY LOGO",
});

// Add title
printer.addText({
  x: 1.5,
  y: 0.4,
  font: Font.FONT_3,
  xMultiplier: 2,
  yMultiplier: 2,
  text: "SHIPPING LABEL",
});

// Add shipping information
printer.addTextBlock(
  0.3,
  1.0,
  2.0,
  1.0,
  Font.FONT_2,
  "SHIP TO:\nJohn Doe\n123 Main Street\nAnytown, CA 12345\nUSA\n\nORDER: #A12345",
  Rotation.NO_ROTATION,
  1,
  1,
  2,
  "L"
);

// Add QR code with tracking number
printer.addQRCode(2.5, 1.5, "TN123456789US", "H", 8, "A", Rotation.NO_ROTATION);

// Add some decorative elements
printer.addLine(0.2, 2.3, 3.8, 2.3, 1);
printer.addCircle(0.5, 2.5, 0.2, 1);
printer.addCircle(3.5, 2.5, 0.2, 1);

// Add footer text
printer.addText({
  x: 1.0,
  y: 2.5,
  font: Font.FONT_1,
  text: "Thank you for your order!",
});

// Print 1 copy
printer.print(1);

// Get the generated TSPL code
const tsplCode = printer.getBuffer();
console.log(tsplCode);

// Expected output:
/*
SIZE 4 in, 3 in
SPEED 5
DENSITY 10
GAP 0.125 in, 0 in
CLS
BOX 0.2,0.2,3.8,2.8,2
BOX 0.3,0.3,1.3,0.8,1
TEXT 0.5,0.5,"2",0,1,1,"COMPANY LOGO"
TEXT 1.5,0.4,"3",0,2,2,"SHIPPING LABEL"
BLOCK 0.3,1.0,2.0,1.0,"2",0,1,1,2,L,"SHIP TO:
John Doe
123 Main Street
Anytown, CA 12345
USA

ORDER: #A12345"
QRCODE 2.5,1.5,H,8,A,0,"TN123456789US"
LINE 0.2,2.3,3.8,2.3,1
CIRCLE 0.5,2.5,0.2,1
CIRCLE 3.5,2.5,0.2,1
TEXT 1.0,2.5,"1",0,1,1,"Thank you for your order!"
PRINT 1
*/
