"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "../public/styles/style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const Home = () => {
  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    gltfLoader.setDRACOLoader(dracoLoader);
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load("/textures/9.png");

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

    // Lightning

    const ambientLight = new THREE.AmbientLight("white", 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight("white", 3);
    directionalLight.position.set(1, 1, 0);
    scene.add(directionalLight);

    // Objects

    const objectDistance = 4;

    var objectsToTest = [];
    var phoneMixer = null;
    var phone;
    gltfLoader.load("/models/phone/scene.gltf", (gltf) => {
      gltf.scene.position.set(2, 0, 0);
      gltf.scene.scale.set(0.8, 0.8, 0.8);
      scene.add(gltf.scene);

      phone = gltf.scene;
      objectsToTest.push(phone);
      phoneMixer = new THREE.AnimationMixer(gltf.scene);
      const action = phoneMixer.clipAction(gltf.animations[0]);
      action.play();
    });

    var handshake;
    gltfLoader.load("/models/handshake/scene.gltf", (gltf) => {
      gltf.scene.scale.set(0.3, 0.3, 0.3);
      gltf.scene.rotation.set(0, Math.PI * 0.5, 0);
      gltf.scene.position.set(-2, -objectDistance, 0);
      objectsToTest.push(handshake);
      handshake = gltf.scene;
      scene.add(gltf.scene);
    });

    var letterMixer = null;
    var letter;
    gltfLoader.load("/models/letter/scene.gltf", (gltf) => {
      gltf.scene.rotation.set(Math.PI * 0.5, 0, 0);

      gltf.scene.scale.set(4, 4, 4);
      gltf.scene.position.set(2, -objectDistance * 2, 0);
      letter = gltf.scene;
      scene.add(gltf.scene);
      objectsToTest.push(letter);
      letterMixer = new THREE.AnimationMixer(gltf.scene);
      const action = letterMixer.clipAction(gltf.animations[0]);
      action.play();
    });

    // Particles

    const particleGeometry = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
      alphaMap: particleTexture,
      transparent: true,
      size: 0.1,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const count = 500;

    const vertices = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let i3 = i * 3;

      vertices[i3 + 0] = (Math.random() - 0.5) * 10;
      vertices[i3 + 1] = (Math.random() - 0.5) * 5 * objectDistance;
      vertices[i3 + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Camera

    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);

    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      100
    );

    camera.position.set(0, 2, 5);

    cameraGroup.add(camera);

    // Renderer

    const canvas = document.querySelector(".webgl");

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Animation

    const cursor = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    });

    const clock = new THREE.Clock();
    var currentTime = 0;

    const raycaster = new THREE.Raycaster();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - currentTime;
      currentTime = elapsedTime;

      if (phoneMixer) phoneMixer.update(deltaTime);
      if (letterMixer) letterMixer.update(deltaTime);

      raycaster.setFromCamera(new THREE.Vector2(cursor.x, cursor.y), camera);

      camera.position.y = -(scrollY / sizes.height) * objectDistance;

      cameraGroup.position.x = cursor.x * 0.5;
      cameraGroup.position.y = -cursor.y * 0.5;

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();
  });

  gsap.registerPlugin(ScrollTrigger);

  const firstTitle = useRef();
  const secondTitle = useRef();
  const thirdTitle = useRef();

  useGSAP(() => {
    gsap.to(firstTitle.current, {
      x: 360,
      y: 180,
      duration: 2,
      scrollTrigger: {
        trigger: firstTitle.current,
        start: "top 80%",
        end: "top 50%",
      },
    });

    gsap.to(secondTitle.current, {
      x: -360,
      y: 180,
      duration: 2,
      scrollTrigger: {
        trigger: secondTitle.current,
        start: "top 80%",
        end: "top 50%",
      },
    });

    gsap.to(thirdTitle.current, {
      x: 360,
      y: 180,
      duration: 2,
      scrollTrigger: {
        trigger: thirdTitle.current,
        start: "top 80%",
        end: "top 50%",
      },
    });
  });

  return (
    <>
      <canvas className="webgl"></canvas>

      <div className="box">
        <section className="section">
          <h1 ref={firstTitle} id="first" className="title">
            CHAT ANONYMOUSLY
          </h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
      </div>

      <div className="box">
        <section className="section">
          <h1 ref={secondTitle} id="2" className="title">
            USE FREE OF CHARGE
          </h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
      </div>

      <div className="box">
        <section className="section">
          <h1 ref={thirdTitle} id="3" className="title">
            STAY IN TOUCH
          </h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
