import React, { useRef, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

export default function Hero() {
  const gltf = useLoader(GLTFLoader, "./sneaker.glb");
  const ref = useRef();
  const [rotation, setRotation] = useState(false);
  const [scale, setScale] = useState(1); // Initial scale factor

  const animate = () => {
    setRotation((rotation) => rotation + 0.004);
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleResize = () => {
    const scaleFactor = Math.min(
      window.innerWidth / window.innerHeight, // Adjust as needed
      window.innerHeight / window.innerWidth // Adjust as needed
    );
    setScale(scaleFactor);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      camera={{ position: [0.6, 1.1, 0], fov: 40 }}
      shadows
      style={{ height: "100vh", width: "100%" }}
    >
      <directionalLight position={[12, 0.2, 6]} intensity={1} castShadow />
      <Environment files="./images/sky.hdr" background />
      <OrbitControls target={[0, 1, 0]} />
      <primitive
        object={gltf.scene}
        position={[0, 0.94, 0]}
        ref={ref}
        rotation-y={rotation}
        scale={[scale, scale, scale]} // Apply scale to all axes
      />
    </Canvas>
  );
}
