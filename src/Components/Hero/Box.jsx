import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

function Box({ position, color, box, ...props }) {
  const ref = useRef();
  const [count, setCount] = useState(2);
  console.log(box[count].uuid);
  useEffect(() => {});

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh
      {...props}
      position={position}
      ref={ref}
      onPointerDown={() => setCount((count + 1) % 3)}
      geometry={box[count]}
    >
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

export default Box;
