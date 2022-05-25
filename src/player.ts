import * as BABYLON from "@babylonjs/core";

class Player {
    mesh
    camera
    cameraPosition

    constructor(scene) {
        this.mesh = BABYLON.MeshBuilder.CreateSphere("player", {
            segments: 16,
            diameter: 1
        }, scene)
        this.mesh.checkCollisions = true;
        this.mesh.speed = new BABYLON.Vector3(0, 0, 0.08);
        this.mesh.nextspeed = BABYLON.Vector3.Zero()

        this.cameraPosition = BABYLON.MeshBuilder.CreateBox("camera pointer", {}, scene)
        this.cameraPosition.speed = new BABYLON.Vector3(0, 0, 0.08);
        this.cameraPosition.nextspeed = BABYLON.Vector3.Zero()

        this.camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 3, Math.PI / 4, 44, new BABYLON.Vector3(0, 1, 0), scene);
        this.camera.lowerRadiusLimit = 10;
        this.camera.upperRadiusLimit = 100;
        this.camera.upperBetaLimit = Math.PI / 2 - 0.1;
        this.camera.lockedTarget = this.cameraPosition
    }
}

export default Player