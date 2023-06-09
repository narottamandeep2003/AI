import React, { useRef } from 'react'
import { Cylinder } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export default function Box2(props) {
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

    if (Mesh.current.scale.y < props.nSize) {
      inc()
      
    }
     if (Mesh.current.scale.y > props.nSize) {
       dec()
      
    }
  });
  return (
    <group position={[3, .65, 0]}>
      <mesh ref={Mesh} position={[0, 0, 0]} scale={[1, 1, 1]}>
        <Cylinder color="pink" args={[.65, .65, .1]}>
          <meshStandardMaterial color="blue"></meshStandardMaterial>
        </Cylinder>
      </mesh>

    </group>
  )
}
