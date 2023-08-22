import React, { useRef, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

export default function Hero() {
  const gltf = useLoader(GLTFLoader, "./sneaker.glb");
  const ref = useRef();

  return (
    <div className="canvasContainer">
      <Canvas
        className="canvas"
        camera={{ position: [0.6, 1.1, 0], fov: 40 }}
        shadows
        style={{ height: "80vh", width: "100%" }}
      >
        <directionalLight position={[12, 0.2, 6]} intensity={1} castShadow />
        <Environment files="./images/sky.hdr" background blur={1} />
        <OrbitControls target={[0, 1, 0]} enableZoom={false} autoRotate />
        <primitive object={gltf.scene} position={[0, 0.94, 0]} ref={ref} />
      </Canvas>
    </div>
  );
}
