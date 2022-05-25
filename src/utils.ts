import * as BABYLON from "@babylonjs/core";

const createCanvas = () => {
    return document.getElementById("gameCanvas") as HTMLCanvasElement
}

const createSkyBox = (scene) => {
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 200.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
    skybox.checkCollisions = true;
    return skybox
}

const createGround = (scene) => {
    var ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", 'textures/heightmap.png', {width:100, height:100, subdivisions: 50, maxHeight: 10}, scene);
    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    var groundTexture = new BABYLON.Texture("textures/ground.jpg", scene);
    groundTexture.uScale = 15;
    groundTexture.vScale = 15;
    groundMaterial.diffuseTexture = groundTexture
    groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    ground.material = groundMaterial;
    ground.checkCollisions = true;
    return ground
}

export { createCanvas, createSkyBox, createGround}