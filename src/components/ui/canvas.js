import React from "react";
import Sketch from "@react-p5/core";
import SequenceManager from "../../sequenceManager";
import AppNavigation from "../../canvasComponents/appNavigation";

let sm = null;
let canvasPosition = null;
let appNavigation = null;

export const Canvas = (props) => {
  function handleMouseClicked() {}
  function handleMousePressed(event) {
    const mouseX = event.x - (canvasPosition?.x ?? 0);
    const mouseY = event.y - (canvasPosition?.y ?? 0);

    appNavigation?.mousePressed(mouseX, mouseY);
  }

  function handleMouseMoved(event) {
    // Offset relative to canvas position
    const mouseX = event.x - (canvasPosition?.x ?? 0);
    const mouseY = event.y - (canvasPosition?.y ?? 0);
    console.log(`(MouseX,MouseY) = (${event.x}, ${event.y})`);

    appNavigation?.mouseMoved(mouseX, mouseY);
  }

  const setup = (p5, canvasParentRef) => {
    const canvas = p5.createCanvas(500, 400).parent(canvasParentRef);
    if (!sm) {
      sm = new SequenceManager(p5);
      console.log("creating sequence manager");
    }

    canvasPosition = canvas.position();

    canvas.mouseClicked(handleMouseClicked);
    canvas.mouseMoved(handleMouseMoved);
    canvas.mousePressed(handleMousePressed);

    appNavigation = new AppNavigation(p5, {});
  };

  const draw = (p5) => {
    p5.frameRate(120);

    p5.clear();
    sm.render(p5);

    appNavigation?.render(p5);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
