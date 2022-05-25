import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import * as BABYLON from "@babylonjs/core";
import { createCanvas, createSkyBox, createGround } from "./utils"
import Player from "./player"

class App {
    constructor() {
        const canvas = createCanvas()

        var engine = new BABYLON.Engine(canvas);
        var scene = new BABYLON.Scene(engine);
        createSkyBox(scene)
        createGround(scene)
        new Player(scene, canvas)

        var light1: BABYLON.HemisphericLight = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Alt+I
            if (ev.altKey && ev.keyCode === 73) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }

}
new App();