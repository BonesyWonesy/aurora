// Declaration
/**
 * The sequence manager is responsible for managing which sequences are active and which ones are being rendered.
 */
export class CanvasButton {
  constructor(p5, options) {
    this.p5 = p5;

    this.x = options.x || p5.width;
    this.y = options.y || p5.height;
    this.width = options.width || 160;
    this.height = options.height || 40;
    this.isHovered = options.isHovered || false;
    this.isClicked = options.isClicked || false;
    this.label = options.label || "Button";
  }

  setIsHovered(toggle) {
    this.isHovered = toggle;
  }

  isPositionInside(x, y) {
    return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
  }

  render(p5) {
    // Check if the mouse is over the button
    // Gradient fill

    let c1 = p5.color(63, 209, 205);
    //c1 = p5.color(190, 100, 100, 100)
    let c2 = p5.color(7, 35, 130);
    // c2 = p5.color(310, 100, 100, 100)

    if (this.isHovered) {
      // Lighter gradient when hovered
      c1 = p5.color(93, 239, 235);
      c2 = p5.color(27, 55, 150);
    }

    this.radialGradient(
      p5.width / 2 - 40,
      p5.height / 2 - 120,
      0, //Start pX, pY, start circle radius
      p5.width / 2 - 40,
      p5.height / 2 - 120,
      380, //End pX, pY, End circle radius
      c1, //Start color
      c2, //End color
      p5
    );
    //p5.ellipse(p5.width / 2, p5.height / 2, 100, 100);
    p5.rect(this.x, this.y, this.width, this.height, 40); // 20 is the border radius

    // Button label
    p5.noStroke();
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textSize(18);
    p5.fill(255);
    p5.text(this.label, this.x + this.width / 2, this.y + this.height / 2);

    this.shadow(p5);
  }

  radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE, p5) {
    let gradient = p5.drawingContext.createRadialGradient(sX, sY, sR, eX, eY, eR);
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);

    p5.drawingContext.fillStyle = gradient;
  }

  shadow(p5) {
    p5.drawingContext.shadowOffsetX = 10;
    p5.drawingContext.shadowOffsetY = 10;
    p5.drawingContext.shadowBlur = 16;
    p5.drawingContext.shadowColor = p5.color(30, 30, 18, 100);
  }
}
/*
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}
*/

export default CanvasButton;
