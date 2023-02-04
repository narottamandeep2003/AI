import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Lightformer, Cylinder, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { Model } from './Glass'
import { easing } from 'maath'
export default function Water() {
    const [perfSucks, degrade] = useState(false)
    return (
        <>
            <div className="con">
                <Canvas shadows
                    dpr={[1, perfSucks ? 1.5 : 2]}
                    eventSource={document.getElementById('root')}
                    eventPrefix="client"
                    camera={{ position: [20, 5, 20], fov: 26 }}>
                    <color attach="background" args={['#f0f0f0']} />
                    <Environment preset="city" blur={.8} resolution={256} />
                    {/* <ambientLight intensity={0.1} /> */}
                    <directionalLight color="red" position={[0, 0, 5]} />
                    <group position={[-1, 0, 0]}>
                        <mesh position={[0, 1.2, 0]}>
                            <Cylinder color="pink" args={[.8, .7, 2]}>
                                <meshStandardMaterial color="skyblue"></meshStandardMaterial>
                            </Cylinder>

                        </mesh>
                        <Model></Model>
                        <mesh position={[3, 1, 0]}>
                            <Cylinder color="pink" args={[.6, .6, 1]}>
                                <meshStandardMaterial color="skyblue"></meshStandardMaterial>
                            </Cylinder>

                        </mesh>
                        <Model scale={.8} position={[3, 0, 0]}></Model>
                    </group>

                    <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color="red" scale={20} position={[0, -0.005, 0]}>
                        <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
                    </AccumulativeShadows>
                    <ContactShadows opacity={.3} scale={10} blur={1} far={10} resolution={256} color="#000000" />
                    <Env perfSucks={perfSucks} />
                    <OrbitControls />

                </Canvas>
            </div>
        </>
    )
}

function Env({ perfSucks }) {
    const ref = useRef()
    useFrame((state, delta) => {
        // Animate the environment as well as the camera
        if (!perfSucks) {
            easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta)
            // easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta)
            // state.camera.lookAt(0,1, 0)
        }
    })
    // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
    return (
        <Environment frames={perfSucks ? 1 : Infinity} preset="city" resolution={256} background blur={0.8}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />

            <group rotation={[Math.PI / 2, 1, 0]}>
                {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
                    <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
                ))}
                <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
                <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
                <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
            </group>
            <group ref={ref}>
                <Lightformer intensity={5} form="ring" color="red" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[10, 10, 1]} />
            </group>

        </Environment>
    )
}