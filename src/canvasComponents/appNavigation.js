// Declaration
import CanvasButton from "./canvasButton";
/**
 * The sequence manager is responsible for managing which sequences are active and which ones are being rendered.
 */
export class AppNavigation {
  constructor(p5, options) {
    this.p5 = p5;

    this.x = 0;
    this.y = 0;
    this.width = p5.width;
    this.height = 150;
    this.isHovered = options.isHovered || false;
    this.isClicked = options.isClicked || false;
    this.flatList = [];

    let subOptions = [];

    // Define sub-options
    for (let i = 0; i < 3; i++) {
      subOptions.push({
        button: new CanvasButton(p5, { x: 50, y: 100 + i * 50, label: "Option " + (i + 1) }),
        subItems: [],
        state: {
          expanded: false,
        },
      });
    }

    this.navigation = [
      {
        button: new CanvasButton(p5, { x: 50, y: 8, label: "Main Menu" }),
        subItems: subOptions,
        state: {
          expanded: false,
        },
      },
    ];
  }

  mouseMoved(x, y) {
    if (!this.isPositionInside(x, y)) {
      return;
    }
  }

  mouseClicked(x, y) {
    if (!this.isPositionInside(x, y)) {
      return;
    }
  }

  mousePressed(x, y) {
    if (!this.isPositionInside(x, y)) {
      return;
    }
  }

  setIsHovered(toggle) {
    this.isHovered = toggle;
  }

  isPositionInside(x, y) {
    return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
  }

  render(p5) {
    function renderNavItem(navItem) {
      navItem.button.render(p5);

      if (navItem.subItems.length && navItem.state.expanded) {
        navItem.subItems.forEach((subItem) => {
          renderNavItem(subItem);
        });
      }
    }
    this.navigation.forEach((navItem) => {
      renderNavItem(navItem);
    });
  }
}

export default AppNavigation;
