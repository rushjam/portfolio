import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

import { Bounds, Edges } from "@react-three/drei";
import { LayerMaterial, Depth, Fresnel } from "lamina";
import { useRef } from "react";

const Computers = ({ isMobile }) => {
  const ref = useRef();
  const { nodes } = useGLTF("/cursor.glb");
  const [gradient, setGradient] = useState(0.5);

  // Animate gradient
  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 2);
    const cos = Math.cos(state.clock.elapsedTime / 2);
    ref.current.layers[0].origin.set(cos / 2, 0, 0);
    ref.current.layers[1].origin.set(cos, sin, cos);
    ref.current.layers[2].origin.set(sin, cos, sin);
    ref.current.layers[3].origin.set(cos, sin, cos);
  });

  return (
    <mesh scale={[0.15, 1, 0.5]} geometry={nodes.Cube.geometry}>
      <LayerMaterial ref={ref} toneMapped={false}>
        <Depth
          colorA="#ff0080"
          colorB="black"
          alpha={1}
          mode="normal"
          near={0.5 * gradient}
          far={0.5}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA="blue"
          colorB="#f7b955"
          alpha={1}
          mode="add"
          near={2 * gradient}
          far={2}
          origin={[0, 1, 1]}
        />
        <Depth
          colorA="green"
          colorB="#f7b955"
          alpha={1}
          mode="add"
          near={3 * gradient}
          far={3}
          origin={[0, 1, -1]}
        />
        <Depth
          colorA="white"
          colorB="red"
          alpha={1}
          mode="overlay"
          near={1.5 * gradient}
          far={1.5}
          origin={[1, -1, -1]}
        />
        <Fresnel
          mode="add"
          color="white"
          intensity={0.5}
          power={1.5}
          bias={0.05}
        />
      </LayerMaterial>
      <primitive
        object={nodes}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      />
      <Edges color="white" />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [7, 0, 10], zoom: 2, fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <group rotation={[Math.PI / 10, Math.PI / 10, -Math.PI / 2]}>
          <Bounds fit clip observe margin={1}>
            <Computers isMobile={isMobile} />
          </Bounds>
          {/* <gridHelper
            args={[10, 40, "#101010", "#050505"]}
            position={[-0.25, 0, 0]}
            rotation={[0, 0, Math.PI / 2]}
          /> */}
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
