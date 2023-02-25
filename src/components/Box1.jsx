import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cylinder } from '@react-three/drei'
export default function Box1(props) {
  const Mesh = useRef(null)
  let inc=()=>{
    Mesh.current.scale.y += 0.1
    Mesh.current.position.y = (Mesh.current.scale.y * .1) / 2
  }
  let dec=()=>{
    Mesh.current.scale.y -= 0.1
    Mesh.current.position.y = (Mesh.current.scale.y * .1) / 2
  }
  useFrame(() => {
    // const a = clock.getElapsedTime();
    // if(Mesh.current.scale.y<19)
    //    {Mesh.current.scale.y +=0.1
    //     Mesh.current.position.y=(Mesh.current.scale.y*.1)/2
    // }
    
    if (Mesh.current.scale.y < props.nSize) {
    
      inc()
    }
    if (Mesh.current.scale.y > props.nSize) {
      dec()
      
    }
  });
  return (
    <group position={[0, 1, 0]}>
      <mesh ref={Mesh} position={[0, 0, 0]} scale={[1, 1, 1]}>
        <Cylinder color="pink" position={[0, 0, 0]} args={[.65, .65, .1]}>
          <meshStandardMaterial color="skyblue" ></meshStandardMaterial>
        </Cylinder>
      </mesh>
    </group>
  )
}
