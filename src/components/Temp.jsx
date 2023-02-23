import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export  function Model1(props) {
  const { nodes, materials } = useGLTF("/capsule.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.body_TOP}
         
      
        />
          {/* <meshStandardMaterial wireframe color="blue" />
        </mesh> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.body_colo__LOW}
     
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["body_color.MID"]}
     
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
        //   scale-z=".7"
          material={materials["body_color._GLASS"]}
          
        />
      </group>
    </group>
  );
}

useGLTF.preload("/capsule.glb");