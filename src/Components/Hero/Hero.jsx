import React from "react";
import { Canvas } from "react-three-fiber";
import Box from "./Box";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";

function Hero() {
  const box = useMemo(
    () => [
      new THREE.BoxGeometry(),
      new THREE.SphereGeometry(0.785398),
      new THREE.DodecahedronGeometry(0.785398),
    ],
    []
  );
  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: "pink" },
      date: Date.now(),
    };
  }, []);

  const pA = useControls("Box A", options);
  const pB = useControls("Box B", options);

  return (
    <Canvas
      camera={{ position: [1, 2, 3] }}
      style={{ backgroundColor: "black", width: "100%", height: "100vh" }}
    >
      <Box
        position={[-1, 1, 0]}
        rotation={[pA.x, pA.y, pA.z]}
        visible={pA.visible}
        color={pA.color}
        box={box}
      />
      <Box
        position={[1, 1, 0]}
        rotation={[pB.x, pB.y, pB.z]}
        visible={pB.visible}
        color={pB.color}
        box={box}
      />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper />
    </Canvas>
  );
}

export default Hero;
