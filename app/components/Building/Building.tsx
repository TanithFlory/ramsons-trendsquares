"use client";

import { Canvas } from "@react-three/fiber";

export default function Building() {
  return (
    <div className="absolute left-[50%] translate-x-[-50%] z-20 h-full w-full">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
}
