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
        var ground = createGround(scene)
        var player = new Player(scene)

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

        scene.registerBeforeRender(function () {
            // Casting a ray to get height
            var ray = new BABYLON.Ray(new BABYLON.Vector3(player.mesh.position.x, ground.getBoundingInfo().boundingBox.maximumWorld.y + 1, player.mesh.position.z), new BABYLON.Vector3(0, -1, 0));
            var worldInverse = new BABYLON.Matrix();
            ground.getWorldMatrix().invertToRef(worldInverse);
            ray = BABYLON.Ray.Transform(ray, worldInverse);
            var pickInfo = ground.intersects(ray);
            if (pickInfo.hit) {
                player.mesh.position.y = pickInfo.pickedPoint.y + 1;
                player.cameraPosition.y = pickInfo.pickedPoint.y + 1;
            }
        });

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }

}
new App();