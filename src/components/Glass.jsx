import React, { useRef } from "react";
import { useGLTF,MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from 'leva'

export function Model(props) {
    // const config = useControls({
    //     meshPhysicalMaterial: false,
    //     transmissionSampler: false,
    //     backside: false,
    //     samples: { value: 10, min: 1, max: 32, step: 1 },
    //     resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    //     transmission: { value: 1, min: 0, max: 1 },
    //     roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    //     thickness: { value: 0.2, min: 0, max: 10, step: 0.01 },
    //     ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    //     chromaticAberration: { value: 0.05, min: 0, max: 1 },
    //     anisotropy: { value: 1.5, min: 0, max: 1, step: 0.01 },
    //     distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    //     distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
    //     temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
    //     attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    //     attenuationColor: '#ffffff',
    //     color: '#c9ffa1',
    //     bg: '#839681'
    //   })
    const config = useControls({
        // meshPhysicalMaterial: false,
        // transmissionSampler: false,
        resolution: { value: 2048, min: 256, max: 2048, step: 256 },
        // transmission: { value: 1, min: 0, max: 1 },
        // roughness: { value: 0.3, min: 0, max: 1, step: 0.01 },
        // thickness: { value: 0.2, min: 0, max: 10, step: 0.01 },
        ior: { value: 5, min: 1, max: 5, step: 0.01 },
        chromaticAberration:{value: 0.05, min: 1, max: 5, step: 0.01},
        anisotropy: { value: 1.5, min: 0, max: 1, step: 0.01 },
        clearcoat:{value: 1, min: 0, max: 1, step: 0.01},
        // distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
        // distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
        // temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
        // attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
        clearcoatRoughness:{value: 0.2, min: 0, max: 10, step: 0.01},
        envMapIntensity:{value: 3, min: 0, max: 10, step: 0.01},
        // attenuationColor: '#ffffff',
        // color: 'white',
        // bg: '#839681'
      })
  const { nodes, materials } = useGLTF("/Glass1.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, 1.48, 0]}
        scale={[1, 1.46, 1]}
      >
      {config.meshPhysicalMaterial ? <meshPhysicalMaterial {...config} /> : <MeshTransmissionMaterial  {...config} />}
      {/*  <MeshTransmissionMaterial thickness={0.2} chromaticAberration={0.05} anisotropy={1.5} clearcoat={1} clearcoatRoughness={0.2} envMapIntensity={3} /> */ }
      </mesh>
    </group>
  );
}

useGLTF.preload("/Glass1.glb");

