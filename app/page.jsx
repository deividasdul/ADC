"use client";

import React, { useEffect, useRef } from "react";

import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = ({ ref, label }) => {
  return (
    <div ref={ref} className="h-screen text-7xl m-16 font-bold text-green-500">
      <h2>{label}</h2>
    </div>
  );
};

const page = () => {
  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const canvas = document.querySelector(".webgl");

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

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 5;

    scene.add(camera);

    // Stars

    const starsGeometry = new THREE.BufferGeometry();
    const count = 10000;

    const vertices = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let i3 = i * 3;

      vertices[i3 + 0] = (0.5 - Math.random()) * 10;
      vertices[i3 + 1] = (0.5 - Math.random()) * 30;
      vertices[i3 + 2] = (0.5 - Math.random()) * 5;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: "red",
      size: 0.02,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: window.devicePixelRatio >= 2 ? false : true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(sizes.width, sizes.height);

    // Animation
    const tick = () => {
      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(firstRef.current, {
      x: "-100vw",
      duration: 0.75,
      ease: "sine.inOut",
    });

    gsap.from(secondRef.current, {
      x: "-100vw",
      duration: 0.75,
      ease: "sine.inOut",
      scrollTrigger: secondRef.current,
    });

    gsap.from(thirdRef.current, {
      x: "-100vw",
      duration: 0.75,
      ease: "sine.inOut",
      scrollTrigger: thirdRef.current,
    });
  });

  return (
    <>
      <canvas className="webgl fixed top-0 left-0 w-full h-full"></canvas>

      <Section ref={firstRef} label={"CHAT ANONYMOUSLY"} />
      <Section ref={secondRef} label={"USE FREE OF CHARGE"} />
      <Section ref={thirdRef} label={"STAY IN TOUCH"} />
    </>
  );
};

export default page;
