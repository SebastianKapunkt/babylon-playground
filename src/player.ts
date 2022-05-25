import * as BABYLON from "@babylonjs/core";

class Player {
    mesh
    camera

    constructor(scene, canvas) {
        this.mesh = BABYLON.MeshBuilder.CreateSphere("target", {segments: 16, diameter: 1}, scene)
        this.mesh.checkCollisions = true;
        this.mesh.speed = new BABYLON.Vector3(0, 0, 0.08);
        this.mesh.nextspeed = BABYLON.Vector3.Zero()

        this.camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 3, Math.PI / 4, 44, new BABYLON.Vector3(0, 1, 0), scene);
        this.camera.lowerRadiusLimit = 10;
        this.camera.upperRadiusLimit = 100;
        this.camera.upperBetaLimit = Math.PI / 2 - 0.1;
        this.camera.attachControl(canvas, true);
        this.camera.inputs.attached.pointers.buttons = [1];
        this.camera.lockedTarget = this.mesh;
    }
}

export default Player