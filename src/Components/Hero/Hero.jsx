import { OrbitControls, Sphere, stats } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment } from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function Hero() {
  const gltf = useLoader(GLTFLoader, "./sneaker.glb");

  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  });

  return (
    <Canvas
      camera={{ position: [0.6, 1.1, 0], fov: 20 }}
      shadows
      style={{ height: "40vh" }}
    >
      <directionalLight position={[12, 0.2, 6]} intensity={1} castShadowS>
        <Sphere args={[0.025]}></Sphere>
      </directionalLight>
      <primitive
        object={gltf.scene}
        position={[0, 0.94, 0]}
        children-0-castShadow
        ref={ref}
      />
      <Environment files="./images/sky.hdr" background />
      <OrbitControls target={[0, 1, 0]} />
    </Canvas>
  );
}
