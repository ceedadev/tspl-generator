import * as commands from "../commands";
import { MeasurementSystem, Font, Rotation, BarcodeType } from "../types";

describe("TSPL Commands", () => {
  describe("Basic Commands", () => {
    test("size command with English units", () => {
      const result = commands.size(4, 6, MeasurementSystem.ENGLISH);
      expect(result).toBe("SIZE 4 in, 6 in\n");
    });

    test("size command with Metric units", () => {
      const result = commands.size(100, 150, MeasurementSystem.METRIC);
      expect(result).toBe("SIZE 100 mm, 150 mm\n");
    });

    test("speed command", () => {
      const result = commands.speed(5);
      expect(result).toBe("SPEED 5\n");
    });

    test("density command", () => {
      const result = commands.density(8);
      expect(result).toBe("DENSITY 8\n");
    });

    test("gap command", () => {
      const result = commands.gap(3, 0, MeasurementSystem.METRIC);
      expect(result).toBe("GAP 3 mm, 0 mm\n");
    });

    test("cls command", () => {
      const result = commands.cls();
      expect(result).toBe("CLS\n");
    });

    test("print command", () => {
      const result = commands.print(2);
      expect(result).toBe("PRINT 2\n");
    });
  });

  describe("Text Commands", () => {
    test("text command", () => {
      const result = commands.text(
        100,
        200,
        Font.FONT_1,
        Rotation.NO_ROTATION,
        1,
        1,
        "Hello World"
      );
      expect(result).toBe('TEXT 100,200,"1",0,1,1,"Hello World"\n');
    });

    test("block command", () => {
      const result = commands.block(
        100,
        200,
        300,
        150,
        Font.FONT_2,
        Rotation.ROTATE_90,
        1,
        1,
        2,
        "C",
        "Multiline\nText"
      );
      expect(result).toBe(
        'BLOCK 100,200,300,150,"2",90,1,1,2,C,"Multiline\nText"\n'
      );
    });
  });

  describe("Barcode Commands", () => {
    test("barcode command", () => {
      const result = commands.barcode(
        100,
        200,
        BarcodeType.CODE128,
        50,
        1,
        Rotation.NO_ROTATION,
        2,
        4,
        "12345678"
      );
      expect(result).toBe('BARCODE 100,200,"128",50,1,0,2,4,"12345678"\n');
    });

    test("qrcode command", () => {
      const result = commands.qrcode(
        100,
        200,
        "H",
        6,
        "A",
        Rotation.NO_ROTATION,
        "QR Code Data"
      );
      expect(result).toBe('QRCODE 100,200,H,6,A,0,"QR Code Data"\n');
    });
  });

  describe("Graphic Commands", () => {
    test("box command", () => {
      const result = commands.box(100, 100, 300, 300, 2);
      expect(result).toBe("BOX 100,100,300,300,2\n");
    });

    test("line command", () => {
      const result = commands.line(100, 100, 300, 300, 1);
      expect(result).toBe("LINE 100,100,300,300,1\n");
    });

    test("circle command", () => {
      const result = commands.circle(200, 200, 100, 3);
      expect(result).toBe("CIRCLE 200,200,100,3\n");
    });

    test("ellipse command", () => {
      const result = commands.ellipse(200, 200, 100, 50, 2);
      expect(result).toBe("ELLIPSE 200,200,100,50,2\n");
    });
  });

  describe("Image Commands", () => {
    test("bitmap command", () => {
      const result = commands.bitmap(100, 100, 8, 24, 0, "FF00FF00FF00FF00");
      expect(result).toBe("BITMAP 100,100,8,24,0,FF00FF00FF00FF00\n");
    });

    test("putbmp command", () => {
      const result = commands.putbmp(100, 100, "logo.bmp");
      expect(result).toBe('PUTBMP 100,100,"logo.bmp"\n');
    });

    test("putpcx command", () => {
      const result = commands.putpcx(100, 100, "logo.pcx");
      expect(result).toBe('PUTPCX 100,100,"logo.pcx"\n');
    });

    test("download command", () => {
      const result = commands.download("logo.pcx", "LOGO");
      expect(result).toBe('DOWNLOAD "logo.pcx","LOGO"\n');
    });
  });
});
