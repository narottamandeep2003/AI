import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Lightformer, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { Model1 } from './Temp'

import { easing } from 'maath'

// import { animated,useSpring } from '@react-spring/three'
// import { useControls } from 'leva'
import Box1 from './Box1'
import Box2 from './Box2'
import twojug from './twoJug'
export default function Water() {


    const msg = new SpeechSynthesisUtterance()

    const perfSucks = false
    // const [values, svalues] = useState("")
    const [Sizebox1, setSizebox1] = useState(0);
    const [Sizebox2, setSizebox2] = useState(0);
    const [SS, SetS] = useState(0)
    const win = window.innerWidth;
    const [input, setinput] = useState(1);
    const [SizeA, setSizeA] = useState(0);
    const [SizeB, setSizeB] = useState(0);
    const [s, setstates] = useState([]);

    const [a, seta] = useState(0)
    const [b, setb] = useState(0)
    const [c, setc] = useState(0)
    const handle = () => {
        let s = twojug([a, b], [c, 0])
        setSizeA(Number(a))
        setSizeB(Number(b))
        if (s.length !== 0) {
            msg.text = "Solution  exist "
            window.speechSynthesis.speak(msg)
            setstates(s)
            setinput(0)
        }
        else {
            msg.text = "Solution not  exist "
            window.speechSynthesis.speak(msg)
        }
    }


    const handleClick = () => {

        const one = 19 / SizeA
        const two = 12.5 / SizeB
        if (SS === 0) {
            setSizebox1(0)
            setSizebox2(0)
            msg.text = "Empty both jug"
            window.speechSynthesis.speak(msg)

            // svalues("Both are empty")
            if (s.length > SS + 1) {
                SetS(SS + 1)
            }
            else {
                msg.text = "solution " + s[SS][0]
                window.speechSynthesis.speak(msg)
                setinput(1)
                SetS([])
                SetS(0)
                seta(0)
                setb(0)
                setc(0)
            }
        }
        else if (s[SS - 1][0] !== s[SS][0] && s[SS - 1][1] !== s[SS][1]) {
            setSizebox1(s[SS][0] * one)
            setSizebox2(s[SS][1] * two)

            if (s[SS - 1][0] >= s[SS][0]) {
                msg.text = "Transfer water 1 to 2"
                window.speechSynthesis.speak(msg)
            }
            else {
                msg.text = "Transfer water 2 to 1"
                window.speechSynthesis.speak(msg)
            }
            // svalues("Transfer water")
            if (s.length > SS + 1) {
                SetS(SS + 1)
            }
            else {
                msg.text = "solution " + s[SS][0]
                window.speechSynthesis.speak(msg)
                setinput(1)
                SetS([])
                SetS(0)
                seta(0)
                setb(0)
                setc(0)
            }
        }
        else if (s[SS - 1][0] !== s[SS][0]) {
            setSizebox1(s[SS][0] * one)
            if (s[SS][0] === 0) {
                msg.text = "Empty one jug "
                window.speechSynthesis.speak(msg)
            }
            else {
                msg.text = "Fill one jug "
                window.speechSynthesis.speak(msg)
            }
            if (s.length > SS + 1) {
                SetS(SS + 1)

            }
            else {
                msg.text = "solution " + s[SS][0]
                window.speechSynthesis.speak(msg)
                setinput(1)
                SetS([])
                SetS(0)
                seta(0)
                setb(0)
                setc(0)
            }
        }
        else if (s[SS - 1][1] !== s[SS][1]) {
            setSizebox2(s[SS][1] * two)
            if (s[SS][1] === 0) {
                msg.text = "Empty second jug "
                window.speechSynthesis.speak(msg)
            }
            else {
                msg.text = "Fill second jug "
                window.speechSynthesis.speak(msg)
            }
            if (s.length > SS + 1) {
                SetS(SS + 1)
            }
            else {
                msg.text = "solution " + s[SS][0]
                window.speechSynthesis.speak(msg)
                setinput(1)
                SetS([])
                SetS(0)
                seta(0)
                setb(0)
                setc(0)
            }
        }
    }

    return (


        <div className='window'>
            {
                (input) ? (
                    <div className='inputBox'>
                        <div className="innerBox">
                            <input type="number" name="a" id="a" value={a} onChange={(e) => {
                                seta(e.target.value)
                            }} />
                            <input type="number" name="b" id="b" value={b} onChange={(e) => {
                                setb(e.target.value)
                            }} />
                            <input type="number" name="c" id="c" value={c}
                                onChange={(e) => {
                                    setc(e.target.value)
                                }} />
                        </div>
                        <button className='btns' onClick={handle}>Solve</button>

                    </div>
                ) : (
                    <div className='inputBox'>
                        <button className='btns' onClick={handleClick}>Next</button>
                    </div>
                )
            }

            <div className="con">
                <Canvas shadows
                    dpr={[1, perfSucks ? 1.5 : 2]}
                    eventSource={document.getElementById('root')}
                    eventPrefix="client"
                    // camera={{ position: [20, 20, 20], fov: 40 }}>
                    camera={{ position: (win <= 750 ? [10, 15, 35] : [20, 20, 20]), fov: (win <= 750 ? 20 : 40) }}

                >
                    <color attach="background" args={['#f0f0f0']} />
                    <Environment preset="city" blur={.8} resolution={256} />


                    {/* 19 */}
                    <group position={[-2, 0, 0]}>


                        <Box1 nSize={Sizebox1} ></Box1>
                        <Box2 nSize={Sizebox2} ></Box2>

                        {/* <Model></Model> */}
                        {/* 12.5 */}

                        {/* <Boxs size={size} pos={pos}></Boxs> */}
                        <Model1 scale={.003} position={[3, 0, 0]} scale-y=".002" ></Model1>
                        <Model1 scale={.003}   ></Model1>
                    </group>

                    <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color="red" scale={20} position={[0, -0.005, 0]}>
                        <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
                    </AccumulativeShadows>
                    <ContactShadows opacity={.3} scale={10} blur={1} far={10} resolution={256} color="#000000" />
                    <Env perfSucks={perfSucks} />
                    <OrbitControls  />

                </Canvas>
            </div>

        </div>
    )
}

function Env({ perfSucks }) {
    const ref = useRef()
    const win = window.innerWidth;
    useFrame((state, delta) => {
        // Animate the environment as well as the camera
        if (!perfSucks) {
            easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta)
            if (win >= 750) { easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta) }
            state.camera.lookAt(0, 1.2, 0)
        }
    })
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