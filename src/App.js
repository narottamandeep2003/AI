import './App.css';
import Home from './components/Home';
import Water from './components/Water';

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
function App() {
  return (
    <>
    {/* <Home></Home> */}
    <Water></Water>
   
    </>
  );
}

export default App;


