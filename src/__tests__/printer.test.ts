import { TSPLPrinter, Font, BarcodeType } from "../";

describe("TSPLPrinter", () => {
  let printer: TSPLPrinter;

  beforeEach(() => {
    printer = new TSPLPrinter();
  });

  test("should initialize with default measurement system", () => {
    expect(printer).toBeDefined();
    expect(printer.getBuffer()).toBe("");
  });

  test("should initialize with label configuration", () => {
    printer.initialize({
      width: 4,
      height: 6,
      speed: 5,
      density: 8,
      gap: 0.125,
    });

    const expected =
      "SIZE 4 in, 6 in\nSPEED 5\nDENSITY 8\nGAP 0.125 in, 0 in\nCLS\n";
    expect(printer.getBuffer()).toBe(expected);
  });

  test("should add text to the label", () => {
    printer.initialize({
      width: 4,
      height: 3,
    });

    printer.addText({
      x: 100,
      y: 100,
      font: Font.FONT_1,
      text: "Hello World",
    });

    const expected =
      'SIZE 4 in, 3 in\nSPEED 3\nDENSITY 8\nGAP 3 in, 0 in\nCLS\nTEXT 100,100,"1",0,1,1,"Hello World"\n';
    expect(printer.getBuffer()).toBe(expected);
  });

  test("should add a barcode to the label", () => {
    printer.initialize({
      width: 4,
      height: 3,
    });

    printer.addBarcode(100, 100, BarcodeType.CODE128, 50, "12345678");

    const expected =
      'SIZE 4 in, 3 in\nSPEED 3\nDENSITY 8\nGAP 3 in, 0 in\nCLS\nBARCODE 100,100,"128",50,1,0,2,4,"12345678"\n';
    expect(printer.getBuffer()).toBe(expected);
  });

  test("should add a QR code to the label", () => {
    printer.initialize({
      width: 4,
      height: 3,
    });

    printer.addQRCode(100, 100, "QR Code Data");

    const expected =
      'SIZE 4 in, 3 in\nSPEED 3\nDENSITY 8\nGAP 3 in, 0 in\nCLS\nQRCODE 100,100,M,6,A,0,"QR Code Data"\n';
    expect(printer.getBuffer()).toBe(expected);
  });

  test("should add graphics to the label", () => {
    printer.initialize({
      width: 4,
      height: 3,
    });

    printer.addBox(10, 10, 100, 100, 2);
    printer.addLine(10, 10, 100, 100, 1);
    printer.addCircle(50, 50, 30, 1);

    const expected =
      "SIZE 4 in, 3 in\nSPEED 3\nDENSITY 8\nGAP 3 in, 0 in\nCLS\nBOX 10,10,100,100,2\nLINE 10,10,100,100,1\nCIRCLE 50,50,30,1\n";
    expect(printer.getBuffer()).toBe(expected);
  });

  test("should print multiple copies", () => {
    printer.initialize({
      width: 4,
      height: 3,
    });

    printer.addText({
      x: 100,
      y: 100,
      font: Font.FONT_1,
      text: "Hello World",
    });

    printer.print(3);

    const expected =
      'SIZE 4 in, 3 in\nSPEED 3\nDENSITY 8\nGAP 3 in, 0 in\nCLS\nTEXT 100,100,"1",0,1,1,"Hello World"\nPRINT 3\n';
    expect(printer.getBuffer()).toBe(expected);
  });

  test("should reset the buffer", () => {
    printer.initialize({
      width: 4,
      height: 3,
    });

    printer.addText({
      x: 100,
      y: 100,
      font: Font.FONT_1,
      text: "Hello World",
    });

    printer.reset();
    expect(printer.getBuffer()).toBe("");
  });

  test("should clear the image buffer", () => {
    printer.initialize({
      width: 4,
      height: 3,
    });

    printer.addText({
      x: 100,
      y: 100,
      font: Font.FONT_1,
      text: "Hello World",
    });

    printer.clear();

    const expected =
      'SIZE 4 in, 3 in\nSPEED 3\nDENSITY 8\nGAP 3 in, 0 in\nCLS\nTEXT 100,100,"1",0,1,1,"Hello World"\nCLS\n';
    expect(printer.getBuffer()).toBe(expected);
  });
});
