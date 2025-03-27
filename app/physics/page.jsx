"use client";

import React, { useEffect } from "react";
import * as THREE from "three";
import CANNON from "cannon";
import GUI from "lil-gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Physics = () => {
  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Scene

    const scene = new THREE.Scene();

    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);
    world.broadphase = new CANNON.SAPBroadphase(world);
    world.allowSleep = true;

    const defaultMaterial = new CANNON.Material("default");

    const defaultContactMaterial = new CANNON.ContactMaterial(
      defaultMaterial,
      defaultMaterial,
      {
        friction: 0.3,
        restitution: 0.7,
      }
    );
    world.addContactMaterial(defaultContactMaterial);

    // Lightning

    const ambientLight = new THREE.AmbientLight("white", 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight("white", 1);
    directionalLight.castShadow = true;
    directionalLight.position.set(1, 1, 0);
    scene.add(directionalLight);

    // Objects

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1),
      new THREE.MeshStandardMaterial()
    );
    sphere.castShadow = true;
    sphere.scale.set(0.5, 0.5, 0.5);
    sphere.position.set(0, 3, 0);
    scene.add(sphere);

    const sphereShape = new CANNON.Sphere(0.5);
    const sphereBody = new CANNON.Body({
      shape: sphereShape,
      mass: 1,
      material: defaultMaterial,
    });
    sphereBody.position.copy(sphere.position);

    world.addBody(sphereBody);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(5, 5),
      new THREE.MeshStandardMaterial({
        color: "#777777",
        metalness: 0.3,
        roughness: 0.4,
      })
    );
    floor.receiveShadow = true;
    floor.rotation.x = -Math.PI * 0.5;
    scene.add(floor);

    const floorShape = new CANNON.Plane();
    const floorBody = new CANNON.Body({
      shape: floorShape,
      material: defaultMaterial,
      position: new CANNON.Vec3(0, 0, 0),
      mass: 0,
    });
    floorBody.quaternion.setFromAxisAngle(
      new CANNON.Vec3(-1, 0, 0),
      Math.PI * 0.5
    );

    world.addBody(floorBody);

    // Camera

    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);

    const camera = new THREE.PerspectiveCamera(
      55,
      sizes.width / sizes.height,
      0.1,
      100
    );

    camera.position.set(0, 2.5, 5);
    camera.lookAt(floor);

    // Renderer

    const canvas = document.querySelector(".webgl");

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Animation

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    const clock = new THREE.Clock();
    let currentTime = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - currentTime;
      currentTime = elapsedTime;

      world.step(1 / 60, deltaTime, 3);

      sphereBody.applyForce(new CANNON.Vec3(-0.5, 0, 0), sphereBody.position);

      sphere.position.copy(sphereBody.position);

      controls.update();

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();
  });
  return (
    <>
      <canvas className="webgl"></canvas>
    </>
  );
};

export default Physics;
